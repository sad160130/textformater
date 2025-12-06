'use client';

import { useState, useCallback, useEffect } from 'react';
import { Tool } from '@/lib/tools-data';
import * as transformations from '@/lib/transformations';

interface ToolClientProps {
  tool: Tool;
}

type TransformFunction = (input: string, options?: Record<string, unknown>) => string | Promise<string>;

// Map tool slugs to their transformation functions and options
const toolConfigs: Record<string, {
  transform: TransformFunction;
  options?: Array<{
    id: string;
    label: string;
    type: 'select' | 'checkbox' | 'text' | 'number';
    defaultValue: string | boolean | number;
    options?: { value: string; label: string }[];
  }>;
  isAnalysisTool?: boolean;
}> = {
  // Case Manipulation Tools
  'title-case-converter': {
    transform: transformations.toTitleCase,
  },
  'sentence-case-converter': {
    transform: transformations.toSentenceCase,
  },
  'alternating-case-generator': {
    transform: transformations.toAlternatingCase,
  },
  'reverse-text-generator': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.reverseText(text, opts?.byWord as boolean),
    options: [
      { id: 'byWord', label: 'Reverse by word', type: 'checkbox', defaultValue: false },
    ],
  },
  'upside-down-text-generator': {
    transform: transformations.toUpsideDown,
  },
  'small-caps-generator': {
    transform: transformations.toSmallCaps,
  },
  'strikethrough-text-generator': {
    transform: transformations.toStrikethrough,
  },
  'underline-text-generator': {
    transform: transformations.toUnderline,
  },
  'bold-text-generator-unicode': {
    transform: transformations.toBold,
  },
  'italic-text-generator-unicode': {
    transform: transformations.toItalic,
  },

  // Data Formatting Tools
  'remove-empty-lines': {
    transform: transformations.removeEmptyLines,
  },
  'remove-line-breaks': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.removeLineBreaks(text, opts?.separator as string),
    options: [
      { id: 'separator', label: 'Separator', type: 'text', defaultValue: ' ' },
    ],
  },
  'remove-duplicate-lines': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.removeDuplicateLines(text, opts?.caseSensitive as boolean),
    options: [
      { id: 'caseSensitive', label: 'Case sensitive', type: 'checkbox', defaultValue: true },
    ],
  },
  'text-to-single-line': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.textToSingleLine(text, opts?.separator as string),
    options: [
      { id: 'separator', label: 'Separator', type: 'text', defaultValue: ' ' },
    ],
  },
  'remove-whitespace': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.removeWhitespace(text, {
        leading: opts?.leading as boolean,
        trailing: opts?.trailing as boolean,
        extra: opts?.extra as boolean,
        all: opts?.all as boolean,
      }),
    options: [
      { id: 'leading', label: 'Leading spaces', type: 'checkbox', defaultValue: true },
      { id: 'trailing', label: 'Trailing spaces', type: 'checkbox', defaultValue: true },
      { id: 'extra', label: 'Extra spaces', type: 'checkbox', defaultValue: true },
    ],
  },
  'text-deduping-tool': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.removeDuplicateLines(text, opts?.caseSensitive as boolean),
    options: [
      { id: 'caseSensitive', label: 'Case sensitive', type: 'checkbox', defaultValue: false },
    ],
  },
  'sort-text-lines': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.sortLines(text, {
        direction: opts?.direction as 'asc' | 'desc',
        type: opts?.type as 'alpha' | 'numeric' | 'length',
      }),
    options: [
      {
        id: 'direction',
        label: 'Direction',
        type: 'select',
        defaultValue: 'asc',
        options: [
          { value: 'asc', label: 'Ascending' },
          { value: 'desc', label: 'Descending' },
        ],
      },
      {
        id: 'type',
        label: 'Sort by',
        type: 'select',
        defaultValue: 'alpha',
        options: [
          { value: 'alpha', label: 'Alphabetical' },
          { value: 'numeric', label: 'Numeric' },
          { value: 'length', label: 'Length' },
        ],
      },
    ],
  },
  'add-line-numbers': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.addLineNumbers(text, {
        startAt: opts?.startAt as number,
        separator: opts?.separator as string,
      }),
    options: [
      { id: 'startAt', label: 'Start at', type: 'number', defaultValue: 1 },
      { id: 'separator', label: 'Separator', type: 'text', defaultValue: '. ' },
    ],
  },
  'remove-html-tags': {
    transform: transformations.removeHtmlTags,
  },
  'text-to-csv-converter': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.textToCsv(text, {
        inputDelimiter: opts?.inputDelimiter as string,
        outputDelimiter: opts?.outputDelimiter as string,
      }),
    options: [
      { id: 'inputDelimiter', label: 'Input delimiter', type: 'text', defaultValue: '\t' },
      { id: 'outputDelimiter', label: 'Output delimiter', type: 'text', defaultValue: ',' },
    ],
  },

  // Technical Tools
  'url-encoder': {
    transform: transformations.urlEncode,
  },
  'url-decoder': {
    transform: transformations.urlDecode,
  },
  'html-entity-encoder': {
    transform: transformations.htmlEntityEncode,
  },
  'html-entity-decoder': {
    transform: transformations.htmlEntityDecode,
  },
  'base64-encoder': {
    transform: transformations.base64Encode,
  },
  'base64-decoder': {
    transform: transformations.base64Decode,
  },
  'md5-hash-generator': {
    transform: async (text: string) => transformations.md5Hash(text),
  },
  'sha256-hash-generator': {
    transform: async (text: string) => transformations.sha256Hash(text),
  },
  'json-formatter': {
    transform: (text: string, opts?: Record<string, unknown>) => {
      const result = transformations.formatJson(text, opts?.spaces as number);
      return result.error ? `Error: ${result.error}\n\n${result.formatted}` : result.formatted;
    },
    options: [
      { id: 'spaces', label: 'Indent spaces', type: 'number', defaultValue: 2 },
    ],
  },
  'xml-formatter': {
    transform: transformations.formatXml,
  },
  'css-minifier': {
    transform: transformations.minifyCss,
  },
  'javascript-minifier': {
    transform: transformations.minifyJs,
  },

  // Creative Generators
  'bubble-text-generator': {
    transform: transformations.toBubbleText,
  },
  'square-text-generator': {
    transform: transformations.toSquareText,
  },
  'currency-text-generator': {
    transform: transformations.toCurrencyText,
  },
  'zalgo-text-generator': {
    transform: (text: string, opts?: Record<string, unknown>) =>
      transformations.toZalgo(text, opts?.intensity as 'low' | 'medium' | 'high'),
    options: [
      {
        id: 'intensity',
        label: 'Intensity',
        type: 'select',
        defaultValue: 'medium',
        options: [
          { value: 'low', label: 'Low' },
          { value: 'medium', label: 'Medium' },
          { value: 'high', label: 'High' },
        ],
      },
    ],
  },
  'vaporwave-text-generator': {
    transform: transformations.toVaporwave,
  },
  'braille-text-converter': {
    transform: transformations.toBraille,
  },
  'phonetic-alphabet-generator': {
    transform: transformations.toPhoneticAlphabet,
  },
  'text-to-ascii-art': {
    transform: transformations.toAsciiArt,
  },
  'invisible-ink-generator': {
    transform: transformations.toInvisibleInk,
  },
  'glitch-text-generator': {
    transform: transformations.toGlitchText,
  },

  // Analysis & Utility Tools
  'word-counter': {
    transform: (text: string) => {
      const stats = transformations.getTextStats(text);
      return `Words: ${stats.words}
Characters: ${stats.characters}
Characters (no spaces): ${stats.charactersNoSpaces}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}
Lines: ${stats.lines}
Reading time: ${stats.readingTime}
Speaking time: ${stats.speakingTime}`;
    },
    isAnalysisTool: true,
  },
  'line-counter-tool': {
    transform: (text: string) => {
      const stats = transformations.getLineStats(text);
      return `Total lines: ${stats.total}
Non-empty lines: ${stats.nonEmpty}
Empty lines: ${stats.empty}
Longest line: ${stats.longestLine} characters
Shortest line: ${stats.shortestLine} characters
Average line length: ${stats.averageLength} characters`;
    },
    isAnalysisTool: true,
  },
  'readability-score-checker': {
    transform: (text: string) => {
      const score = transformations.calculateReadability(text);
      return `Flesch Reading Ease: ${score.fleschReadingEase}
Flesch-Kincaid Grade Level: ${score.fleschKincaid}
Grade Level: ${score.gradeLevel}
Reading Level: ${score.readingLevel}

Interpretation:
- 90-100: Very Easy (5th grade)
- 80-89: Easy (6th grade)
- 70-79: Fairly Easy (7th grade)
- 60-69: Standard (8th-9th grade)
- 50-59: Fairly Difficult (10th-12th grade)
- 30-49: Difficult (College)
- 0-29: Very Difficult (College Graduate)`;
    },
    isAnalysisTool: true,
  },
  'keyword-density-checker': {
    transform: (text: string, opts?: Record<string, unknown>) => {
      const density = transformations.analyzeKeywordDensity(text, opts?.minLength as number);
      const top20 = density.slice(0, 20);
      return `Top Keywords:\n\n${top20
        .map((item, i) => `${i + 1}. "${item.word}" - ${item.count} occurrences (${item.density}%)`)
        .join('\n')}`;
    },
    options: [
      { id: 'minLength', label: 'Min word length', type: 'number', defaultValue: 3 },
    ],
    isAnalysisTool: true,
  },
  'text-difference-checker': {
    transform: (text: string) => {
      // This tool needs two inputs, so we'll split by a delimiter
      const parts = text.split('---COMPARE---');
      if (parts.length < 2) {
        return 'Please enter two texts separated by "---COMPARE---" on its own line.\n\nExample:\nFirst text here\n---COMPARE---\nSecond text here';
      }
      const diff = transformations.diffText(parts[0].trim(), parts[1].trim());
      return diff
        .map((d) => {
          if (d.type === 'equal') return `  ${d.value}`;
          if (d.type === 'add') return `+ ${d.value}`;
          return `- ${d.value}`;
        })
        .join('\n');
    },
    isAnalysisTool: true,
  },
  'remove-punctuation-tool': {
    transform: transformations.removePunctuation,
  },
  'find-and-replace-tool': {
    transform: (text: string, opts?: Record<string, unknown>) => {
      const find = opts?.find as string;
      const replace = opts?.replace as string;
      if (!find) return text;
      return transformations.findAndReplace(text, find, replace || '', {
        caseSensitive: opts?.caseSensitive as boolean,
        regex: opts?.regex as boolean,
      });
    },
    options: [
      { id: 'find', label: 'Find', type: 'text', defaultValue: '' },
      { id: 'replace', label: 'Replace with', type: 'text', defaultValue: '' },
      { id: 'caseSensitive', label: 'Case sensitive', type: 'checkbox', defaultValue: true },
      { id: 'regex', label: 'Use regex', type: 'checkbox', defaultValue: false },
    ],
  },
  'text-extractor-regex': {
    transform: (text: string, opts?: Record<string, unknown>) => {
      const pattern = opts?.pattern as string;
      if (!pattern) return 'Enter a regex pattern in the options above';
      const matches = transformations.extractWithRegex(text, pattern, 'g');
      return matches.length > 0 ? matches.join('\n') : 'No matches found';
    },
    options: [
      { id: 'pattern', label: 'Regex pattern', type: 'text', defaultValue: '' },
    ],
  },
  'list-randomizer': {
    transform: transformations.randomizeList,
  },
  'text-to-slug-converter': {
    transform: transformations.textToSlug,
  },
};

