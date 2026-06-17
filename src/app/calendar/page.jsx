'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function formatDateTime(dateTime) {
  if (!dateTime) return "N/A";
  
  try {
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch (err) {
    return dateTime;
  }
}

function getEventDuration(start, end) {
  if (!start || !end) return "N/A";
  
  try {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const diffMs = endTime - startTime;
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins} mins`;
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  } catch (err) {
    return "N/A";
  }
}

export default function CalendarPage() {
    const router = useRouter();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [pageToken, setPageToken] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    // Initial load
    useEffect(() => {
        fetchEvents(null);
    }, []);

    const fetchEvents = async (token) => {
        try {
            token ? setLoadingMore(true) : setLoading(true);

            const res = await fetch('/api/calendar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageToken: token }),
            });

            if (!res.ok) {
                if (res.status === 401) {
                    router.push('/signin');
                    return;
                }
                throw new Error('Failed to fetch events');
            }

            const data = await res.json();

            if (token) {
                // Append more events
                setEvents(prev => [...prev, ...data.events]);
            } else {
                // Initial load
                setEvents(data.events);
            }

            setPageToken(data.nextPageToken);
            setHasMore(!!data.nextPageToken);
        } catch (err) {
            console.error('Error fetching events:', err);
            setHasMore(false);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    const handleLoadMore = () => {
        if (pageToken && !loadingMore) {
            fetchEvents(pageToken);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-blue-950 flex items-center justify-center">
                <p className="text-blue-100">Loading events...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-blue-950">
      <div className="bg-blue-900 border-b border-cyan-600 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-blue-100">Calendar</h1>
          <p className="text-sm text-blue-300 mt-1">
            {events.length} events loaded
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-blue-300 text-lg">No events found, looks like you have some time to touch grass</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-blue-900 border-2 border-cyan-600 hover:shadow-lg hover:shadow-cyan-600/50 transition-shadow cursor-pointer p-4"
                >
                 
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-semibold text-blue-100 flex-1">
                      {event.summary || '(No title)'}
                    </h2>
                    <span className="text-xs font-medium text-cyan-300 bg-blue-800 border border-cyan-600 px-2 py-1 ml-4 whitespace-nowrap">
                      {getEventDuration(
                        event.start?.dateTime,
                        event.end?.dateTime
                      )}
                    </span>
                  </div>

                 
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1">
                      <p className="text-sm text-blue-200">
                        <span className="font-medium">Start:</span>{' '}
                        {formatDateTime(event.start?.dateTime || event.start?.date)}
                      </p>
                      <p className="text-sm text-blue-200 mt-1">
                        <span className="font-medium">End:</span>{' '}
                        {formatDateTime(event.end?.dateTime || event.end?.date)}
                      </p>
                    </div>
                  </div>

                  
                  {event.description && (
                    <p className="text-sm text-blue-300 line-clamp-2">
                      {event.description}
                    </p>
                  )}

                  
                  {event.location && (
                    <p className="text-sm text-blue-300 mt-2">
                      Location: {event.location}
                    </p>
                  )}

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
                  {loadingMore ? 'Loading...' : 'Load More Events'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}