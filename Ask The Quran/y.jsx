import React, { useState } from 'react';
import { Heart, Frown, Brain, Clock, Sun, Shield } from 'lucide-react';
import { getVersesByEmotion } from '../data/verses';

const moods = [
  { icon: Heart, label: 'Happiness', color: 'text-pink-500' },
  { icon: Frown, label: 'Sadness', color: 'text-blue-500' },
  { icon: Brain, label: 'Stress', color: 'text-purple-500' },
  { icon: Clock, label: 'Patience', color: 'text-orange-500' },
  { icon: Sun, label: 'Gratitude', color: 'text-yellow-500' },
  { icon: Shield, label: 'Fear', color: 'text-red-500' },
];

const VerseDisplay = ({ darkMode }) => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [filteredVerses, setFilteredVerses] = useState([]);

  const handleMoodSelect = (mood) => {
    setSelectedEmotion(mood);
    setFilteredVerses(getVersesByEmotion(mood));
  };

  return (
    <div className={`p-6 max-w-6xl mx-auto shadow-lg rounded-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      {!selectedEmotion ? (
        <div className="space-y-6">
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            How are you feeling today?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => handleMoodSelect(mood.label.toLowerCase())}
                className={`flex items-center p-4 rounded-lg border-2 transition-all ${
                  selectedEmotion === mood.label.toLowerCase()
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : darkMode
                    ? 'border-gray-700 hover:border-gray-600 bg-gray-800'
                    : 'border-gray-200 hover:border-blue-500 bg-white'
                }`}
              >
                <mood.icon className={`w-6 h-6 ${mood.color}`} />
                <span className="ml-3 font-medium">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setSelectedEmotion(null)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Back
          </button>
          {filteredVerses.length > 0 ? (
            filteredVerses.map((verse) => (
              <div
                key={verse.id}
                className={`mb-6 p-4 border rounded shadow ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                }`}
              >
                <p className="text-xl font-semibold">{verse.arabic}</p>
                <p className="italic text-gray-500">{verse.transliteration}</p>
                <p>{verse.translation}</p>
                <p className="font-medium">{verse.urduTranslation}</p>
                <p className="text-sm text-gray-500">{verse.reference}</p>

                {/* Arabic Audio */}
                {verse.audioUrl && (
                  <div className="mt-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recitation in Arabic:</p>
                    <audio controls className="w-full">
                      <source src={verse.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No verses found for this emotion.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VerseDisplay;
