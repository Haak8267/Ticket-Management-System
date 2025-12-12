import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import { useAuth } from '../firebase/Authcontext';
import toast, { Toaster } from 'react-hot-toast';

export default function OrganizerSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    organizerName: '',
    phone: '',
    email: '',
    password: ''
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!isRobot) {
      toast.error('Please verify that you are not a robot');
      return;
    }
    if (!agreeTerms) {
      toast.error('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    if (!formData.organizerName || !formData.phone || !formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await signup(formData.email, formData.password, formData.organizerName, 'organizer');
      toast.success('Account created successfully! Welcome to Eventix.');
      setTimeout(() => {
        navigate('/events');
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('This email is already registered');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email format');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak');
      } else {
        toast.error('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <Toaster position="top-center" />
      
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-pink-600 text-white p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Eventix</h1>
            <div className="h-1 w-20 bg-white rounded"></div>
          </div>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Create your organizer account
          </h2>
          
          <p className="text-lg mb-8 text-white/95">
            Join over 5,000 creators using Eventix to sell with MoMo, Cards, Apple Pay, PayPal, and USSD.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white/20 rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-white/95">Go live in minutes with simple onboarding.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white/20 rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-white/95">Automatic USSD for each event (*365*88*eventid#).</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white/20 rounded-full p-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-white/95">Fast payouts and real-time sales tracking.</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="font-semibold text-sm tracking-wide uppercase">Voted Best Event Ticketing Platform in Africa</h3>
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
              <div className="text-3xl font-bold mb-1">45K+</div>
              <div className="text-sm text-white/90">Events Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">500K+</div>
              <div className="text-sm text-white/90">Tickets Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">5K+</div>
              <div className="text-sm text-white/90">Happy Organizers</div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-12 bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up as an Organizer</h2>
            <p className="text-gray-600">It's free - only takes a minute.</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Organizer / Brand Name
              </label>
              <input
                type="text"
                value={formData.organizerName}
                onChange={(e) => handleChange('organizerName', e.target.value)}
                placeholder="e.g., Accra Art District"
                disabled={loading}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="054 000 0000"
                disabled={loading}
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
                placeholder="you@company.com"
                disabled={loading}
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
                  disabled={loading}
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
                disabled={loading}
                className="w-5 h-5 mt-0.5 accent-red-600 cursor-pointer"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-700 cursor-pointer select-none">
                I'm not a robot
              </label>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                disabled={loading}
                className="w-5 h-5 mt-0.5 accent-red-600 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer select-none">
                By creating an account, I agree to the{' '}
                <a href="#" className="text-red-600 hover:underline font-medium">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-red-600 hover:underline font-medium">Privacy Policy</a>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link to="/signin" className="text-red-600 font-semibold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}