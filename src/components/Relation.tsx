"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export function Relation({ onNext }: { onNext: (relation: string) => void }) {
  const [relation, setRelation] = useState('');

  const handleNext = () => {
    if (relation) {
      onNext(relation);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#002B5B] text-center">Who are they to you?</h1>
        </div>

        <div className="space-y-4">
          <Select value={relation} onValueChange={setRelation}>
            <SelectTrigger className="w-full p-3 border rounded-lg">
              <SelectValue placeholder="Select Relation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ex">Ex Partner</SelectItem>
              <SelectItem value="crush">Crush</SelectItem>
              <SelectItem value="friend">Friend</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleNext}
            disabled={!relation}
            className="w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#003B7B] transition-colors disabled:bg-gray-300"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
} 