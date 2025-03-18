import React from 'react';
import { Heart, Frown, Brain, Clock, Sun, Shield } from 'lucide-react';

interface MoodSelectorProps {
  darkMode: boolean;
  onSelectMood: (mood: string) => void;
  selectedMood: string | null;
}

const moods = [
  { icon: Heart, label: 'Happiness', color: 'text-pink-500' },
  { icon: Frown, label: 'Sadness', color: 'text-blue-500' },
  { icon: Brain, label: 'Stress', color: 'text-purple-500' },
  { icon: Clock, label: 'Patience', color: 'text-orange-500' },
  { icon: Sun, label: 'Gratitude', color: 'text-yellow-500' },
  { icon: Shield, label: 'Fear', color: 'text-red-500' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ darkMode, onSelectMood, selectedMood }) => {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-white'}`}>
        How are you feeling today?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => onSelectMood(mood.label.toLowerCase())}
            className={`flex items-center p-4 rounded-lg border-2 transition-all ${
              selectedMood === mood.label.toLowerCase()
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
  );
};

export default MoodSelector;