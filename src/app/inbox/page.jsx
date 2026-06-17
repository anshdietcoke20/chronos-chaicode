//to render emails on ui 

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function getEmailHeader(email, headerName) {
  return email.payload.headers.find(h => h.name === headerName)?.value || "N/A";
}

function getEmailPreview(email) {
  try {
    if (email.payload.parts) {
      const textPart = email.payload.parts.find(p => p.mimeType === 'text/plain');
      if (textPart && textPart.body.data) {
        const text = Buffer.from(textPart.body.data, 'base64').toString('utf-8');
        return text.substring(0, 100) + (text.length > 100 ? '...' : '');
      }
    }
    if (email.payload.body?.data) {
      const text = Buffer.from(email.payload.body.data, 'base64').toString('utf-8');
      return text.substring(0, 100) + (text.length > 100 ? '...' : '');
    }
  } catch (err) {
    console.error('Error parsing email body:', err);
  }
  return '[No preview available]';
}

export default function InboxPage() {
    const router = useRouter();
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [pageToken, setPageToken] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchEmails(null);
    }, []);

    const fetchEmails = async (token) => {
        try {
            token ? setLoadingMore(true) : setLoading(true);

            const res = await fetch('/api/inbox', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageToken: token }),
            });

            if (!res.ok) {
                if (res.status === 401) {
                    router.push('/signin');
                    return;
                }
                throw new Error('Failed to fetch emails');
            }

            const data = await res.json();

            if (token) {
                // Append more emails
                setEmails(prev => [...prev, ...data.emails]);
            } else {
                // Initial load
                setEmails(data.emails);
            }

            setPageToken(data.nextPageToken);
            setHasMore(!!data.nextPageToken);
        } catch (err) {
            console.error('Error fetching emails:', err);
            setHasMore(false);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    const handleLoadMore = () => {
        if (pageToken && !loadingMore) {
            fetchEmails(pageToken);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-blue-900 flex items-center justify-center">
                <p className="text-blue-100">Loading emails...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-blue-950">

      <div className="bg-blue-900 border-b border-cyan-600 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-100">Inbox</h1>
          <p className="text-sm text-blue-300 mt-1">
            {emails.length} emails loaded
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {emails.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-blue-300 text-lg">No emails found</p>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              {emails.map((email) => (
                <div
                  key={email.id}
                  className="bg-blue-900 border-2 border-cyan-600 text-xl cursor-pointer p-4"
                >
                
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-blue-100 flex-1">
                      {getEmailHeader(email, 'From')}
                    </h3>
                    <span className="text-xs text-blue-300 ml-4 whitespace-nowrap">
                      {getEmailHeader(email, 'Date')}
                    </span>
                  </div>
              
                  <h2 className="text-lg font-medium text-blue-100 mb-2">
                    {getEmailHeader(email, 'Subject') || '(No subject)'}
                  </h2>
            
                  <p className="text-blue-200 text-sm line-clamp-2">
                    {getEmailPreview(email)}
                  </p>
                </div>
              ))}
            </div>

      
            {hasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-6 py-2 bg-blue-600 border-2 border-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors font-bold"
                >
                  {loadingMore ? 'Loading...' : 'Load More Emails'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}