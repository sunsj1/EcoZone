import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Language {
  id: string;
  name: string;
  nativeName: string;
}

const LanguageSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const languages: Language[] = [
    { id: 'en', name: 'English', nativeName: 'English' },
    { id: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { id: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { id: 'gu', name: 'Gujarati', nativeName: 'गुजराती' },
    { id: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
    { id: 'bn', name: 'Bangla', nativeName: 'বাংলা' },
    { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { id: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' }
  ];

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  const handleNext = () => {
    if (selectedLanguage) {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* App Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-2">PashuMitra</h1>
      </div>

      {/* Main Content */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Choose your Language
        </h2>
        <p className="text-gray-600">
          To continue please select your preferred language
        </p>
      </div>

      {/* Language Options */}
      <div className="grid grid-cols-4 gap-4 mb-8 max-w-2xl">
        {languages.map((language) => (
          <div key={language.id} className="text-center">
            <label className="flex flex-col items-center cursor-pointer">
              <input
                type="radio"
                name="language"
                value={language.id}
                checked={selectedLanguage === language.id}
                onChange={() => handleLanguageSelect(language.id)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mb-2 flex items-center justify-center ${
                selectedLanguage === language.id 
                  ? 'border-yellow-500 bg-yellow-500' 
                  : 'border-gray-300'
              }`}>
                {selectedLanguage === language.id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {language.nativeName}
              </span>
            </label>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!selectedLanguage}
        className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
          selectedLanguage
            ? 'bg-yellow-500 hover:bg-yellow-600 cursor-pointer'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default LanguageSelection;
