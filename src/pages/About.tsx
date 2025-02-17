import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            About PassGuard
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted companion in password security
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: Shield,
              title: 'Advanced Security',
              description: 'State-of-the-art password strength analysis based on NIST guidelines'
            },
            {
              icon: Lock,
              title: 'Privacy First',
              description: 'Your passwords are never stored or transmitted'
            },
            {
              icon: Key,
              title: 'Real-time Analysis',
              description: 'Instant feedback on password strength and security recommendations'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why PassGuard?</h2>
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 mb-4">
              In today's digital age, strong passwords are your first line of defense against cyber threats. 
              PassGuard was created with a simple mission: to help you create and maintain secure passwords 
              that protect your digital life.
            </p>
            <p className="text-gray-600 mb-4">
              Our password strength tester uses advanced algorithms and security best practices to analyze 
              your passwords and provide detailed feedback on their security level. We check for common 
              vulnerabilities, pattern recognition, and compliance with the latest security standards.
            </p>
            <p className="text-gray-600">
              Whether you're a security professional or just someone who wants to keep their accounts safe, 
              PassGuard provides the tools and knowledge you need to make informed decisions about your 
              password security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}