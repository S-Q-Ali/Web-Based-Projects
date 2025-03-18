import React, { useEffect } from 'react';

interface ChatInterfaceProps {
  darkMode: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ darkMode }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://app.fastbots.ai/embed.js';
    script.setAttribute('data-bot-id', 'cm84nngzn00zmrik9tu7kvssw');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-white'}`}>
          Chat with Quranic Assistant
        </h2>
      </div>

      <div className="flex justify-center">
         <iframe
        className="w-full h-full"
        style={{ width: '100vw', height: '100vh', border: 'none' }}
        src="https://app.fastbots.ai/embed/cm84nngzn00zmrik9tu7kvssw"
      ></iframe>
      </div>
    </div>
  );
};

export default ChatInterface;