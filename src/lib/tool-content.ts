// Additional content for tool pages - SEO descriptions, FAQs, examples

interface ToolContentData {
  longDescription?: string;
  examples?: Array<{
    title: string;
    input: string;
    output: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  useCases?: {
    writers?: string;
    developers?: string;
    students?: string;
    marketers?: string;
  };
}

export const toolContent: Record<string, ToolContentData> = {
  'title-case-converter': {
    longDescription: `
      <p>The Title Case Converter transforms your text so that the first letter of each major word is capitalized, following standard title case rules. This is the format commonly used for headlines, book titles, article titles, and headings in professional writing.</p>
      <p>Our converter intelligently handles minor words like "a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", and "in" — keeping them lowercase unless they appear at the beginning of the title. This follows standard English title capitalization conventions used by major style guides.</p>
      <p>Whether you're formatting blog post titles, email subject lines, presentation headings, or book chapters, this tool ensures consistent, professional-looking results every time. The conversion happens instantly as you type, with no waiting for server responses.</p>
    `,
    examples: [
      {
        title: 'Basic headline',
        input: 'the quick brown fox jumps over the lazy dog',
        output: 'The Quick Brown Fox Jumps over the Lazy Dog',
      },
      {
        title: 'Article title',
        input: 'how to write better code in javascript',
        output: 'How to Write Better Code in Javascript',
      },
    ],
    faqs: [
      {
        question: 'What words stay lowercase in title case?',
        answer: 'Minor words like articles (a, an, the), conjunctions (and, but, or, for, nor), and prepositions (on, at, to, by, in) typically stay lowercase unless they are the first word of the title.',
      },
      {
        question: 'Which style guide does this follow?',
        answer: 'Our title case converter follows general title case conventions that align with most major style guides including AP, Chicago, and APA. For highly specific style requirements, you may need to make minor manual adjustments.',
      },
      {
        question: 'Does it handle acronyms correctly?',
        answer: 'The converter capitalizes the first letter of each word. For acronyms that should remain all-caps (like NASA or HTML), you may need to manually adjust them after conversion.',
      },
    ],
    useCases: {
      writers: 'Format article headlines, chapter titles, and blog post titles professionally.',
      developers: 'Generate properly formatted titles for documentation and README files.',
      students: 'Format essay titles, paper headings, and presentation slides correctly.',
      marketers: 'Create consistent, professional-looking email subject lines and ad headlines.',
    },
  },

  'json-formatter': {
    longDescription: `
      <p>The JSON Formatter is an essential tool for developers working with JSON data. It takes minified or poorly formatted JSON and transforms it into a clean, readable structure with proper indentation. This makes it much easier to read, debug, and understand complex JSON objects.</p>
      <p>Beyond formatting, the tool validates your JSON syntax and highlights errors if the input is malformed. This helps you quickly identify issues like missing commas, unbalanced brackets, or invalid characters in your JSON data.</p>
      <p>The formatter supports customizable indentation (2 spaces, 4 spaces, or tabs) and works with JSON of any size. All processing happens in your browser, so your API responses, configuration files, and sensitive data never leave your device.</p>
    `,
    examples: [
      {
        title: 'API Response',
        input: '{"name":"John","age":30,"city":"New York"}',
        output: `{
  "name": "John",
  "age": 30,
  "city": "New York"
}`,
      },
    ],
    faqs: [
      {
        question: 'Will this tool fix invalid JSON?',
        answer: 'The formatter validates JSON and will show you error messages if your JSON is invalid. It cannot automatically fix syntax errors, but it will help you identify where the problem is.',
      },
      {
        question: 'Is there a size limit for JSON?',
        answer: 'Since all processing happens in your browser, the limit depends on your device\'s memory. Most modern devices can handle JSON files of several megabytes without issues.',
      },
      {
        question: 'Can I minify JSON instead of formatting it?',
        answer: 'This tool is specifically for formatting/beautifying JSON. For minification, we recommend using our CSS/JS minifier tools which follow similar principles.',
      },
    ],
    useCases: {
      writers: 'Format JSON examples for technical documentation and tutorials.',
      developers: 'Debug API responses, format configuration files, and validate JSON syntax.',
      students: 'Learn JSON structure and format sample data for programming assignments.',
      marketers: 'Format tracking data and analytics exports for easier analysis.',
    },
  },

  'word-counter': {
    longDescription: `
      <p>The Word Counter provides comprehensive statistics about your text, including word count, character count (with and without spaces), sentence count, paragraph count, and line count. It also estimates reading time and speaking time based on average reading and speaking speeds.</p>
      <p>This tool is invaluable for writers who need to meet specific word count requirements, students working on essays with length limits, content creators optimizing for social media character limits, and anyone who needs quick text statistics.</p>
      <p>The counter updates in real-time as you type or paste text, giving you instant feedback. All calculations happen in your browser, ensuring your writing remains private.</p>
    `,
    examples: [
      {
        title: 'Sample Analysis',
        input: 'Hello world. This is a sample text.',
        output: `Words: 7
Characters: 35
Characters (no spaces): 29
Sentences: 2
Paragraphs: 1
Lines: 1
Reading time: < 1 min
Speaking time: < 1 min`,
      },
    ],
    faqs: [
      {
        question: 'How is reading time calculated?',
        answer: 'Reading time is calculated based on an average reading speed of 225 words per minute, which is typical for adult readers reading non-technical content.',
      },
      {
        question: 'How accurate is the sentence count?',
        answer: 'Sentence count is determined by counting periods, exclamation marks, and question marks. It may not be perfectly accurate for text with abbreviations (Mr., Dr., etc.) or decimal numbers.',
      },
      {
        question: 'Does it count words in different languages?',
        answer: 'Yes, the word counter works with any language that uses spaces to separate words. For languages without word separators (like Chinese or Japanese), character count is more relevant.',
      },
    ],
    useCases: {
      writers: 'Track article length, ensure you meet word count requirements for submissions.',
      developers: 'Count characters for database field limits and API payload sizes.',
      students: 'Monitor essay length and ensure you meet assignment word count requirements.',
      marketers: 'Optimize content length for SEO and social media character limits.',
    },
  },

  'remove-line-breaks': {
    longDescription: `
      <p>The Remove Line Breaks tool eliminates newline characters from your text, joining multiple lines into continuous paragraphs. This is particularly useful when copying text from PDFs, emails, or other sources that introduce unwanted line breaks.</p>
      <p>You can customize the separator used to join lines - by default, it uses a single space, but you can change it to any character or string. This flexibility makes it useful for various text processing tasks.</p>
      <p>The tool preserves your text content while removing only the line break characters, making it ideal for reformatting content for different uses without losing any information.</p>
    `,
    examples: [
      {
        title: 'PDF text cleanup',
        input: `This text was
copied from a
PDF document.`,
        output: 'This text was copied from a PDF document.',
      },
    ],
    faqs: [
      {
        question: 'What\'s the difference between Remove Line Breaks and Remove Empty Lines?',
        answer: 'Remove Line Breaks joins all lines into one continuous text. Remove Empty Lines keeps the line structure but removes only blank lines (lines with no content).',
      },
      {
        question: 'Can I use a custom separator instead of spaces?',
        answer: 'Yes! You can specify any separator in the options. Common choices include comma, semicolon, or even HTML tags like <br> for web content.',
      },
      {
        question: 'Does this preserve paragraph breaks?',
        answer: 'By default, all line breaks are removed. If you want to preserve paragraph breaks (double line breaks), consider using the Text to Single Line tool with appropriate options.',
      },
    ],
    useCases: {
      writers: 'Clean up text copied from PDFs that has unwanted line breaks mid-sentence.',
      developers: 'Prepare text data for single-line input fields or database entries.',
      students: 'Reformat research notes and quotes copied from various sources.',
      marketers: 'Clean up copy from design files or presentations for web use.',
    },
  },

  'base64-encoder': {
    longDescription: `
      <p>The Base64 Encoder converts text into Base64 format, a binary-to-text encoding scheme that represents binary data using only ASCII characters. Base64 is widely used for embedding data in URLs, emails, and web pages.</p>
      <p>Common use cases include encoding authentication credentials, embedding images in HTML/CSS, passing complex data through URLs, and storing binary data in text-only formats like JSON or XML.</p>
      <p>Our encoder handles Unicode text correctly, first converting to UTF-8 before Base64 encoding. This ensures that characters from any language are properly encoded and can be decoded back to the original text.</p>
    `,
    examples: [
      {
        title: 'Simple text',
        input: 'Hello, World!',
        output: 'SGVsbG8sIFdvcmxkIQ==',
      },
    ],
    faqs: [
      {
        question: 'What is Base64 encoding used for?',
        answer: 'Base64 is used to encode binary data into ASCII text, making it safe to transmit through text-only channels like email, URLs, and JSON. It\'s commonly used for authentication headers, data URIs, and API payloads.',
      },
      {
        question: 'Does Base64 encrypt my data?',
        answer: 'No, Base64 is not encryption. It\'s an encoding scheme that can be easily decoded. Never use Base64 alone for sensitive data - always use proper encryption.',
      },
      {
        question: 'Why does Base64 make data larger?',
        answer: 'Base64 encoding increases data size by approximately 33% because it represents every 3 bytes of input as 4 ASCII characters. This is a trade-off for the ability to safely transmit binary data as text.',
      },
    ],
    useCases: {
      writers: 'Embed small images directly in HTML documents as data URIs.',
      developers: 'Encode authentication tokens, API payloads, and binary data for transmission.',
      students: 'Learn about encoding schemes and data representation in computer science.',
      marketers: 'Create tracking parameters and encoded links for campaign URLs.',
    },
  },
};

// Default content for tools without specific content
export function getDefaultToolContent(toolName: string): ToolContentData {
  return {
    useCases: {
      writers: 'Format and transform text for articles, blog posts, and content creation.',
      developers: 'Process and manipulate text data for applications and scripts.',
      students: 'Prepare text for assignments, format research notes, and process data.',
      marketers: 'Create compelling copy and optimize text for various platforms.',
    },
    faqs: [
      {
        question: `What is the ${toolName}?`,
        answer: `The ${toolName} is a free online tool that helps you transform and process text quickly and easily.`,
      },
      {
        question: 'Is this tool free to use?',
        answer: 'Yes, all tools on textformater.online are completely free to use with no registration required.',
      },
      {
        question: 'Is my text data safe?',
        answer: 'Absolutely. All text processing happens directly in your browser. Your text is never sent to any server, ensuring complete privacy.',
      },
    ],
  };
}
