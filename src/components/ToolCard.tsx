import Link from 'next/link';
import { Tool } from '@/lib/tools-data';

interface ToolCardProps {
  tool: Tool;
  showCategory?: boolean;
}

export default function ToolCard({ tool, showCategory = false }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {tool.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {tool.shortDescription}
      </p>
      {showCategory && (
        <span className="inline-block mt-3 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {tool.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </span>
      )}
    </Link>
  );
}
