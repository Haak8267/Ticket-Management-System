import React, { useState } from 'react';
import { Eye, EyeOff, Check, Facebook } from 'lucide-react';

export default function UserSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: ''
  });

  const handleSubmit = () => {
    if (!isRobot) {
      alert('Please verify that you are not a robot');
      return;
    }
    if (!formData.phone || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    alert('Account created successfully! Welcome to Eventix.');
    console.log('Signup data:', formData);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-slate-200 via-slate-100 to-pink-600 text-white p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Eventix</h1>
            <div className="h-1 w-20 bg-white rounded"></div>
          </div>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Create your attendee account
          </h2>
          
          <p className="text-lg mb-8 text-white/95">
            Discover events, buy tickets with MoMo, Cards, Apple Pay, PayPal, or via USSD. Your tickets live safely in the app.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white/20 rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-white/95">Fast, secure checkout - save your details for next time.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white/20 rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-white/95">Instant e-tickets and receipts to your email and app.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white/20 rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-white/95">Works online and offline with USSD (*365*88#).</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="font-semibold text-sm tracking-wide uppercase">Trusted by Event Goers Across Ghana</h3>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="text-yellow-300 text-xl mb-1">★★★★★</div>
                <p className="text-sm text-white/90">5/5 Google</p>
              </div>
              <div>
                <div className="text-yellow-300 text-xl mb-1">★★★★★</div>
                <p className="text-sm text-white/90">4.9/5 Trustpilot</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500K+</div>
              <div className="text-sm text-white/90">Tickets Purchased</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">100K+</div>
              <div className="text-sm text-white/90">Happy Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/90">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-12 bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h2>
            <p className="text-gray-600">It's free - only takes a minute.</p>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">Continue with Facebook</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium text-gray-700">Continue with Google</span>
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="054 000 0000"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <input
                type="checkbox"
                id="recaptcha"
                checked={isRobot}
                onChange={(e) => setIsRobot(e.target.checked)}
                className="w-5 h-5 mt-0.5 accent-red-600 cursor-pointer"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-700 cursor-pointer select-none">
                I'm not a robot
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Create Account
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              By signing up, you agree to our{' '}
              <a href="#" className="text-red-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>
            </p>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <a href="#" className="text-red-600 font-semibold hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}