
export interface StoryScene {
  storyText: string; // The Thai text for narration
  englishTranslation?: string; // English translation for subtitles
  imagePrompt: string; // The prompt for the image generator
  sceneNumber: number;
  // Extended VFX/SFX types
  visualEffect?: 'none' | 'rain' | 'storm' | 'snow' | 'fire' | 'fog' | 'sparkles' | 'camera_shake' | 'lightning';
  soundEffect?: 'none' | 'rain' | 'thunder' | 'forest' | 'city' | 'fire' | 'magic' | 'footsteps' | 'wind' | 'heavy_rain';
}

export type StoryMode = 'short' | 'medium' | 'long' | 'mega_long';
export type MediaType = 'image' | 'video';
export type VoiceGender = 'male' | 'female';
export type VoiceTone = 'soft' | 'energetic' | 'deep' | 'formal';
export type SubtitleLang = 'th' | 'en';

export interface StoryConfig {
  duration: StoryMode;
  mediaType: MediaType;
  voiceGender: VoiceGender;
  voiceTone: VoiceTone;
  bgmEnabled: boolean;
  defaultShowSubtitles: boolean;
  defaultSubtitleLang: SubtitleLang;
}

export interface StoryData {
  id: string; // Unique ID for history
  createdAt: number; // Timestamp
  title: string;
  seoSummary: string; // Short catchy summary for SEO description
  tags: string[]; // Hashtags for social media
  characterDescription: string; // Visual description to enforce consistency
  mood: string; // "Happy", "Sad", "Exciting", "Scary", "Calm"
  
  // New Cover Fields
  coverImagePrompt?: string;
  coverTitle?: string; // Short catchy text for thumbnail
  coverImageUrl?: string; 

  mode: StoryMode; // 'short', 'medium' or 'long'
  scenes: StoryScene[];
  config?: StoryConfig;
}

export interface GeneratedSceneMedia {
  imageUrl?: string; // Optional now if video is present
  videoUrl?: string; // New field for Veo video
  audioBuffer: AudioBuffer | null;
  text: string;
  textEn?: string; // Store English text if available
  visualEffect?: string;
  soundEffect?: string;
}

export interface HistoryItem {
  storyData: StoryData;
  media: GeneratedSceneMedia[];
}

export enum AppState {
  IDLE = 'IDLE',
  GENERATING_SCRIPT = 'GENERATING_SCRIPT',
  GENERATING_MEDIA = 'GENERATING_MEDIA',
  READY = 'READY',
  ERROR = 'ERROR',
}
