'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { toTitleCase, toSentenceCase, toAlternatingCase, removeLineBreaks, toVaporwave } from '@/lib/transformations';

const quickTools = [
  { id: 'title', name: 'Title Case', transform: toTitleCase },
  { id: 'sentence', name: 'Sentence Case', transform: toSentenceCase },
  { id: 'alternating', name: 'Alternating Case', transform: toAlternatingCase },
  { id: 'remove-breaks', name: 'Remove Line Breaks', transform: (text: string) => removeLineBreaks(text) },
  { id: 'vaporwave', name: 'Vaporwave', transform: toVaporwave },
];

export default function HomeHero() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedTool, setSelectedTool] = useState(quickTools[0]);
  const [copied, setCopied] = useState(false);

  const handleTransform = useCallback(() => {
    if (inputText.trim()) {
      setOutputText(selectedTool.transform(inputText));
    }
  }, [inputText, selectedTool]);

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
      // Fallback
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
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Convert, Format, and Analyze Text Online
            <span className="text-blue-600"> — Fast & Free</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            textformater.online offers 50+ free browser-based text tools. Transform case, clean up data,
            generate creative text, and analyze content — all without leaving your browser.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="/tools"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Browse All Text Tools
            </Link>
            <Link
              href="/category/case-manipulation"
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Case Tools
            </Link>
            <Link
              href="/category/data-formatting"
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Data Formatting
            </Link>
            <Link
              href="/category/technical-tools"
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Technical
            </Link>
            <Link
              href="/category/creative-generators"
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Creative
            </Link>
            <Link
              href="/category/analysis-utilities"
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Analysis
            </Link>
          </div>
        </div>

        {/* Quick Demo Tool */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="font-semibold text-gray-700">Quick Text Tool</h2>
                <select
                  value={selectedTool.id}
                  onChange={(e) => handleToolChange(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Select transformation tool"
                >
                  {quickTools.map((tool) => (
                    <option key={tool.id} value={tool.id}>
                      {tool.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Input Text
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="Type or paste your text here..."
                  className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  aria-label="Input text"
                />
              </div>

              <div className="p-4 bg-gray-50">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Output
                </label>
                <textarea
                  value={outputText}
                  readOnly
                  placeholder="Converted text appears here..."
                  className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none bg-white text-sm"
                  aria-label="Output text"
                />
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
              <button
                onClick={handleTransform}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Convert
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!outputText}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                    outputText
                      ? 'border-gray-300 text-gray-700 hover:bg-white'
                      : 'border-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => { setInputText(''); setOutputText(''); }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors text-sm font-medium"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            This is a quick preview. For more options, visit the{' '}
            <Link href={`/tools/${selectedTool.id === 'title' ? 'title-case-converter' : selectedTool.id === 'sentence' ? 'sentence-case-converter' : selectedTool.id === 'alternating' ? 'alternating-case-generator' : selectedTool.id === 'remove-breaks' ? 'remove-line-breaks' : 'vaporwave-text-generator'}`} className="text-blue-600 hover:underline">
              full tool page
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
