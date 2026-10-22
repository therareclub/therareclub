import React, { useState } from 'react';
import { Mail, Youtube, MessageCircle, Send, CheckCircle, ExternalLink, GraduationCap, Users, School, Video, Copy, Check } from 'lucide-react';
import { PageRoute } from '../types';

interface ConnectPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ConnectPage: React.FC<ConnectPageProps> = ({ onNavigate }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Individual Student');
  const [requirements, setRequirements] = useState('');

  // Validation & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    enquiryType: string;
    requirements: string;
  } | null>(null);

  // Configurable WhatsApp state
  const [whatsappNumber, setWhatsappNumber] = useState('919876543210'); // Placeholder configured number
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!phone.trim()) newErrors.phone = 'Please enter your phone or WhatsApp number.';
    if (!requirements.trim()) newErrors.requirements = 'Please tell us about your goals or requirements.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmittedData({
      fullName,
      email,
      phone,
      enquiryType,
      requirements,
    });
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `The Rare Club Enquiry:\nName: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nType: ${submittedData.enquiryType}\nGoals: ${submittedData.requirements}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Direct mailto generation with pre-filled content
  const mailtoLink = submittedData
    ? `mailto:prashantkthakare@gmail.com?subject=${encodeURIComponent(
        `[The Rare Club Inquiry] ${submittedData.enquiryType} - ${submittedData.fullName}`
      )}&body=${encodeURIComponent(
        `Hello Prashant,\n\nI would like to connect regarding The Rare Club.\n\nName: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone/WhatsApp: ${submittedData.phone}\nEnquiry Type: ${submittedData.enquiryType}\n\nRequirements & Goals:\n${submittedData.requirements}\n\nBest regards,\n${submittedData.fullName}`
      )}`
    : `mailto:prashantkthakare@gmail.com`;

  // Direct WhatsApp dispatch link
  const whatsappLink = submittedData
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hello Prashant, I am submitting an inquiry to The Rare Club.\nName: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nCategory: ${submittedData.enquiryType}\nGoals: ${submittedData.requirements}`
      )}`
    : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Hello Prashant, I would like to inquire about The Rare Club and the 32-Day Focus Journal.'
      )}`;

  return (
    <div className="space-y-20 lg:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.28em] font-medium text-[#C5A15A] animate-eyebrow">
          JOIN THE MOVEMENT
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292824] leading-[1.08] text-balance animate-title">
          “Being RARE is a
          <span className="block italic text-[#C5A15A] font-light mt-1">
            choice.”
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#292824]/75 font-normal max-w-2xl mx-auto leading-relaxed animate-subtitle">
          Whether you are a student ready to take charge of your attention or an educational institution looking to develop focus cohorts, we are here to support your journey.
        </p>
      </section>

      {/* 2. FOUR AUDIENCE ENGAGEMENT PATHWAYS */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#E9E3D8] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-cover text-sm font-bold text-[#292824] uppercase tracking-wide">
              Individual Students
            </h3>
            <p className="text-xs text-[#292824]/70 leading-relaxed">
              Order individual journals, access self-paced focus guidelines, and join upcoming 32-day batch accountability groups.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E9E3D8] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-cover text-sm font-bold text-[#292824] uppercase tracking-wide">
              Study Groups & Cohorts
            </h3>
            <p className="text-xs text-[#292824]/70 leading-relaxed">
              Equip peer study circles with shared streak tracking, group reflection milestones, and mutual habit accountability.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E9E3D8] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <School className="w-5 h-5" />
            </div>
            <h3 className="font-cover text-sm font-bold text-[#292824] uppercase tracking-wide">
              Colleges & Academies
            </h3>
            <p className="text-xs text-[#292824]/70 leading-relaxed">
              Institutional bulk adoption, custom academic semester cohorts, and faculty-led attention workshops by Assistant Professor Prashant D. Thakare.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E9E3D8] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] flex items-center justify-center text-[#C5A15A]">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-cover text-sm font-bold text-[#292824] uppercase tracking-wide">
              Media & YouTube
            </h3>
            <p className="text-xs text-[#292824]/70 leading-relaxed">
              Watch deep-dive discussions on focus psychology, student interviews, and educational video essays on our YouTube channel.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DIRECT CONTACT CHANNELS & ENQUIRY FORM */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Configurable WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A15A]">
                Direct Contacts
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#292824]">
                Reach Out Directly
              </h2>
              <p className="text-sm text-[#292824]/75 leading-relaxed">
                We respond directly to every inquiry from students, parents, and academic directors.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href="mailto:prashantkthakare@gmail.com"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E9E3D8] hover:border-[#C5A15A] transition-colors group shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] text-[#C5A15A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#292824]/60 font-medium">Direct Email</div>
                  <div className="text-sm font-semibold text-[#292824] truncate">prashantkthakare@gmail.com</div>
                  <div className="text-xs text-[#292824]/60 mt-0.5">Primary channel for partnerships & academic cohorts</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#292824]/40 group-hover:text-[#C5A15A] transition-colors shrink-0" />
              </a>

              <a
                href="https://www.youtube.com/@JoinTheRareClub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E9E3D8] hover:border-[#C5A15A] transition-colors group shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F4ED] border border-[#E9E3D8] text-red-600 flex items-center justify-center shrink-0">
                  <Youtube className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#292824]/60 font-medium">YouTube Channel</div>
                  <div className="text-sm font-semibold text-[#292824] truncate">@JoinTheRareClub</div>
                  <div className="text-xs text-[#292824]/60 mt-0.5">Weekly focus strategy videos and student sessions</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#292824]/40 group-hover:text-[#C5A15A] transition-colors shrink-0" />
              </a>

              {/* WhatsApp Configurable Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E9E3D8] space-y-3 shadow-xs">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#292824]/60 font-medium">WhatsApp Channel</div>
                      <div className="text-sm font-semibold text-[#292824]">Direct Student WhatsApp</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEditingPhone(!isEditingPhone)}
                    className="text-xs text-[#C5A15A] hover:underline font-medium cursor-pointer"
                  >
                    {isEditingPhone ? 'Done' : 'Configure Number'}
                  </button>
                </div>

                {isEditingPhone ? (
                  <div className="pt-2 space-y-2">
                    <label className="text-[11px] text-[#292824]/70 block font-medium">
                      Enter your official WhatsApp business number (with country code):
                    </label>
                    <input
                      type="text"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. 919876543210"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#E9E3D8] bg-[#F7F4ED] focus:outline-[#C5A15A]"
                    />
                    <div className="text-[11px] text-[#292824]/50">
                      Notice: Placeholder number is kept configurable so you can input your verified business number.
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#292824]/70">
                    Connect directly on WhatsApp for quick inquiries about journal dispatch dates and cohort start dates.
                  </p>
                )}

                <div className="pt-1">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Video Embed */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#292824]/70">
                Featured YouTube Session
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#E9E3D8] bg-black shadow-xs">
                <iframe
                  src="https://www.youtube.com/embed/ouxj1yPmZkE"
                  title="The Rare Club Featured YouTube Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form with honest client-side handling */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E9E3D8] shadow-sm space-y-6">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A15A]">
                  COHORT & JOURNAL INQUIRY
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#292824]">
                  Start the Conversation
                </h3>
                <p className="text-xs sm:text-sm text-[#292824]/70 leading-relaxed">
                  Complete the form below. Once prepared, your inquiry can be dispatched directly via official email or WhatsApp without missing messages.
                </p>
              </div>

              {submittedData ? (
                /* Honest Success & Direct Transmission Panel */
                <div className="p-6 rounded-2xl bg-[#F7F4ED] border border-[#C5A15A]/40 space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-emerald-700">
                    <CheckCircle className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="font-cover text-sm font-bold text-[#292824]">
                        Inquiry Prepared for Transmission
                      </h4>
                      <p className="text-xs text-[#292824]/70">
                        To maintain transparent reliability (without requiring an unverified external email server), choose your preferred delivery method:
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-[#E9E3D8] text-xs space-y-2 text-[#292824]/80">
                    <div><strong>Name:</strong> {submittedData.fullName}</div>
                    <div><strong>Email:</strong> {submittedData.email}</div>
                    <div><strong>Phone:</strong> {submittedData.phone}</div>
                    <div><strong>Type:</strong> {submittedData.enquiryType}</div>
                    <div><strong>Message:</strong> {submittedData.requirements}</div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] rounded-xl transition-all"
                    >
                      <Mail className="w-4 h-4 text-[#C5A15A]" />
                      <span>Send via Default Email App</span>
                    </a>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-700" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#292824] bg-white border border-[#E9E3D8] hover:bg-[#F7F4ED] rounded-xl transition-all cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="text-xs text-[#292824]/60 hover:underline pt-2 block cursor-pointer"
                  >
                    ← Edit or submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#292824] tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9E3D8] bg-[#F7F4ED]/60 text-sm focus:outline-[#C5A15A] focus:bg-white transition-all"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#292824] tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. aarav@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E9E3D8] bg-[#F7F4ED]/60 text-sm focus:outline-[#C5A15A] focus:bg-white transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#292824] tracking-wide">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#E9E3D8] bg-[#F7F4ED]/60 text-sm focus:outline-[#C5A15A] focus:bg-white transition-all"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#292824] tracking-wide">
                      Enquiry Category
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E9E3D8] bg-[#F7F4ED]/60 text-sm focus:outline-[#C5A15A] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Individual Student">Individual Student — Journal Order / Self-Paced</option>
                      <option value="Study Group / Peer Cohort">Study Group / Peer Cohort (5–20 journals)</option>
                      <option value="College / University Institution">College / University / Coaching Academy</option>
                      <option value="Faculty Workshop / Guest Session">Faculty Workshop / Guest Speaker Session</option>
                      <option value="Media & Interview">Educational Media & Interview</option>
                    </select>
                  </div>

                  {/* Requirements & Goals */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#292824] tracking-wide">
                      Requirements & Focus Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Tell us about your study challenges, examination timeline, cohort size, or specific goals for the 32 days..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E9E3D8] bg-[#F7F4ED]/60 text-sm focus:outline-[#C5A15A] focus:bg-white transition-all resize-none"
                    />
                    {errors.requirements && (
                      <p className="text-xs text-red-600">{errors.requirements}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#292824] hover:bg-[#3D3A34] active:scale-[0.99] rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>Prepare & Submit Inquiry</span>
                      <Send className="w-4 h-4 text-[#C5A15A] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#292824]/50 text-center pt-1">
                    Your details are handled with care and will only be used to respond to your focus inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL PARTNERSHIPS SPOTLIGHT */}
      <section className="px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#292824] text-[#F7F4ED] space-y-6">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A15A]">
            ACADEMIC COLLABORATION
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#F7F4ED]">
            Institutions & Coaching Academies
          </h3>
          <p className="text-sm text-[#F7F4ED]/75 leading-relaxed">
            In competitive academic environments, student retention and examination performance depend heavily on attention span and stress regulation. The Rare Club works directly with university departments and coaching centers to introduce the 32-Day Focus Journal across student batches, supported by inaugural orientation sessions.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="mailto:prashantkthakare@gmail.com?subject=Institutional%20Cohort%20Inquiry%20-%20The%20Rare%20Club"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#C5A15A] hover:bg-[#B39049] rounded-xl transition-all"
            >
              <span>Request Institutional Deck & Sample</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
