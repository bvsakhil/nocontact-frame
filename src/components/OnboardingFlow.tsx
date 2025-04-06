"use client";

import { useState } from 'react';
import { Welcome } from './Welcome';
import { Name } from './Name';
import { Relation } from './Relation';
import { Duration } from './Duration';
import { Home } from './Home';

type OnboardingStep = 'welcome' | 'name' | 'relation' | 'duration' | 'home';

interface UserData {
  avoidName: string;
  relation: string;
  duration: number;
}

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [userData, setUserData] = useState<UserData>({
    avoidName: '',
    relation: '',
    duration: 30,
  });

  const handleStepComplete = (step: OnboardingStep, data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
    const nextSteps: Record<OnboardingStep, OnboardingStep> = {
      welcome: 'name',
      name: 'relation',
      relation: 'duration',
      duration: 'home',
      home: 'home',
    };
    setCurrentStep(nextSteps[step]);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <Welcome onNext={() => handleStepComplete('welcome', {})} />;
      case 'name':
        return (
          <Name
            onNext={(avoidName) => handleStepComplete('name', { avoidName })}
          />
        );
      case 'relation':
        return (
          <Relation
            onNext={(relation) => handleStepComplete('relation', { relation })}
          />
        );
      case 'duration':
        return (
          <Duration
            onNext={(duration) => handleStepComplete('duration', { duration: parseInt(duration) })}
          />
        );
      case 'home':
        return <Home days={userData.duration} totalDays={userData.duration} />;
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
} 