import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

const ContactMethodsOnly: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Contact Us */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
            Contact Us
          </h3>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-2xl border border-green-200 transition">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-800">Phone</p>
                <p className="text-sm text-slate-600">+91 9876543210</p>
                <p className="text-xs text-green-600">Available 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl border border-blue-200 transition">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-800">Email</p>
                <p className="text-sm text-slate-600">
                  support@bd-counseling.com
                </p>
                <p className="text-xs text-blue-600">Response in 2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-slate-600" />
              Office Hours
            </h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="font-semibold">10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Sunday</span>
                <span className="italic">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethodsOnly;