export default function ToolClient({ tool }: ToolClientProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const config = toolConfigs[tool.slug] || { transform: (text: string) => text };

  const [optionValues, setOptionValues] = useState<Record<string, unknown>>(() => {
    const defaults: Record<string, unknown> = {};
    config.options?.forEach((opt) => {
      defaults[opt.id] = opt.defaultValue;
    });
    return defaults;
  });

  const processText = useCallback(async (text: string, options: Record<string, unknown>) => {
    if (!text.trim()) {
      setOutput('');
      return;
    }

    setIsProcessing(true);
    try {
      const result = await config.transform(text, options);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    setIsProcessing(false);
  }, [config]);

  // Auto-transform on input change
  useEffect(() => {
    processText(input, optionValues);
  }, [input, optionValues, processText]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = output;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [output]);

  const handleClear = useCallback(() => {
    setInput('');
    setOutput('');
  }, []);

  const handleOptionChange = useCallback((id: string, value: unknown) => {
    setOptionValues((prev) => ({ ...prev, [id]: value }));
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h1>
        <p className="text-gray-600">{tool.shortDescription}</p>
      </div>

      {/* Options */}
      {config.options && config.options.length > 0 && (
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-4">
          {config.options.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <label htmlFor={option.id} className="text-sm text-gray-600">
                {option.label}:
              </label>
              {option.type === 'select' && (
                <select
                  id={option.id}
                  value={optionValues[option.id] as string}
                  onChange={(e) => handleOptionChange(option.id, e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {option.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}
              {option.type === 'checkbox' && (
                <input
                  type="checkbox"
                  id={option.id}
                  checked={optionValues[option.id] as boolean}
                  onChange={(e) => handleOptionChange(option.id, e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              )}
              {option.type === 'text' && (
                <input
                  type="text"
                  id={option.id}
                  value={optionValues[option.id] as string}
                  onChange={(e) => handleOptionChange(option.id, e.target.value)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 w-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
              {option.type === 'number' && (
                <input
                  type="number"
                  id={option.id}
                  value={optionValues[option.id] as number}
                  onChange={(e) => handleOptionChange(option.id, parseInt(e.target.value) || 0)}
                  className="text-sm border border-gray-300 rounded px-2 py-1 w-20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Interface */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="input" className="text-sm font-medium text-gray-700">
                Input
              </label>
              <span className="text-xs text-gray-500">
                {input.length} characters
              </span>
            </div>
            <textarea
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste or type your text here..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              aria-label="Text input"
            />
          </div>

          {/* Output */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="output" className="text-sm font-medium text-gray-700">
                {config.isAnalysisTool ? 'Analysis' : 'Output'}
                {isProcessing && (
                  <span className="ml-2 text-blue-600">Processing...</span>
                )}
              </label>
              <span className="text-xs text-gray-500">
                {output.length} characters
              </span>
            </div>
            <textarea
              id="output"
              value={output}
              readOnly
              placeholder={config.isAnalysisTool ? 'Analysis results will appear here...' : 'Your converted text will appear here...'}
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none bg-gray-50 font-mono text-sm"
              aria-label="Output"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() => processText(input, optionValues)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {config.isAnalysisTool ? 'Analyze' : 'Convert'}
          </button>
          <button
            onClick={handleCopy}
            disabled={!output}
            className={`px-6 py-2 border rounded-lg font-medium transition-colors ${
              output
                ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                : 'border-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {copied ? 'Copied!' : 'Copy Result'}
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
