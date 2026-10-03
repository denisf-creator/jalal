import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/scripts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-[#8A8A93]">
          Quick answers to common questions about Xeno.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className={`rounded-2xl transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                isOpen
                  ? 'bg-white/[0.04] border-white/[0.14] shadow-[0_8px_24px_rgba(0,0,0,0.4)]'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.03]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none cursor-pointer"
              >
                <span className="font-medium text-base text-[#F5F5F7]">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'bg-white/[0.08] border-white/[0.18]' : ''
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 text-[#8A8A93] transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </span>
              </button>

              {/* Smooth height animation via CSS Grid rows */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 text-sm text-[#8A8A93] leading-relaxed border-t border-white/[0.04]">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
