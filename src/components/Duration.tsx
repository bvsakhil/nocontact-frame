"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/input';

export function Duration({ onNext }: { onNext: (days: string) => void }) {
  const [days, setDays] = useState('30');

  const handleStart = () => {
    if (parseInt(days) > 0) {
      onNext(days);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#002B5B] text-center">How long you&apos;d like to avoid?</h1>
        </div>

        <div className="space-y-4">
          <Input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#002B5B] focus:border-transparent text-center text-xl"
          />

          <Button
            onClick={handleStart}
            disabled={parseInt(days) <= 0}
            className="w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#003B7B] transition-colors disabled:bg-gray-300"
          >
            Start No Contact
          </Button>
        </div>
      </div>
    </div>
  );
} 