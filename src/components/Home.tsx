"use client";

import { Button } from './ui/Button';
import Image from 'next/image';

export function Home({ days, totalDays }: { days: number, totalDays: number }) {
  // Generate progress squares
  const progressSquares = Array(totalDays).fill(null).map((_, index) => {
    const isCompleted = index < days;
    return (
      <div
        key={index}
        className={`w-6 h-6 rounded ${
          isCompleted ? 'bg-[#002B5B]' : 'bg-gray-200'
        }`}
      />
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-[#002B5B]">NoContact</h1>
        <div className="w-8 h-8 relative rounded-full overflow-hidden">
          <Image
            src="/avatar-placeholder.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-2">{days} DAYS</h2>
            <p className="text-gray-600">
              strong since no contact with your ex
            </p>
          </div>
        </div>

        <Button className="w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#003B7B] transition-colors mb-8">
          Log Today
        </Button>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-700">Progress</h3>
          <div className="grid grid-cols-6 gap-2">
            {progressSquares}
          </div>
        </div>
      </main>
    </div>
  );
} 