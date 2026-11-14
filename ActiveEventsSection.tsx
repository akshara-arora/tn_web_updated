import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
  X,
  Trophy,
  Terminal,
  Mic,
  Code2,
} from 'lucide-react';
import { Role } from '../../types';

export interface TechNeedsEvent {
  id: string;
  title: string;
  category: 'Hackathons' | 'Sessions & Workshops' | 'Competitions';
  format: string;
  schedule: string;
  venue: string;
  statusLabel: string;
  description: string;
  highlights: string[];
  eligibility: string;
}

const ACTIVE_EVENTS: TechNeedsEvent[] = [
  {
    id: 'evt_innovortex',
    title: 'InnoVortex — Multi-Track Innovation Hackathon',
    category: 'Hackathons',
    format: 'Multi-Track Hackathon',
    schedule: 'Flagship Cohort Cycle',
    venue: 'IGDTUW Campus & Hybrid',
    statusLabel: 'Active Flagship',
    description:
      'TechNeeds IGDTUW’s premier multi-track hackathon spanning Ideathon / PitchStorm for first-year innovators, Reimagathon for re-engineering digital products, and a 24-hour full-stack coding sprint.',
    highlights: [
      'PitchStorm / Ideathon track tailored for 1st-year builders',
      'Reimagathon track for product & UX re-architecture',
      'Senior 24-hour coding hackathon with industry mentorship',
    ],
    eligibility: 'Teams of 2–4 · Open to IGDTUW & Inter-College Builders',
  },
  {
    id: 'evt_intro_sessions',
    title: 'Tech Introductory & Stack Onboarding Sessions',
    category: 'Sessions & Workshops',
    format: 'Hands-On Workshop',
    schedule: 'Weekly · Fridays 4:00 PM IST',
    venue: 'IGDTUW Seminar Hall / Online',
    statusLabel: 'Open Registration',
    description:
      'Beginner-friendly onboarding sessions designed to demystify core engineering workflows—covering Git & GitHub collaboration, Figma prototyping, Web Development, and DSA in C++/Java.',
    highlights: [
      'Practical Git, GitHub PRs, and deployment walkthroughs',
      'Starter roadmaps for Web Dev, AI/ML, App Dev & AR/VR',
      'Direct Q&A with senior TechNeeds cohort mentors',
    ],
    eligibility: 'Individual · Recommended for 1st & 2nd Year Students',
  },
  {
    id: 'evt_speaker_sessions',
    title: 'Industry Speaker Sessions & Alumnae Fireside',
    category: 'Sessions & Workshops',
    format: 'Live Speaker Session',
    schedule: 'Bi-Weekly · Saturdays 5:30 PM IST',
    venue: 'Live Stream & Kashmere Gate Campus',
    statusLabel: 'Upcoming Session',
    description:
      'Interactive engineering talks and career deep-dives featuring IGDTUW alumnae and engineers from Microsoft, Google, and Adobe on system design, internships, and production engineering.',
    highlights: [
      'Real-world system architecture & internship prep breakdowns',
      'Live portfolio, resume, and GitHub profile feedback',
      'Direct networking with industry mentors',
    ],
    eligibility: 'Open to All IGDTUW Students & Mentorship Mentees',
  },
  {
    id: 'evt_tech_competition',
    title: 'Tech Engagement Competition & TechBoard Sprints',
    category: 'Competitions',
    format: 'Competitive Challenge',
    schedule: 'Ongoing · Bi-Weekly Sprints',
    venue: 'Online on TechBoard Portal',
    statusLabel: 'Live on TechBoard',
    description:
      'Timed diagnostic coding quizzes, problem-solving sprints, and weekend mini-builds where participants earn TechBoard points, maintain daily streaks, and climb the live community leaderboard.',
    highlights: [
      'Automated quiz scoring and mentor-reviewed project sprints',
      'Streak multipliers and achievement badges on your profile',
      'Top performers featured on the TechNeeds Leaderboard',
    ],
    eligibility: 'Individual · Active TechNeeds Portal Members',
  },
];

interface ActiveEventsSectionProps {
  onOpenLogin: (role?: Role, mode?: 'signin' | 'signup') => void;
}

