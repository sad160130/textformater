'use client';

import { useState, useCallback } from 'react';

interface ToolInterfaceProps {
  title: string;
  description: string;
  transform: (input: string, options?: Record<string, unknown>) => string | Promise<string>;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
  options?: ToolOption[];
  showCharCount?: boolean;
}

interface ToolOption {
  id: string;
  label: string;
  type: 'select' | 'checkbox' | 'text' | 'number';
  defaultValue: string | boolean | number;
  options?: { value: string; label: string }[];
}

export default function ToolInterface({
  title,
  description,
  transform,
  inputPlaceholder = 'Paste or type your text here...',
  outputPlaceholder = 'Your converted text will appear here...',
  options = [],
  showCharCount = true,
}: ToolInterfaceProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [optionValues, setOptionValues] = useState<Record<string, unknown>>(() => {
    const defaults: Record<string, unknown> = {};
    options.forEach((opt) => {
      defaults[opt.id] = opt.defaultValue;
    });
    return defaults;
  });

  const handleTransform = useCallback(async () => {
    if (!input.trim()) {
      setOutput('');
      return;
    }
    setIsProcessing(true);
    try {
      const result = await transform(input, optionValues);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    setIsProcessing(false);
  }, [input, transform, optionValues]);

  const handleInputChange = useCallback(async (value: string) => {
    setInput(value);
    // Auto-transform on input change
    if (value.trim()) {
      setIsProcessing(true);
      try {
        const result = await transform(value, optionValues);
        setOutput(result);
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
      setIsProcessing(false);
    } else {
      setOutput('');
    }
  }, [transform, optionValues]);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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

  const handleOptionChange = useCallback(async (id: string, value: unknown) => {
    const next = { ...optionValues, [id]: value };
    setOptionValues(next);
    // Re-transform with new options
    if (input.trim()) {
      try {
        const result = await transform(input, next);
        setOutput(result);
      } catch {
        // Ignore errors during option change
      }
    }
  }, [input, transform, optionValues]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Options */}
      {options.length > 0 && (
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-4">
          {options.map((option) => (
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
                  className="text-sm border border-gray-300 rounded px-2 py-1 w-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              {showCharCount && (
                <span className="text-xs text-gray-500">
                  {input.length} characters
                </span>
              )}
            </div>
            <textarea
              id="input"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={inputPlaceholder}
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              aria-label="Text input"
            />
          </div>

          {/* Output */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="output" className="text-sm font-medium text-gray-700">
                Output
                {isProcessing && (
                  <span className="ml-2 text-blue-600">Processing...</span>
                )}
              </label>
              {showCharCount && (
                <span className="text-xs text-gray-500">
                  {output.length} characters
                </span>
              )}
            </div>
            <textarea
              id="output"
              value={output}
              readOnly
              placeholder={outputPlaceholder}
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none bg-gray-50 font-mono text-sm"
              aria-label="Converted output"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={handleTransform}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Convert
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
