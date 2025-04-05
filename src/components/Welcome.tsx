"use client";

import { Button } from './ui/Button';

interface WelcomeProps {
  onNext: () => void;
}

export function Welcome({ onNext }: WelcomeProps) {
  return (
    <div 
      className="flex flex-col items-center justify-between min-h-screen bg-white p-4"
      style={{
        backgroundImage: 'url(/hands.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 w-full">
          <h1 className="text-2xl font-bold text-[#002B5B] mb-2 text-center">NoContact</h1>
          <p className="text-gray-600 text-center mb-8">
            Accountability app so you DON&apos;T text your ex.
          </p>
          
          <Button 
            onClick={onNext}
            className="w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#003B7B] transition-colors"
          >
            Let&apos;s Start?
          </Button>
        </div>
      </div>

      <div className="w-full text-center mt-4">
        <p className="text-gray-500 text-sm">
          From <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Boys Club</span>
        </p>
      </div>
    </div>
  );
} 