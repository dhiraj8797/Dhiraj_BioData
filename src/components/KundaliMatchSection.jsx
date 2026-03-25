"use client";

import { motion } from "framer-motion";
import { Phone, Star, Sparkles, Send, Calendar, MapPin, Clock, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function KundaliMatchSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [matchResults, setMatchResults] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    message: ''
  });

  const kundaliDetails = {
    dateOfBirth: "23-09-1998",
    timeOfBirth: "07:00 AM",
    placeOfBirth: "Gopalganj, Bihar, India",
    rashi: "Tula (Libra)",
    nakshatra: "Chitra",
    gotra: "Kashyap",
    manglikStatus: "No",
    kundaliAvailable: true,
    horoscopeAvailable: true
  };

  const handleKundaliMatch = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with mock response
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
      
      // Mock successful response
      const mockResponse = {
        status: 200,
        data: {
          match_score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
          compatibility: "Good",
          recommendation: "Proceed with family discussions",
          aspects: {
            mental: Math.floor(Math.random() * 20) + 80,
            physical: Math.floor(Math.random() * 20) + 75,
            emotional: Math.floor(Math.random() * 20) + 85,
            spiritual: Math.floor(Math.random() * 20) + 70
          }
        }
      };
      
      if (mockResponse.status === 200) {
        setMatchResults({
          user: formData,
          yourDetails: kundaliDetails,
          matchResult: mockResponse.data
        });
        
        setShowResults(true);
        setShowSuccess(true);
        setShowForm(false);
        setFormData({ name: '', phone: '', dateOfBirth: '', timeOfBirth: '', placeOfBirth: '', message: '' });
        
        // Log the user data for your reference
        console.log('Kundali Matching Request:', {
          user: formData,
          yourDetails: kundaliDetails,
          matchResult: mockResponse.data
        });
        
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-3xl border border-yellow-600/30 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 shadow-2xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-300"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Traditional Next Step
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl"
                >
                  Perfect Match?{" "}
                  <span className="text-yellow-400">Match Horoscope & Kundali</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-4 text-base leading-7 text-neutral-300"
                >
                  If you feel this profile is a suitable match, families can proceed
                  with horoscope and kundali matching for compatibility and
                  traditional consideration.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-3 text-sm leading-6 text-neutral-400"
                >
                  This can be taken up as the next step before moving ahead with
                  further family discussions.
                </motion.p>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="font-medium">Request received!</span>
                    </div>
                    <p className="mt-1 text-green-200">We'll contact you for Kundali matching details.</p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <button
                    onClick={handleKundaliMatch}
                    className="group rounded-2xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-400 hover:shadow-lg"
                  >
                    <Star className="inline-block w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Match Kundali
                  </button>

                  <a
                    href="#contact"
                    className="group rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/5 hover:border-white/25"
                  >
                    <Phone className="inline-block w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Contact Family
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center bg-white/5 p-8 md:p-10"
              >
                <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-sm">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl font-semibold text-yellow-300"
                  >
                    Kundali Details Available
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-5"
                  >
                    <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent p-5">
                      <h4 className="text-lg font-semibold text-yellow-300 mb-4 text-center">✨ Kundali & Horoscope Details</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-yellow-500/10">
                          <span className="text-yellow-200 font-medium">Rashi</span>
                          <span className="text-neutral-300">{kundaliDetails.rashi}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-yellow-500/10">
                          <span className="text-yellow-200 font-medium">Nakshatra</span>
                          <span className="text-neutral-300">{kundaliDetails.nakshatra}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-yellow-500/10">
                          <span className="text-yellow-200 font-medium">Gotra</span>
                          <span className="text-neutral-300">{kundaliDetails.gotra}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-yellow-500/10">
                          <span className="text-yellow-200 font-medium">Manglik Status</span>
                          <span className="text-neutral-300 flex items-center gap-2">
                            {kundaliDetails.manglikStatus}
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-yellow-500/10">
                          <span className="text-yellow-200 font-medium">Date of Birth</span>
                          <span className="text-neutral-300">23 September 1998</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-yellow-500/10">
                          <span className="text-yellow-200 font-medium">Time of Birth</span>
                          <span className="text-neutral-300">7:00 AM</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2">
                          <span className="text-yellow-200 font-medium">Place of Birth</span>
                          <span className="text-neutral-300 text-right">{kundaliDetails.placeOfBirth}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="font-medium">Note:</span>
                    </div>
                    <p>Complete Kundali and horoscope details available for matching.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-3 text-xs text-green-300 text-center"
                  >
                    <Send className="w-3 h-3 inline mr-1" />
                    Powered by Astrology API
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Kundali Matching Results */}
      {showResults && matchResults && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-padding"
        >
          <div className="section-shell">
            <div className="overflow-hidden rounded-3xl border border-green-500/30 bg-gradient-to-br from-green-950 via-green-900 to-green-950 shadow-2xl">
              <div className="p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 mb-4">
                    <Star className="w-4 h-4 mr-2" />
                    Kundali Matching Results
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Compatibility Score: {matchResults.matchResult.match_score}%
                  </h3>
                  <p className="text-green-300 text-lg">
                    {matchResults.matchResult.compatibility} Match
                  </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-4">Your Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-yellow-200">Name:</span>
                        <span className="text-neutral-300">Dhiraj Kumar</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-200">Rashi:</span>
                        <span className="text-neutral-300">{matchResults.yourDetails.rashi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-200">Nakshatra:</span>
                        <span className="text-neutral-300">{matchResults.yourDetails.nakshatra}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-200">Gotra:</span>
                        <span className="text-neutral-300">{matchResults.yourDetails.gotra}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-200">Manglik:</span>
                        <span className="text-neutral-300 flex items-center gap-1">
                          {matchResults.yourDetails.manglikStatus}
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-4">Partner Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-200">Name:</span>
                        <span className="text-neutral-300">{matchResults.user.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Date of Birth:</span>
                        <span className="text-neutral-300">{matchResults.user.dateOfBirth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Time of Birth:</span>
                        <span className="text-neutral-300">{matchResults.user.timeOfBirth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Place of Birth:</span>
                        <span className="text-neutral-300">{matchResults.user.placeOfBirth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-200">Phone:</span>
                        <span className="text-neutral-300">{matchResults.user.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 mb-8">
                  <h4 className="text-lg font-semibold text-green-300 mb-4">Compatibility Aspects</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-200">Mental Compatibility</span>
                        <span className="text-white font-semibold">{matchResults.matchResult.aspects.mental}%</span>
                      </div>
                      <div className="w-full bg-green-900/50 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${matchResults.matchResult.aspects.mental}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-200">Physical Compatibility</span>
                        <span className="text-white font-semibold">{matchResults.matchResult.aspects.physical}%</span>
                      </div>
                      <div className="w-full bg-green-900/50 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${matchResults.matchResult.aspects.physical}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-200">Emotional Compatibility</span>
                        <span className="text-white font-semibold">{matchResults.matchResult.aspects.emotional}%</span>
                      </div>
                      <div className="w-full bg-green-900/50 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${matchResults.matchResult.aspects.emotional}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-200">Spiritual Compatibility</span>
                        <span className="text-white font-semibold">{matchResults.matchResult.aspects.spiritual}%</span>
                      </div>
                      <div className="w-full bg-green-900/50 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${matchResults.matchResult.aspects.spiritual}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-center">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-2">Recommendation</h4>
                  <p className="text-yellow-100 text-lg mb-4">{matchResults.matchResult.recommendation}</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href="#contact"
                      className="rounded-2xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-400"
                    >
                      <Phone className="inline-block w-4 h-4 mr-2" />
                      Contact Family
                    </a>
                    <button
                      onClick={() => setShowResults(false)}
                      className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/5"
                    >
                      Close Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Kundali Matching Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl border border-yellow-500/30 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-yellow-300">Enter Your Details</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-yellow-200 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-yellow-500/20 bg-white/5 text-white placeholder-neutral-400 focus:border-yellow-500/50 focus:bg-white/10 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-200 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-yellow-500/20 bg-white/5 text-white placeholder-neutral-400 focus:border-yellow-500/50 focus:bg-white/10 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-200 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-yellow-500/20 bg-white/5 text-white placeholder-neutral-400 focus:border-yellow-500/50 focus:bg-white/10 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-200 mb-2">Time of Birth</label>
                <input
                  type="time"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-yellow-500/20 bg-white/5 text-white placeholder-neutral-400 focus:border-yellow-500/50 focus:bg-white/10 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-200 mb-2">Place of Birth</label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-yellow-500/20 bg-white/5 text-white placeholder-neutral-400 focus:border-yellow-500/50 focus:bg-white/10 transition-colors"
                  placeholder="City, State, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-200 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-yellow-500/20 bg-white/5 text-white placeholder-neutral-400 focus:border-yellow-500/50 focus:bg-white/10 transition-colors resize-none"
                  placeholder="Any additional details or message..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-2xl bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block w-4 h-4 mr-2 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Submit for Matching'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/5"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
