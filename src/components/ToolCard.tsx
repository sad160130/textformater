'use client';

import Link from 'next/link';
import { Tool } from '@/lib/tools-data';

interface ToolCardProps {
  tool: Tool;
  showCategory?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
  'case-manipulation': { bg: 'bg-[#ff6b6b]/5', text: 'text-[#ff6b6b]', accent: '#ff6b6b' },
  'data-formatting': { bg: 'bg-[#4ecdc4]/5', text: 'text-[#4ecdc4]', accent: '#4ecdc4' },
  'technical-tools': { bg: 'bg-[#a855f7]/5', text: 'text-[#a855f7]', accent: '#a855f7' },
  'creative-generators': { bg: 'bg-[#ec4899]/5', text: 'text-[#ec4899]', accent: '#ec4899' },
  'analysis-utilities': { bg: 'bg-[#fbbf24]/5', text: 'text-[#f59e0b]', accent: '#fbbf24' },
};

export default function ToolCard({ tool, showCategory = false }: ToolCardProps) {
  const colors = categoryColors[tool.category] || categoryColors['case-manipulation'];

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 40px -12px ${colors.accent}25`;
        e.currentTarget.style.borderColor = `${colors.accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#f3f4f6';
      }}
    >
      {/* Accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}80)` }}
      />

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors pr-4">
          {tool.name}
        </h3>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
          style={{ backgroundColor: `${colors.accent}15` }}
        >
          <svg className="w-4 h-4" style={{ color: colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {tool.shortDescription}
      </p>

      {showCategory && (
        <span
          className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full ${colors.bg} ${colors.text}`}
        >
          {tool.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </span>
      )}
    </Link>
  );
}
