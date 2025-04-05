"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/input';

export function Username({ onNext }: { onNext: (username: string) => void }) {
  const [username, setUsername] = useState('');

  const handleNext = () => {
    if (username.trim()) {
      onNext(username);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#002B5B] text-center">Claim a Username</h1>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#002B5B] focus:border-transparent"
          />

          <Button
            onClick={handleNext}
            disabled={!username.trim()}
            className="w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#003B7B] transition-colors disabled:bg-gray-300"
          >
            Claim
          </Button>
        </div>
      </div>
    </div>
  );
} 