export const ActiveEventsSection: React.FC<ActiveEventsSectionProps> = ({ onOpenLogin }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalEvent, setActiveModalEvent] = useState<TechNeedsEvent | null>(null);
  const [registeredEventIds, setRegisteredEventIds] = useState<string[]>([]);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpError, setRsvpError] = useState('');

  const categories = ['All', 'Hackathons', 'Sessions & Workshops', 'Competitions'];

  const filteredEvents =
    selectedCategory === 'All'
      ? ACTIVE_EVENTS
      : ACTIVE_EVENTS.filter((evt) => evt.category === selectedCategory);

  const getCategoryIcon = (category: TechNeedsEvent['category']) => {
    switch (category) {
      case 'Hackathons':
        return <Trophy className="w-5 h-5 text-violet-400" />;
      case 'Sessions & Workshops':
        return <Mic className="w-5 h-5 text-cyan-400" />;
      case 'Competitions':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  const handleOpenEventModal = (evt: TechNeedsEvent) => {
    setActiveModalEvent(evt);
    setRsvpError('');
  };

  const handleConfirmRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModalEvent) return;

    const trimmedName = rsvpName.trim();
    const trimmedEmail = rsvpEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setRsvpError('Please enter your full name.');
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      setRsvpError('Please enter a valid email address.');
      return;
    }

    if (!registeredEventIds.includes(activeModalEvent.id)) {
      setRegisteredEventIds((prev) => [...prev, activeModalEvent.id]);
    }
    setRsvpError('');
  };

  return (
    <section id="events" className="py-20 bg-[#0C111E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Community Calendar
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Active Events, Hackathons & Speaker Sessions
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              From InnoVortex to weekly technical introductory workshops and alumnae speaker sessions across IGDTUW.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-1 p-1 bg-[#0F172A] border border-slate-800 rounded-xl self-start lg:self-auto"
            role="tablist"
            aria-label="Filter active events"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((evt) => {
            const isRegistered = registeredEventIds.includes(evt.id);

            return (
              <div
                key={evt.id}
                className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Unboxed Metadata Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(evt.category)}
                      <span className="font-semibold text-slate-200">{evt.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{evt.format}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-cyan-400">
                      {isRegistered ? 'Registered' : evt.statusLabel}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{evt.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {evt.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-300">
                    {evt.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Info & Action */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span>{evt.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenEventModal(evt)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 ${
                      isRegistered
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25'
                        : 'bg-slate-900 hover:bg-indigo-600 text-cyan-300 hover:text-white border border-slate-700 hover:border-indigo-500'
                    }`}
                  >
                    {isRegistered ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>View Pass</span>
                      </>
                    ) : (
                      <>
                        <span>Event Details & RSVP</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Details & RSVP Modal */}
      {activeModalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          <div className="w-full max-w-lg rounded-2xl bg-[#0F172A] border border-slate-700/90 shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs text-cyan-400 font-semibold mb-1">
                  {activeModalEvent.category} · {activeModalEvent.format}
                </div>
                <h4 id="event-modal-title" className="text-xl font-bold text-white">
                  {activeModalEvent.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalEvent(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close event modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 bg-slate-900/70 p-4 rounded-xl border border-slate-800">
                <div>
                  <div className="text-slate-500 mb-0.5">Schedule</div>
                  <div className="font-medium text-white">{activeModalEvent.schedule}</div>
                </div>
                <div>
                  <div className="text-slate-500 mb-0.5">Venue</div>
                  <div className="font-medium text-white">{activeModalEvent.venue}</div>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-slate-800/80">
                  <div className="text-slate-500 mb-0.5">Eligibility</div>
                  <div className="font-medium text-slate-200">{activeModalEvent.eligibility}</div>
                </div>
              </div>

              {registeredEventIds.includes(activeModalEvent.id) ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Interest Recorded for {activeModalEvent.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sign in or create your TechNeeds portal account to track cohort milestones, submit builds, and earn TechBoard points.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => {
                        setActiveModalEvent(null);
                        onOpenLogin('mentee', 'signup');
                      }}
                      className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors whitespace-nowrap"
                    >
                      Open TechBoard Portal
                    </button>
                    <button
                      onClick={() => setActiveModalEvent(null)}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleConfirmRegistration} className="space-y-3">
                  <div className="text-xs font-semibold text-slate-200">
                    Quick Event RSVP
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                    <input
                      type="email"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      placeholder="Email (e.g., name@igdtuw.ac.in)"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  {rsvpError && (
                    <p className="text-xs text-rose-400">{rsvpError}</p>
                  )}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalEvent(null);
                        onOpenLogin('mentee', 'signup');
                      }}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Or Sign Up on Portal</span>
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg transition-all whitespace-nowrap shrink-0"
                    >
                      Confirm RSVP
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
