import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import MoodSelector from './components/MoodSelector';
import VerseDisplay from './components/VerseDisplay';
import ChatInterface from './components/ChatInterface';
import { getVersesByEmotion } from './data/verses';
import type { Verse } from './data/verses';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'mood' | 'search' | 'chat'>('mood');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Verse[]>([]);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleSearchResults = (verses: Verse[]) => {
    setSearchResults(verses);
  };

  const displayVerses = activeTab === 'mood' 
    ? selectedMood 
      ? getVersesByEmotion(selectedMood) || [] // Ensure it always returns an array
      : []
    : searchResults;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Quranic Assistant
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {/* Navigation */}
        <nav className="flex space-x-2 mb-8">
          <button
            onClick={() => setActiveTab('mood')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'mood'
                ? 'bg-blue-500 text-white'
                : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`
            }`}
          >
            Mood-Based
          </button>
   
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'chat'
                ? 'bg-blue-500 text-white'
                : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`
            }`}
          >
            Chat
          </button>
        </nav>

        {/* Main Content */}
        <main className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {activeTab === 'mood' && (
            <MoodSelector 
              darkMode={darkMode} 
              onSelectMood={handleMoodSelect}
              selectedMood={selectedMood}
            />
          )}
          {activeTab === 'chat' && <ChatInterface darkMode={darkMode} />}
          {(activeTab === 'mood' || activeTab === 'search') && displayVerses.length > 0 && (
            <VerseDisplay darkMode={darkMode} emotionalVerses={displayVerses} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
