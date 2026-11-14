import React, { useState } from 'react';
import {
  Code2,
  Users,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { Programme, Role } from '../../types';
import { ActiveEventsSection } from './ActiveEventsSection';
import { FAQSection } from './FAQSection';

interface LandingPageProps {
  programmes: Programme[];
  onOpenLogin: (role?: Role, mode?: 'signin' | 'signup') => void;
  onExploreProgrammes: () => void;
  onViewProgrammeDetails: (prog: Programme) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  programmes,
  onOpenLogin,
  onExploreProgrammes,
  onViewProgrammeDetails,
}) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (value: string, field: 'email' | 'phone') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient radial glow backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/15 to-cyan-500/15 blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IGDTUW Reimagathon 2026 · Technical Mentorship Ecosystem</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
                Learn. Build. Grow. <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Together.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                TechNeeds is the next-generation mentorship and engineering management platform engineered exclusively for the women in technology at IGDTUW. Bridging top industry leaders, structured cohort curricula, hands-on production code reviews, and Gemini-powered technical profiling.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenLogin('mentee', 'signup')}
                  className="px-6 py-3.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold text-sm rounded-xl shadow-xl shadow-indigo-600/25 transition-all flex items-center gap-2 group"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenLogin('mentee', 'signin')}
                  className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm rounded-xl border border-slate-700/80 transition-all flex items-center gap-2"
                >
                  <span>Sign In</span>
                </button>

                <a
                  href="#programmes"
                  className="text-xs font-medium text-slate-300 hover:text-cyan-300 underline underline-offset-4 transition-colors ml-1"
                >
                  Explore Programmes →
                </a>
              </div>

              {/* Proof strip */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3-Tier RBAC (Admin · Mentor · Mentee)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Interactive Quizzes & GitHub Grading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Gemini 3.8 Flash AI Profiles</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0F172A] group">
                <img
                  src="/src/assets/images/techneeds_hero_mentorship_1794399539388.jpg"
                  alt="TechNeeds IGDTUW Mentorship Collaboration Scene"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />

                {/* Floating Metric Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-slate-700/90 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-violet-400">
                        Active Spring 2026 Cohorts
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Full-Stack & Cloud Systems Engineering
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-mono font-bold text-cyan-400 tabular-nums">98%</span>
                      <div className="text-[10px] text-slate-400">Internship Uplift</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 border-y border-slate-800/80 bg-[#0E1526]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">Engineers Mentored</div>
              <p className="text-xs text-slate-400 mt-0.5">IGDTUW students across CSE, IT, AI & ECE</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                18
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">Specialized Cohorts</div>
              <p className="text-xs text-slate-400 mt-0.5">Cloud, Distributed Systems, ML & Web3</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                420+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">Production Projects</div>
              <p className="text-xs text-slate-400 mt-0.5">Live deployed apps with peer code reviews</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">Placement Uplift</div>
              <p className="text-xs text-slate-400 mt-0.5">At Google, Microsoft, Adobe, and top startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
              Engineered For Excellence
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Everything needed to transform student engineers into industry leaders
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Replacing fragmented chat groups and lost spreadsheets with an enterprise-grade mentorship platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-violet-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">1:1 & Cohort Mentorship</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly with IGDTUW alumnae and senior architects at Microsoft, Google, and Adobe who guide technical growth through weekly cadences.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Structured Resources</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-yield video modules, timed diagnostic quizzes with instant scoring, and detailed architecture project briefs published directly by mentors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Production Assignments</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Submit GitHub repositories and live deployments. Receive granular rubric scores and personalized code feedback from industry mentors.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">AI-Powered Profiles</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gemini 3.8 Flash synthesizes verified project submissions, quiz performance, and streaks into custom technical identities, skill badges, and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#0C111E] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              The Architecture
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How TechNeeds Works: Admin → Mentor → Mentee
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              A synchronized workflow ensuring transparent accountability, quality control, and accelerated skill acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-violet-400 mb-3">01. ADMIN GOVERNANCE</div>
              <h4 className="text-xl font-bold text-white mb-2">Curate & Allocate</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Administrators design cohorts, monitor overall university-wide metrics, approve mentorship tracks, and provision secure credentials for vetted industry mentors.
              </p>
              <div className="text-[11px] text-slate-500 space-y-1">
                <div>· Programme lifecycle management</div>
                <div>· Mentor-to-cohort allocation</div>
                <div>· University performance auditing</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3">02. MENTOR WORKSPACE</div>
              <h4 className="text-xl font-bold text-white mb-2">Publish & Evaluate</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Mentors onboard mentees with auto-generated Enrollment Numbers, publish video modules, configure diagnostic quizzes, and review submitted project code.
              </p>
              <div className="text-[11px] text-slate-500 space-y-1">
                <div>· Resource authoring (Video/Quiz/Project)</div>
                <div>· Code review & score assignment</div>
                <div>· Qualitative mentor feedback</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-emerald-400 mb-3">03. MENTEE LEARNING</div>
              <h4 className="text-xl font-bold text-white mb-2">Learn, Build & Shine</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Students access curated curriculum, complete timed diagnostic quizzes, submit GitHub repositories, climb cohort leaderboards, and generate AI technical profiles.
              </p>
              <div className="text-[11px] text-slate-500 space-y-1">
                <div>· Timed quiz attempts & instant scores</div>
                <div>· Project submission tracking</div>
                <div>· Gamified badges & Gemini technical persona</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programmes Section */}
      <section id="programmes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
                Active Cohorts
              </h2>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Explore TechNeeds Mentorship Tracks
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Curated by department deans and senior engineering leads
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <div
                key={prog.id}
                className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-mono text-cyan-400 font-semibold">{prog.code}</span>
                    <span className="capitalize text-emerald-400">{prog.status}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{prog.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {prog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="text-slate-400">
                    <span className="text-white font-mono font-semibold tabular-nums">{prog.menteeCount}</span> / {prog.maxMentees} Mentees
                  </div>
                  <button
                    onClick={() => onViewProgrammeDetails(prog)}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0C111E] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Community Voices
            </h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Trusted by IGDTUW Engineers & Alumnae
            </h3>
            <p className="text-slate-400 text-xs mt-2">
              Sample testimonials reflecting actual student transformations and mentor feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                "Having Priya as my TechNeeds mentor transformed my understanding of distributed systems. Her feedback on my WebSocket whiteboard project directly helped me clear my Microsoft internship technical rounds!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/images/avatar_student_ananya_1794399540199.jpg"
                  alt="Ananya Verma"
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-semibold text-white">Ananya Verma</div>
                  <div className="text-[11px] text-slate-400">B.Tech CSE '26 · IGDTUW</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                "As an alumna, TechNeeds gives me a streamlined interface to mentor 28 students without getting bogged down in administrative overhead. The code grading rubric and diagnostic quiz builder are world-class."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/images/avatar_mentor_priya_1794399541203.jpg"
                  alt="Priya Sharma"
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-semibold text-white">Priya Sharma</div>
                  <div className="text-[11px] text-slate-400">Senior SWE @ Microsoft · IGDTUW Alumna</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
              <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                "The AI-generated technical profile was a game changer for my resume. Gemini summarized my actual project submissions and quiz scores into an articulate technical persona that recruiters loved."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80"
                  alt="Sneha Gupta"
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-semibold text-white">Sneha Gupta</div>
                  <div className="text-[11px] text-slate-400">B.Tech IT '26 · IGDTUW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Events Section */}
      <ActiveEventsSection onOpenLogin={onOpenLogin} />

      {/* FAQs Section */}
      <FAQSection />

      {/* Footer & Contacts */}
      <footer id="contact" className="pt-16 pb-10 border-t border-slate-800 bg-[#0A0D16] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            {/* Brand & Mission Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-base font-bold text-white tracking-tight">TechNeeds IGDTUW</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                TechNeeds IGDTUW is a community which fosters a motive of &ldquo;all_you_need_to_know_about_tech&rdquo;. We offer Tech Introductory sessions, Mentorship Programs, Hackathons and a competitive environment to learn and grow together.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium">
                <a
                  href="https://www.instagram.com/techneedsigdtuw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/company/techneeds-igdtuw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold text-white">Quick Links</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    onClick={() => onOpenLogin('mentee', 'signin')}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    TechBoard Portal
                  </button>
                </li>
                <li>
                  <a href="#programmes" className="hover:text-cyan-400 transition-colors">
                    Mentorship Cohorts
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-cyan-400 transition-colors">
                    Active Events
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-cyan-400 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLogin('mentor', 'signin')}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    Mentor Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLogin('admin', 'signin')}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    Admin Console
                  </button>
                </li>
              </ul>
            </div>

            {/* Contacts Column (from original website) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-bold text-white">Contacts</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You can DM your query on our Whatsapp or you can directly mail us.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#0F172A] border border-slate-800">
                  <a
                    href="https://wa.me/918958898580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-300 transition-colors min-w-0"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono font-medium tabular-nums truncate">+91 8958898580</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+91 8958898580', 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    aria-label="Copy WhatsApp number"
                    title="Copy WhatsApp number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#0F172A] border border-slate-800">
                  <a
                    href="mailto:techneedsigdtuw@gmail.com"
                    className="flex items-center gap-2.5 text-slate-200 hover:text-cyan-300 transition-colors min-w-0"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate font-medium">techneedsigdtuw@gmail.com</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('techneedsigdtuw@gmail.com', 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    aria-label="Copy email address"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>
                    Indira Gandhi Delhi Technical University for Women (IGDTUW), Kashmere Gate, New Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 TechNeeds IGDTUW · All Rights Reserved
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => onOpenLogin('mentee', 'signin')} className="hover:text-slate-300 transition-colors">
                Mentee Login
              </button>
              <button onClick={() => onOpenLogin('mentor', 'signin')} className="hover:text-slate-300 transition-colors">
                Mentor Login
              </button>
              <button onClick={() => onOpenLogin('admin', 'signin')} className="hover:text-slate-300 transition-colors">
                Admin Console
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
