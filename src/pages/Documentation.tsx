import React from 'react';
import { BookOpen, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export function Documentation() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to create secure passwords
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">Password Strength Criteria</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Length Requirements</h3>
              <p className="text-gray-600">
                • Minimum: 8 characters<br />
                • Recommended: 12 characters or more<br />
                • Maximum: No limit
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Character Variety</h3>
              <p className="text-gray-600">
                • Lowercase letters (a-z)<br />
                • Uppercase letters (A-Z)<br />
                • Numbers (0-9)<br />
                • Special characters (!@#$%^&*)
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Strength Levels</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600">Very Weak: Basic characters, too short</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-600">Weak: Minimal requirements met</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-600">Moderate: Good length, some variety</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Strong: Excellent length and variety</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-600">Very Strong: Exceeds all criteria</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">Best Practices</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do's</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Use a unique password for each account</li>
                <li>Combine random words with numbers and symbols</li>
                <li>Make passwords at least 12 characters long</li>
                <li>Use a password manager to store complex passwords</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Don'ts</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Don't use personal information</li>
                <li>Avoid common word substitutions (e.g., 'p@ssw0rd')</li>
                <li>Never share passwords via email or text</li>
                <li>Don't use the same password everywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}