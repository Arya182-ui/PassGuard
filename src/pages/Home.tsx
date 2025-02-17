import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Shield, ShieldCheck, ShieldAlert, ShieldX, ShieldQuestion, KeyRound } from 'lucide-react';
import { checkPasswordStrength } from '../utils/passwordStrength';
import { PasswordStrengthMeter } from '../components/PasswordStrengthMeter';

export function Home() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const strengthResult = checkPasswordStrength(password);

  const getStrengthIcon = () => {
    switch (strengthResult.strength) {
      case 'very-weak':
        return <ShieldX className="w-8 h-8 text-red-500 animate-pulse" />;
      case 'weak':
        return <ShieldAlert className="w-8 h-8 text-orange-500" />;
      case 'moderate':
        return <Shield className="w-8 h-8 text-yellow-500" />;
      case 'strong':
        return <ShieldCheck className="w-8 h-8 text-green-500" />;
      case 'very-strong':
        return <ShieldCheck className="w-8 h-8 text-emerald-500 animate-bounce" />;
      default:
        return <ShieldQuestion className="w-8 h-8 text-gray-400" />;
    }
  };

  return (
    <div 
      className="pt-24 min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.08) 25%, transparent 50%),
          radial-gradient(circle at 85% 15%, rgba(129, 140, 248, 0.15) 0%, transparent 35%),
          radial-gradient(circle at 15% 85%, rgba(167, 139, 250, 0.15) 0%, transparent 35%),
          radial-gradient(circle at 70% 80%, rgba(147, 197, 253, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 30% 20%, rgba(196, 181, 253, 0.1) 0%, transparent 30%)
        `
      }}
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
            <Lock className="w-10 h-10 text-indigo-600 relative z-10 transform transition-transform hover:scale-110 duration-300" />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-3">
            Password Strength
          </h1>
          <p className="text-gray-600 text-lg">Secure your digital fortress</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-indigo-500" />
                Enter Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50 backdrop-blur-sm shadow-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-500 transition-colors duration-200 p-1 rounded-lg hover:bg-indigo-50"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                {getStrengthIcon()}
                <PasswordStrengthMeter
                  strength={strengthResult.strength}
                  score={strengthResult.score}
                />
              </div>

              <div className="bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  Password Analysis
                </h3>
                <ul className="space-y-2.5">
                  {strengthResult.feedback.map((feedback, index) => (
                    <li 
                      key={index} 
                      className="text-sm text-gray-600 flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/80 transition-all duration-200 hover:shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                      {feedback}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}