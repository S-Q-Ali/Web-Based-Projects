import React, { useState } from 'react';
import { versesData, getVersesByEmotion, searchVerses } from './data/verses';

const VerseDisplay = () => {
  const [selectedEmotion, setSelectedEmotion] = useState('happiness');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVerses, setFilteredVerses] = useState(getVersesByEmotion('happiness'));

  const handleEmotionChange = (event) => {
    const emotion = event.target.value;
    setSelectedEmotion(emotion);
    setFilteredVerses(getVersesByEmotion(emotion));
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    setFilteredVerses(query ? searchVerses(query) : getVersesByEmotion(selectedEmotion));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Emotional Verses</h1>
      
      <div className="mb-4">
        <label className="block font-medium">Select Emotion:</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedEmotion}
          onChange={handleEmotionChange}
        >
          {versesData.map((category) => (
            <option key={category.emotion} value={category.emotion}>
              {category.emotion.charAt(0).toUpperCase() + category.emotion.slice(1)}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a verse..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div>
        {filteredVerses.length > 0 ? (
          filteredVerses.map((verse) => (
            <div key={verse.id} className="mb-6 p-4 border rounded shadow">
              <p className="text-xl font-semibold text-gray-800">{verse.arabic}</p>
              <p className="italic text-gray-600">{verse.transliteration}</p>
              <p className="text-gray-700">{verse.translation}</p>
              <p className="text-gray-700 font-medium">{verse.urduTranslation}</p>
              <p className="text-sm text-gray-500">{verse.reference}</p>
              <audio controls className="mt-2 w-full">
                <source src={verse.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="mt-2 text-gray-600 text-sm">{verse.context}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No verses found.</p>
        )}
      </div>
    </div>
  );
};

export default VerseDisplay;