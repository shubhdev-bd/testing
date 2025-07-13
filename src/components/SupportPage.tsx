import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, Clock, MapPin, Send, Star } from 'lucide-react';

interface SupportPageProps {
  onBack: () => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [message, setMessage] = useState('');

  const supportCategories = [
    { id: 'general', label: 'General Inquiry', icon: '❓' },
    { id: 'technical', label: 'Technical Support', icon: '🔧' },
    { id: 'counselling', label: 'Counseling Help', icon: '🎓' },
    { id: 'billing', label: 'Billing & Payments', icon: '💳' },
  ];

  const faqItems = [
    {
      question: 'How do I check my NEET result?',
      answer: 'Visit the official NEET website and enter your application number and password to download your scorecard.'
    },
    {
      question: 'What is the counseling process?',
      answer: 'The counseling process involves registration, choice filling, seat allotment, and document verification.'
    },
    {
      question: 'How can I predict my college admission chances?',
      answer: 'Use our College Predictor tool by entering your NEET rank and preferred states to get accurate predictions.'
    },
    {
      question: 'What documents are required for counseling?',
      answer: 'You need NEET scorecard, class 12 marksheet, category certificate (if applicable), and identity proof.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent! We will get back to you soon.');
    setMessage('');
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">Support Center</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">How can we help you today?</h2>
            <p className="text-blue-100 text-lg">Our support team is here to assist you with any questions or concerns</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Phone Support</p>
                    <p className="text-sm text-slate-600">+91 9876543210</p>
                    <p className="text-xs text-green-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email Support</p>
                    <p className="text-sm text-slate-600">support@bd-counseling.com</p>
                    <p className="text-xs text-blue-600">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Live Chat</p>
                    <p className="text-sm text-slate-600">Instant messaging</p>
                    <p className="text-xs text-purple-600">Available now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Form and FAQ */}
          <div className="lg:col-span-2 space-y-8">
            {/* Support Form */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Category</label>
                  <div className="grid grid-cols-2 gap-3">
                    {supportCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{category.icon}</div>
                          <div className="text-sm font-medium">{category.label}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your issue or question in detail..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-slate-800 mb-2">{faq.question}</h4>
                    <p className="text-sm text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6">What our students say</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">"Excellent support team! They helped me throughout my counseling process."</p>
                  <p className="text-xs text-slate-500">- Priya Sharma, MBBS Student</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">"Quick response and very helpful guidance. Highly recommended!"</p>
                  <p className="text-xs text-slate-500">- Rahul Kumar, Medical Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;