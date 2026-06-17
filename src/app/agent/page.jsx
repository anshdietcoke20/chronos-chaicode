'use client'; 

import Link from "next/link";
import { useState } from "react";

export default function AgentPage(){
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading('true')
        const res = await fetch('/api/agent', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                prompt,
            })
        });

        const data = await res.json();

        setResponse(data.result);
        setLoading(false)
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter' && !loading && prompt.trim()){
            handleSubmit();
        }
    };
    const getLoadingText = () => {
        if(loading) return 'Sending...';
        return 'Send'
    }

    return(
          <div className="min-h-screen bg-blue-950">
            
            {/* Header */}
            <div className="bg-blue-900 border-b border-cyan-600 sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <h1 className="text-3xl font-bold text-blue-100">AI Agent</h1>
                    <p className="text-sm text-blue-300 mt-1">
                        Describe what you want to do and our AI Agent will handle it!!
                    </p>
                </div>
            </div>
 
            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                
                {/* Input Section */}
                <div className="mb-8">
                    <div className="bg-blue-900 border-2 border-cyan-600 p-6">
                        <label className="block text-blue-100 font-semibold mb-4">
                            What would you like to do?
                        </label>
                        <textarea 
                            value={prompt} 
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="E.g., Send an email to ansh@example.com saying I'll be late, or Schedule a meeting for tomorrow at 3 PM."
                            disabled={loading}
                            className="w-full bg-blue-800 border-2 border-cyan-600 text-blue-100 placeholder-blue-400 p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            rows="5"
                        />
                        
                        <div className="flex gap-4">
                            <button 
                                onClick={handleSubmit} 
                                disabled={loading || !prompt.trim()}
                                className="flex-1 bg-blue-600 border-2 border-blue-500 text-white font-bold py-3 px-6 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors"
                            >
                                {getLoadingText()}
                            </button>
                            
                            <button 
                                onClick={() => {
                                    setPrompt('');
                                    setResponse('');
                                }}
                                disabled={loading}
                                className="bg-blue-900 border-2 border-cyan-600 text-cyan-300 font-bold py-3 px-6 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
 
                {/* Loading Indicator */}
                {loading && (
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center gap-3 bg-blue-900 border-2 border-cyan-600 px-6 py-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-cyan-300 font-semibold">Processing your request...</span>
                        </div>
                    </div>
                )}
 
                {/* Empty State */}
               
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4 text-blue-100"><i className="ri-robot-3-line"></i></div>
                        <p className="text-blue-300 text-lg">
                            Describe your task in natural language
                        </p>
                        <p className="text-blue-400 text-sm mt-2 mb-5">
                            Examples: Send an email or create a calendar event. 
                        </p>
                        <Link href="/dashboard" className= " text-blue-300 text-l">Click here to go to the dashboard!</Link>
                    </div>
                
                
                <div className="text-center">
            <p className="text-blue-300 text-lg pb-20">
              Powered by <span className="font-bold text-blue-200">&copy; Chronos</span> — Your personal time orchestrator
            </p>
            
          </div>
            </div>
        </div>
    )
}