'use client';

import { useState } from 'react';
import { Bot, X, Send, Sparkles, Search, MessageCircle } from 'lucide-react';

export default function AIFeatures() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* AI Smart Search */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-10 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            Powered by AI
          </div>
          <h2 className="text-2xl font-bold text-white">AI Smart Search</h2>
          <p className="text-blue-100 text-sm">
            Describe what you&apos;re looking for in plain language and our AI will find it.
          </p>
          <div className="flex gap-2 bg-white rounded-xl p-1.5 shadow-lg">
            <Search className="w-5 h-5 text-gray-400 self-center ml-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='e.g. "comfortable headphones for long flights under £200"'
              className="flex-1 py-2 px-2 text-sm text-gray-800 outline-none bg-transparent"
            />
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
          <p className="text-xs text-blue-200">
            {/* Connect to /api/ai/search to enable real AI search */}
            AI search integration ready — connect your OpenAI API key to activate.
          </p>
        </div>
      </section>

      {/* AI Recommendations section */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-xl">
              <Bot className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Recommendations</h2>
              <p className="text-sm text-gray-500">
                Personalised picks based on your browsing &amp; purchase history
              </p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" /> AI Powered
            </span>
          </div>

          {/* Placeholder recommendation cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-blue-100 p-4 flex flex-col items-center gap-3 animate-pulse"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg" />
                <div className="w-full h-3 bg-gray-100 rounded" />
                <div className="w-2/3 h-3 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Connect your OpenAI API key via <code className="bg-gray-100 px-1 rounded">/api/ai/recommendations</code> to populate this section.
          </p>
        </div>
      </section>

      {/* Floating chat button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
        aria-label="Open AI chat"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:block">AI Assistant</span>
      </button>

      {/* Chat modal */}
      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50">
          <div className="w-full sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[80vh]">
            {/* Chat header */}
            <div className="flex items-center justify-between px-4 py-3 bg-blue-600">
              <div className="flex items-center gap-2 text-white">
                <Bot className="w-5 h-5" />
                <span className="font-semibold text-sm">EzyShop AI Assistant</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Beta</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-gray-700 shadow-sm max-w-xs">
                  Hi! I&apos;m your AI shopping assistant. I can help you find products, compare items, or answer questions. What are you looking for today?
                </div>
              </div>
            </div>

            {/* Chat input */}
            <div className="p-3 border-t border-gray-100 bg-white flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-blue-400"
                onKeyDown={(e) => e.key === 'Enter' && setMessage('')}
              />
              <button
                onClick={() => setMessage('')}
                className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center pb-2 px-4">
              Connect OpenAI API to enable real responses
            </p>
          </div>
        </div>
      )}
    </>
  );
}
