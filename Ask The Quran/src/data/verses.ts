interface Verse {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  urduTranslation: string;
  reference: string;
  audioUrl: string;
  context: string;
}

interface EmotionalVerses {
  emotion: string;
  description: string;
  verses: Verse[];
}

export const versesData: EmotionalVerses[] = [
  {
    emotion: 'happiness',
    description: 'Verses celebrating joy and gratitude',
    verses: [
      {
        id: 'happiness-1',
        arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
        transliteration: 'Fadhkuroonee adhkurkum washkuroo lee wala takfuroon',
        translation: 'So remember Me; I will remember you. And be grateful to Me and do not deny Me.',
        urduTranslation: 'پس تم مجھے یاد کرو، میں تمہیں یاد کروں گا، اور میرا شکر ادا کرو اور ناشکری نہ کرو۔',
        reference: 'Surah Al-Baqarah 2:152',
        audioUrl: 'https://verses.quran.com/Abdul_Basit_Murattal/002152.mp3',
        context: 'This verse emphasizes the reciprocal relationship between Allah and His servants, highlighting the importance of remembrance and gratitude.'
      }
    ]
  },
  {
    emotion: 'sadness',
    description: 'Comforting verses about hope and relief',
    verses: [
      {
        id: 'sadness-1',
        arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        transliteration: 'Fa-inna ma\'a al\'usri yusran',
        translation: 'For indeed, with hardship [will be] ease.',
        urduTranslation: 'پس بے شک ہر مشکل کے ساتھ آسانی ہے۔',
        reference: 'Surah Ash-Sharh 94:5',
        audioUrl: 'https://verses.quran.com/Abdul_Basit_Murattal/094005.mp3',
        context: 'A powerful reminder that after every difficulty comes relief.'
      }
    ]
  },
  {
    emotion: 'stress',
    description: 'Verses to bring calmness and ease during stress',
    verses: [
      {
        id: 'stress-1',
        arabic: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
        transliteration: 'Laa tahzan innallaha ma\'ana',
        translation: 'Do not grieve; indeed, Allah is with us.',
        urduTranslation: 'غم نہ کرو، بے شک اللہ ہمارے ساتھ ہے۔',
        reference: 'Surah At-Tawbah 9:40',
        audioUrl: 'https://verses.quran.com/Abdul_Basit_Murattal/009040.mp3',
        context: 'A reminder that Allah’s presence is always with the believers, especially in times of distress.'
      }
    ]
  },
  {
    emotion: 'fear',
    description: 'Verses to ease fear and bring courage',
    verses: [
      {
        id: 'fear-1',
        arabic: 'إِنَّمَا ذَٰلِكُمُ ٱلشَّيْطَٰنُ يُخَوِّفُ أَوْلِيَآءَهُۥ فَلَا تَخَافُوهُمْ وَخَافُونِ إِن كُنتُم مُّؤْمِنِينَ',
        transliteration: 'Innama thalikumu ash-shaytanu yukhawwifu awliyaaahu fala takhafoohum wakhafoni in kuntum mumineen',
        translation: 'It is only Satan who frightens [you] of his supporters. So fear them not, but fear Me, if you are indeed believers.',
        urduTranslation: 'یہ تو صرف شیطان ہے جو اپنے دوستوں سے تمہیں ڈراتا ہے، پس تم ان سے مت ڈرو بلکہ مجھ سے ڈرو اگر تم مومن ہو۔',
        reference: 'Surah Aal-e-Imran 3:175',
        audioUrl: 'https://verses.quran.com/Abdul_Basit_Murattal/003175.mp3',
        context: 'This verse reassures believers that fear should only be directed toward Allah and not towards worldly threats.'
      }
    ]
  },
  {
    emotion: 'patience',
    description: 'Verses encouraging patience and perseverance',
    verses: [
      {
        id: 'patience-1',
        arabic: 'وَٱصْبِرْ فَإِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ',
        transliteration: 'Wasbir fa-inna Allaha la yudeeu ajra almuhsineen',
        translation: 'And be patient, for indeed, Allah does not allow the reward of those who do good to be lost.',
        urduTranslation: 'اور صبر کرو، بے شک اللہ نیکی کرنے والوں کے اجر کو ضائع نہیں کرتا۔',
        reference: 'Surah Hud 11:115',
        audioUrl: 'https://verses.quran.com/Abdul_Basit_Murattal/011115.mp3',
        context: 'Encouraging patience and steadfastness in the face of challenges.'
      }
    ]
  },
  {
    emotion: 'gratitude',
    description: 'Verses emphasizing gratitude and thankfulness',
    verses: [
      {
        id: 'gratitude-1',
        arabic: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        transliteration: 'Wa-ith taaththana rabbukum la-in shakartum laazeedannakum',
        translation: 'And [remember] when your Lord proclaimed, "If you are grateful, I will surely increase you [in favor]."',
        urduTranslation: 'اور جب تمہارے رب نے اعلان کیا کہ اگر تم شکر ادا کرو گے تو میں تمہیں اور زیادہ دوں گا۔',
        reference: 'Surah Ibrahim 14:7',
        audioUrl: 'https://verses.quran.com/Abdul_Basit_Murattal/014007.mp3',
        context: 'Highlighting the blessings of gratitude and how it leads to further rewards from Allah.'
      }
    ]
  }
];

export const getVersesByEmotion = (emotion: string): Verse[] => {
  const category = versesData.find(cat => cat.emotion.toLowerCase() === emotion.toLowerCase());
  return category?.verses || [];
};

export const searchVerses = (query: string): Verse[] => {
  const normalizedQuery = query.toLowerCase();
  return versesData.flatMap(category => 
    category.verses.filter(verse => 
      verse.translation.toLowerCase().includes(normalizedQuery) ||
      verse.urduTranslation.toLowerCase().includes(normalizedQuery) ||
      verse.reference.toLowerCase().includes(normalizedQuery)
    )
  );
};