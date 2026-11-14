import React, { useState } from 'react';
import { ChevronDown, Mail, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const TECHNEEDS_FAQS: FAQItem[] = [
  {
    question: 'What is TechNeeds?',
    answer:
      'TechNeeds is a platform that provides technology solutions and support for various needs. Founded at IGDTUW, our community fosters a motive of "all_you_need_to_know_about_tech" through structured mentorship cohorts, workshops, and hackathons.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can contact support via our official WhatsApp group (+91 8958898580) or email us directly at techneedsigdtuw@gmail.com.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer a range of services including hackathons, tech introductory sessions, mentorship programs, tech engagement competitions, and speaker sessions.',
  },
  {
    question: 'Where is TechNeeds located?',
    answer:
      'TechNeeds is based in the heart of Indira Gandhi Delhi Technical University for Women (IGDTUW), Kashmere Gate, New Delhi, founded in 2023.',
  },
  {
    question: 'Can I track my mentorship journey?',
    answer:
      'Yes, you can track your journey through our online portal—including completed learning modules, diagnostic quiz scores, project evaluations, leaderboard rank, and your AI technical profile.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faqs" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Intro & Direct Support Links */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-violet-400">
              Frequently Asked Questions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Everything you need to know about TechNeeds
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Answers about joining IGDTUW mentorship cohorts, attending events, tracking your progress on TechBoard, and reaching our core coordinators.
            </p>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-semibold text-slate-200">
                Still have a question?
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/918958898580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-[#0F172A] hover:bg-slate-800 text-emerald-300 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Support</span>
                </a>
                <a
                  href="mailto:techneedsigdtuw@gmail.com"
                  className="px-4 py-2 text-xs font-semibold bg-[#0F172A] hover:bg-slate-800 text-cyan-300 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {TECHNEEDS_FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? 'bg-[#0F172A] border-violet-500/40'
                      : 'bg-[#0F172A]/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
