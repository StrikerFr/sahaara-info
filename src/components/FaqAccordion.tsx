'use client';

import React, { useState, useMemo } from 'react';
import { faqList } from '@/data/faqData';
import { Search, ChevronDown, HelpCircle, Tag } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set(['faq-gen-1', 'faq-prod-1']));

  const categories = [
    'All',
    'General',
    'Product',
    'AI & Methodology',
    'Integrations',
    'Privacy & Safety',
    'Technical Architecture'
  ];

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenFaqIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenFaqIds(new Set());
  };

  return (
    <div className="w-full space-y-6">
      {/* Search and Filters */}
      <div className="bg-[#17231F] border border-[#273830] rounded-2xl p-5 shadow-xl space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B9B90]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs by question, answer, or topic (e.g. baseline, WhatsApp, diagnosis, privacy)..."
            className="w-full bg-[#101714] border border-[#273830] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#E5EAE6] placeholder-[#6C7A71] focus:outline-none focus:border-[#72D8B0] transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#245B49] text-[#F4F2EA] border border-[#3A6B59]'
                    : 'bg-[#141F1A] text-[#8B9B90] hover:text-[#E5EAE6] border border-[#273830]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#8B9B90]">
            <button
              onClick={expandAll}
              className="hover:text-[#F4F2EA] transition-colors"
            >
              Expand All
            </button>
            <span>·</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#F4F2EA] transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        <div className="text-xs text-[#8B9B90] pt-2 border-t border-[#273830] flex items-center justify-between">
          <span>
            Showing <strong className="text-[#F4F2EA]">{filteredFaqs.length}</strong> of{' '}
            <strong>{faqList.length}</strong> answered questions
          </span>
          <span className="text-[11px] text-[#6C7A71] hidden sm:inline">
            Direct, factual answers without marketing obfuscation
          </span>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqIds.has(faq.id);
          return (
            <div
              key={faq.id}
              className={`bg-[#17231F] border rounded-xl overflow-hidden transition-all ${
                isOpen ? 'border-[#385145] shadow-lg' : 'border-[#273830] hover:border-[#33463C]'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-[#1E2B25]/60 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-[#F4F2EA] leading-snug">
                      {faq.question}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#202B26] text-[#A9C2AE] border border-[#2D3E35]">
                        {faq.category}
                      </span>
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#8B9B90] flex items-center gap-0.5"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-md bg-[#202B26] flex items-center justify-center text-[#95A49B] shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-[#72D8B0]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 text-xs text-[#C5D2C9] leading-relaxed border-t border-[#273830] bg-[#141F1A]">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="p-8 text-center bg-[#17231F] border border-[#273830] rounded-xl text-[#8B9B90] text-xs">
            No questions matched your search query. Try broadening your terms or clear the filter.
          </div>
        )}
      </div>
    </div>
  );
};
