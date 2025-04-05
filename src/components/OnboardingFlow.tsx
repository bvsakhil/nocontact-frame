"use client";

import { useState } from 'react';
import { Welcome } from './Welcome';
import { Username } from './Username';
import { Name } from './Name';
import { Relation } from './Relation';
import { Duration } from './Duration';
import { Home } from './Home';

type OnboardingStep = 'welcome' | 'username' | 'name' | 'relation' | 'duration' | 'home';

interface UserData {
  username: string;
  avoidName: string;
  relation: string;
  duration: number;
}

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [userData, setUserData] = useState<UserData>({
    username: '',
    avoidName: '',
    relation: '',
    duration: 30,
  });

  const handleStepComplete = (step: OnboardingStep, data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
    const nextSteps: Record<OnboardingStep, OnboardingStep> = {
      welcome: 'username',
      username: 'name',
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
      case 'username':
        return (
          <Username
            onNext={(username) => handleStepComplete('username', { username })}
          />
        );
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
            onNext={(duration) => handleStepComplete('duration', { duration })}
          />
        );
      case 'home':
        return <Home userData={userData} />;
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
} 