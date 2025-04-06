"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/input';

export function Name({ onNext }: { onNext: (name: string) => void }) {
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim()) {
      onNext(name);
    }
  };

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
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#002B5B] text-center">Who are you Avoiding?</h1>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter their Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#002B5B] focus:border-transparent"
          />

          <Button
            onClick={handleNext}
            disabled={!name.trim()}
            className="w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#003B7B] transition-colors disabled:bg-gray-300"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
} 