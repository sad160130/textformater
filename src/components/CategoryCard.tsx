import Link from 'next/link';
import { Category, getToolsByCategory } from '@/lib/tools-data';

interface CategoryCardProps {
  category: Category;
  showToolCount?: boolean;
}

const categoryIcons: Record<string, string> = {
  'case-manipulation': 'Aa',
  'data-formatting': '[]',
  'technical-tools': '</>',
  'creative-generators': '*',
  'analysis-utilities': '#',
};

export default function CategoryCard({ category, showToolCount = true }: CategoryCardProps) {
  const tools = getToolsByCategory(category.slug);

  return (
    <Link
      href={`/category/${category.slug}`}
      className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-mono font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {categoryIcons[category.slug] || '?'}
        </div>
        {showToolCount && (
          <span className="text-sm text-gray-500">
            {tools.length} tools
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {category.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {category.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1">
        {tools.slice(0, 3).map((tool) => (
          <span
            key={tool.slug}
            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
          >
            {tool.name}
          </span>
        ))}
        {tools.length > 3 && (
          <span className="text-xs text-gray-400 px-2 py-1">
            +{tools.length - 3} more
          </span>
        )}
      </div>
    </Link>
  );
}
