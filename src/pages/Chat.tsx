import React, { useState } from 'react';
import { Send, Brain, Loader2, Camera, AlertTriangle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'alert' | 'camera' | 'general';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your BlindSpot AI assistant. I'm actively monitoring all security cameras. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'general',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI responses with different types
    setTimeout(() => {
      const aiResponses: Message[] = [
        {
          id: (Date.now() + 1).toString(),
          text: "I've analyzed all camera feeds. Currently monitoring 8 active cameras with no immediate threats detected.",
          sender: 'ai',
          timestamp: new Date(),
          type: 'camera',
        },
        {
          id: (Date.now() + 2).toString(),
          text: "However, I noticed some unusual movement in Camera 3 (Parking Area) about 10 minutes ago. I've logged this for review.",
          sender: 'ai',
          timestamp: new Date(),
          type: 'alert',
        },
      ];
      setMessages(prev => [...prev, ...aiResponses]);
      setIsTyping(false);
    }, 2000);
  };

  const getMessageIcon = (type?: string) => {
    switch (type) {
      case 'camera':
        return <Camera className="h-5 w-5 text-blue-400" />;
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
      default:
        return <Brain className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white">AI Assistant</h1>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-blue-500">
          <div className="relative">
            <Brain className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-sm">AI Active</span>
        </div>
      </div>

      <div className="glass rounded-2xl h-[calc(100vh-12rem)] flex flex-col backdrop-blur-lg">
        <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3`}
            >
              {message.sender === 'ai' && (
                <div className="glass p-2 rounded-lg bg-opacity-20">
                  {getMessageIcon(message.type)}
                </div>
              )}
              <div
                className={`max-w-[80%] glass p-4 rounded-2xl backdrop-blur-md ${
                  message.sender === 'user'
                    ? 'bg-blue-500 bg-opacity-20 text-blue-50'
                    : 'bg-purple-500 bg-opacity-20 text-purple-50'
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
                <p className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start items-start gap-3">
              <div className="glass p-2 rounded-lg bg-opacity-20">
                <Loader2 className="h-5 w-5 text-purple-400 animate-spin" />
              </div>
              <div className="glass p-4 rounded-2xl bg-purple-500 bg-opacity-20 text-purple-50">
                <div className="flex items-center gap-2">
                  <span>Analyzing security feeds...</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-white border-opacity-10 backdrop-blur-md">
          <div className="flex gap-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about security status..."
              className="flex-1 glass bg-opacity-30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              disabled={!newMessage.trim()}
              className={`glass px-4 py-2 rounded-xl transition-all ${
                newMessage.trim()
                  ? 'bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-30'
                  : 'bg-gray-500 bg-opacity-20 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;