'use client';

import Link from 'next/link';
import { Category, getToolsByCategory } from '@/lib/tools-data';

interface CategoryCardProps {
  category: Category;
  showToolCount?: boolean;
}

const categoryConfig: Record<string, { icon: string; color: string; gradient: string }> = {
  'case-manipulation': { icon: 'Aa', color: '#ff6b6b', gradient: 'from-[#ff6b6b] to-[#ff8e53]' },
  'data-formatting': { icon: '[ ]', color: '#4ecdc4', gradient: 'from-[#4ecdc4] to-[#45b7d1]' },
  'technical-tools': { icon: '</>', color: '#a855f7', gradient: 'from-[#a855f7] to-[#ec4899]' },
  'creative-generators': { icon: '✦', color: '#ec4899', gradient: 'from-[#ec4899] to-[#f97316]' },
  'analysis-utilities': { icon: '#', color: '#fbbf24', gradient: 'from-[#fbbf24] to-[#84cc16]' },
};

export default function CategoryCard({ category, showToolCount = true }: CategoryCardProps) {
  const tools = getToolsByCategory(category.slug);
  const config = categoryConfig[category.slug] || categoryConfig['case-manipulation'];

  return (
    <Link
      href={`/category/${category.slug}`}
      className="block p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 40px -12px ${config.color}30`;
        e.currentTarget.style.borderColor = `${config.color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#f3f4f6';
      }}
    >
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity`}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              backgroundColor: `${config.color}15`,
              color: config.color,
            }}
          >
            {config.icon}
          </div>
          {showToolCount && (
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: `${config.color}10`, color: config.color }}
            >
              {tools.length} tools
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
          {category.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tools.slice(0, 3).map((tool) => (
            <span
              key={tool.slug}
              className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full group-hover:bg-gray-50 transition-colors"
            >
              {tool.name}
            </span>
          ))}
          {tools.length > 3 && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ color: config.color }}
            >
              +{tools.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
