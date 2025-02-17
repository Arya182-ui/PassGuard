import React from 'react';

interface PasswordStrengthMeterProps {
  strength: 'very-weak' | 'weak' | 'moderate' | 'strong' | 'very-strong';
  score: number;
}

const strengthColors = {
  'very-weak': 'bg-red-500',
  'weak': 'bg-orange-500',
  'moderate': 'bg-yellow-500',
  'strong': 'bg-green-500',
  'very-strong': 'bg-emerald-500',
};

const strengthGradients = {
  'very-weak': 'from-red-500/20 via-red-500/40 to-red-500',
  'weak': 'from-orange-500/20 via-orange-500/40 to-orange-500',
  'moderate': 'from-yellow-500/20 via-yellow-500/40 to-yellow-500',
  'strong': 'from-green-500/20 via-green-500/40 to-green-500',
  'very-strong': 'from-emerald-500/20 via-emerald-500/40 to-emerald-500',
};

export function PasswordStrengthMeter({ strength, score }: PasswordStrengthMeterProps) {
  return (
    <div className="w-full">
      <div className="h-3 w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden p-0.5 shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${strengthGradients[strength]} transition-all duration-500 ease-out shadow-sm`}
          style={{ 
            width: `${score}%`,
            transform: score > 0 ? 'scale(1)' : 'scale(0)',
            transformOrigin: 'left'
          }}
        />
      </div>
      <p className="text-sm mt-2 capitalize text-gray-700 font-medium flex items-center gap-2">
        Strength: 
        <span 
          className={`font-semibold ${strengthColors[strength].replace('bg-', 'text-')} transition-colors duration-300`}
        >
          {strength.replace('-', ' ')}
        </span>
      </p>
    </div>
  );
}