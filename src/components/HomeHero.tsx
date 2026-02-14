'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { toTitleCase, toSentenceCase, toAlternatingCase, removeLineBreaks, toVaporwave } from '@/lib/transformations';

const quickTools = [
  { id: 'title', name: 'Title Case', transform: toTitleCase, color: '#ff6b6b' },
  { id: 'sentence', name: 'Sentence Case', transform: toSentenceCase, color: '#4ecdc4' },
  { id: 'alternating', name: 'Alternating Case', transform: toAlternatingCase, color: '#a855f7' },
  { id: 'remove-breaks', name: 'Remove Line Breaks', transform: (text: string) => removeLineBreaks(text), color: '#fbbf24' },
  { id: 'vaporwave', name: 'Vaporwave', transform: toVaporwave, color: '#ec4899' },
];

export default function HomeHero() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedTool, setSelectedTool] = useState(quickTools[0]);
  const [copied, setCopied] = useState(false);

  const handleInputChange = useCallback((value: string) => {
    setInputText(value);
    if (value.trim()) {
      setOutputText(selectedTool.transform(value));
    } else {
      setOutputText('');
    }
  }, [selectedTool]);

  const handleToolChange = useCallback((toolId: string) => {
    const tool = quickTools.find(t => t.id === toolId);
    if (tool) {
      setSelectedTool(tool);
      if (inputText.trim()) {
        setOutputText(tool.transform(inputText));
      }
    }
  }, [inputText]);

  const handleCopy = useCallback(async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = outputText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [outputText]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#4ecdc4]/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#a855f7]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6b6b]/10 to-[#a855f7]/10 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ecdc4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ecdc4]"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">50+ Free Text Tools</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Text
            <br />
            <span className="bg-gradient-to-r from-[#ff6b6b] via-[#a855f7] to-[#4ecdc4] bg-clip-text text-transparent">
              Instantly & Free
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Case converters, formatters, encoders, and creative generators.
            All running in your browser — your text never leaves your device.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="/tools"
              className="px-6 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#a855f7] text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-semibold hover:-translate-y-0.5"
            >
              Browse All Tools
            </Link>
            <Link
              href="/category/case-manipulation"
              className="px-5 py-3 bg-[#ff6b6b]/10 text-[#ff6b6b] rounded-full hover:bg-[#ff6b6b]/20 transition-colors font-medium"
            >
              Case Tools
            </Link>
            <Link
              href="/category/data-formatting"
              className="px-5 py-3 bg-[#4ecdc4]/10 text-[#3dbdb5] rounded-full hover:bg-[#4ecdc4]/20 transition-colors font-medium"
            >
              Data Formatting
            </Link>
            <Link
              href="/category/technical-tools"
              className="px-5 py-3 bg-[#a855f7]/10 text-[#9333ea] rounded-full hover:bg-[#a855f7]/20 transition-colors font-medium"
            >
              Technical
            </Link>
            <Link
              href="/category/creative-generators"
              className="px-5 py-3 bg-[#ec4899]/10 text-[#db2777] rounded-full hover:bg-[#ec4899]/20 transition-colors font-medium"
            >
              Creative
            </Link>
          </div>
        </div>

        {/* Quick Demo Tool */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            {/* Tool Selector */}
            <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500 mr-2">Quick transform:</span>
              {quickTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => handleToolChange(tool.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTool.id === tool.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: selectedTool.id === tool.id ? tool.color : undefined,
                    boxShadow: selectedTool.id === tool.id ? `0 4px 14px ${tool.color}40` : undefined,
                  }}
                >
                  {tool.name}
                </button>
              ))}
            </div>

            {/* Input/Output */}
            <div className="grid md:grid-cols-2">
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Text
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="Type or paste your text here..."
                  className="w-full h-44 p-4 bg-gray-50 border-0 rounded-2xl resize-none focus:ring-2 focus:ring-[#4ecdc4] focus:bg-white transition-all text-gray-800 placeholder-gray-400"
                  aria-label="Input text"
                />
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Transformed
                </label>
                <textarea
                  value={outputText}
                  readOnly
                  placeholder="Result appears here..."
                  className="w-full h-44 p-4 bg-white border border-gray-100 rounded-2xl resize-none text-gray-800 placeholder-gray-400"
                  aria-label="Output text"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!outputText}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    outputText
                      ? 'bg-[#4ecdc4] text-white hover:bg-[#3dbdb5] hover:shadow-lg hover:shadow-teal-500/25'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {copied ? '✓ Copied!' : 'Copy Result'}
                </button>
                <button
                  onClick={() => { setInputText(''); setOutputText(''); }}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Clear
                </button>
              </div>
              <Link
                href={`/tools/${selectedTool.id === 'title' ? 'title-case-converter' : selectedTool.id === 'sentence' ? 'sentence-case-converter' : selectedTool.id === 'alternating' ? 'alternating-case-generator' : selectedTool.id === 'remove-breaks' ? 'remove-line-breaks' : 'vaporwave-text-generator'}`}
                className="text-sm font-medium text-[#a855f7] hover:text-[#9333ea] transition-colors"
              >
                More options →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
