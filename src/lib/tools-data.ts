// Tool and Category Data Configuration for textformater.online

export interface Tool {
  slug: string;
  name: string;
  shortDescription: string;
  category: CategorySlug;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export type CategorySlug =
  | 'case-manipulation'
  | 'data-formatting'
  | 'technical-tools'
  | 'creative-generators'
  | 'analysis-utilities';

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const categories: Category[] = [
  {
    slug: 'case-manipulation',
    name: 'Case Manipulation Tools',
    shortName: 'Case Tools',
    description: 'Transform your text case with powerful converters. Convert to title case, sentence case, alternating case, and more. Perfect for writers, editors, and content creators who need consistent text formatting.',
    metaTitle: 'Case Manipulation Tools - Text Case Converters Online | textformater.online',
    metaDescription: 'Free online case manipulation tools. Convert text to title case, sentence case, uppercase, lowercase, alternating case and more. Fast, browser-based text transformers.',
  },
  {
    slug: 'data-formatting',
    name: 'Data Formatting Tools',
    shortName: 'Data Formatting',
    description: 'Clean and format your text data efficiently. Remove empty lines, line breaks, duplicates, whitespace, and HTML tags. Sort lines, add line numbers, and convert text to different formats.',
    metaTitle: 'Data Formatting Tools - Clean & Format Text Online | textformater.online',
    metaDescription: 'Free online data formatting tools. Remove empty lines, duplicates, whitespace, HTML tags. Sort text, add line numbers, convert to CSV. Browser-based text cleaning utilities.',
  },
  {
    slug: 'technical-tools',
    name: 'Technical Tools',
    shortName: 'Technical',
    description: 'Developer-focused tools for encoding, decoding, hashing, and formatting code. URL encode/decode, Base64, HTML entities, JSON/XML formatting, CSS/JS minification, and hash generation.',
    metaTitle: 'Technical Tools - Encoding, Hashing & Formatting | textformater.online',
    metaDescription: 'Free online technical tools for developers. URL encoder/decoder, Base64, HTML entities, MD5/SHA256 hash generators, JSON/XML formatters, CSS/JS minifiers.',
  },
  {
    slug: 'creative-generators',
    name: 'Creative & Unique Generators',
    shortName: 'Creative',
    description: 'Generate unique text styles for social media and creative projects. Create bubble text, zalgo text, vaporwave aesthetic, ASCII art, invisible characters, glitch effects, and more.',
    metaTitle: 'Creative Text Generators - Unique Text Styles Online | textformater.online',
    metaDescription: 'Free creative text generators. Create bubble text, zalgo, vaporwave, ASCII art, glitch text, braille converter and more. Stand out on social media with unique text styles.',
  },
  {
    slug: 'analysis-utilities',
    name: 'Analysis & Utility Tools',
    shortName: 'Analysis',
    description: 'Analyze and manipulate text with powerful utilities. Count words and characters, check readability scores, analyze keyword density, find differences, extract patterns with regex, and more.',
    metaTitle: 'Text Analysis & Utility Tools Online | textformater.online',
    metaDescription: 'Free text analysis tools. Word counter, readability checker, keyword density analyzer, text diff checker, regex extractor, find and replace. Comprehensive text utilities.',
  },
];

export const tools: Tool[] = [
  // ===== CASE MANIPULATION TOOLS =====
  {
    slug: 'title-case-converter',
    name: 'Title Case Converter',
    shortDescription: 'Convert text to Title Case where each word starts with a capital letter.',
    category: 'case-manipulation',
    keywords: ['title case', 'capitalize words', 'headline case', 'text capitalization'],
    metaTitle: 'Title Case Converter - Capitalize Each Word Online | textformater.online',
    metaDescription: 'Free online title case converter. Transform your text to title case instantly where each word starts with a capital letter. Perfect for headlines, titles, and headings.',
  },
  {
    slug: 'sentence-case-converter',
    name: 'Sentence Case Converter',
    shortDescription: 'Convert text to sentence case with proper capitalization at the start of sentences.',
    category: 'case-manipulation',
    keywords: ['sentence case', 'capitalize sentences', 'text formatting', 'proper capitalization'],
    metaTitle: 'Sentence Case Converter - Proper Sentence Capitalization | textformater.online',
    metaDescription: 'Free online sentence case converter. Automatically capitalize the first letter of each sentence. Perfect for fixing text with incorrect capitalization.',
  },
  {
    slug: 'alternating-case-generator',
    name: 'Alternating Case Generator',
    shortDescription: 'Generate aLtErNaTiNg CaSe text for memes and social media.',
    category: 'case-manipulation',
    keywords: ['alternating case', 'spongebob text', 'mocking text', 'mixed case'],
    metaTitle: 'Alternating Case Generator - aLtErNaTiNg TeXt | textformater.online',
    metaDescription: 'Free alternating case generator. Create aLtErNaTiNg CaSe text instantly. Perfect for memes, social media posts, and the spongebob mocking meme format.',
  },
  {
    slug: 'reverse-text-generator',
    name: 'Reverse Text Generator',
    shortDescription: 'Reverse your text character by character or word by word.',
    category: 'case-manipulation',
    keywords: ['reverse text', 'backwards text', 'mirror text', 'flip text'],
    metaTitle: 'Reverse Text Generator - Flip Text Backwards Online | textformater.online',
    metaDescription: 'Free reverse text generator. Flip your text backwards character by character or word by word. Create mirror text for creative projects and fun.',
  },
  {
    slug: 'upside-down-text-generator',
    name: 'Upside Down Text Generator',
    shortDescription: 'Flip your text upside down using special Unicode characters.',
    category: 'case-manipulation',
    keywords: ['upside down text', 'flipped text', 'inverted text', 'unicode flip'],
    metaTitle: 'Upside Down Text Generator - Flip Text ʇxǝʇ | textformater.online',
    metaDescription: 'Free upside down text generator. Flip your text upside down using Unicode characters. Copy and paste ǝʌᴉʇɐǝɹɔ flipped text for social media.',
  },
  {
    slug: 'small-caps-generator',
    name: 'Small Caps Generator',
    shortDescription: 'Convert text to sᴍᴀʟʟ ᴄᴀᴘs using Unicode characters.',
    category: 'case-manipulation',
    keywords: ['small caps', 'small capitals', 'unicode small caps', 'fancy text'],
    metaTitle: 'Small Caps Generator - ˢᵐᵃˡˡ ᶜᵃᵖˢ Text | textformater.online',
    metaDescription: 'Free small caps generator. Convert your text to sᴍᴀʟʟ ᴄᴀᴘs using Unicode characters. Perfect for stylish social media bios and usernames.',
  },
  {
    slug: 'strikethrough-text-generator',
    name: 'Strikethrough Text Generator',
    shortDescription: 'Create s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ text using Unicode combining characters.',
    category: 'case-manipulation',
    keywords: ['strikethrough text', 'crossed out text', 'strike text', 'deleted text'],
    metaTitle: 'Strikethrough Text Generator - S̶t̶r̶i̶k̶e̶ Text | textformater.online',
    metaDescription: 'Free strikethrough text generator. Create s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ text that works on social media, Discord, and more. Cross out text instantly.',
  },
  {
    slug: 'underline-text-generator',
    name: 'Underline Text Generator',
    shortDescription: 'Create u̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ text using Unicode combining characters.',
    category: 'case-manipulation',
    keywords: ['underline text', 'underlined text', 'unicode underline', 'text decoration'],
    metaTitle: 'Underline Text Generator - U̲n̲d̲e̲r̲l̲i̲n̲e̲ Text | textformater.online',
    metaDescription: 'Free underline text generator. Create u̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ text using Unicode that works everywhere. Perfect for emphasis on social media platforms.',
  },
  {
    slug: 'bold-text-generator-unicode',
    name: 'Bold Text Generator (Unicode)',
    shortDescription: 'Create 𝗯𝗼𝗹𝗱 text using Unicode mathematical characters.',
    category: 'case-manipulation',
    keywords: ['bold text', 'unicode bold', 'bold font', 'social media bold'],
    metaTitle: 'Bold Text Generator - 𝗕𝗼𝗹𝗱 Unicode Text | textformater.online',
    metaDescription: 'Free bold text generator using Unicode. Create 𝗯𝗼𝗹𝗱 text that works on Twitter, Instagram, Facebook and anywhere. No special formatting needed.',
  },
  {
    slug: 'italic-text-generator-unicode',
    name: 'Italic Text Generator (Unicode)',
    shortDescription: 'Create 𝘪𝘵𝘢𝘭𝘪𝘤 text using Unicode mathematical characters.',
    category: 'case-manipulation',
    keywords: ['italic text', 'unicode italic', 'slanted text', 'cursive text'],
    metaTitle: 'Italic Text Generator - 𝘐𝘵𝘢𝘭𝘪𝘤 Unicode Text | textformater.online',
    metaDescription: 'Free italic text generator using Unicode. Create 𝘪𝘵𝘢𝘭𝘪𝘤 text that works on all social media platforms. Copy and paste stylish slanted text.',
  },

  // ===== DATA FORMATTING TOOLS =====
  {
    slug: 'remove-empty-lines',
    name: 'Remove Empty Lines',
    shortDescription: 'Remove all blank and empty lines from your text.',
    category: 'data-formatting',
    keywords: ['remove empty lines', 'delete blank lines', 'clean text', 'remove whitespace lines'],
    metaTitle: 'Remove Empty Lines Tool - Delete Blank Lines Online | textformater.online',
    metaDescription: 'Free tool to remove empty lines from text. Delete all blank lines instantly. Clean up your text data by removing unnecessary whitespace lines.',
  },
  {
    slug: 'remove-line-breaks',
    name: 'Remove Line Breaks',
    shortDescription: 'Remove all line breaks and join text into continuous paragraphs.',
    category: 'data-formatting',
    keywords: ['remove line breaks', 'remove newlines', 'join lines', 'merge lines'],
    metaTitle: 'Remove Line Breaks Tool - Join Lines Online | textformater.online',
    metaDescription: 'Free tool to remove line breaks from text. Convert multi-line text into single paragraphs. Perfect for cleaning up copied text from PDFs and documents.',
  },
  {
    slug: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    shortDescription: 'Remove duplicate lines from your text keeping only unique entries.',
    category: 'data-formatting',
    keywords: ['remove duplicates', 'unique lines', 'dedupe text', 'delete duplicate lines'],
    metaTitle: 'Remove Duplicate Lines - Dedupe Text Online | textformater.online',
    metaDescription: 'Free tool to remove duplicate lines from text. Keep only unique lines and eliminate repetition. Perfect for cleaning up lists and data.',
  },
  {
    slug: 'text-to-single-line',
    name: 'Text to Single Line',
    shortDescription: 'Convert multi-line text to a single continuous line.',
    category: 'data-formatting',
    keywords: ['single line', 'one line', 'flatten text', 'merge text'],
    metaTitle: 'Text to Single Line Converter - Flatten Text | textformater.online',
    metaDescription: 'Free tool to convert text to single line. Flatten multi-line text into one continuous line with customizable separator. Clean up text formatting.',
  },
  {
    slug: 'remove-whitespace',
    name: 'Remove Whitespace Tool',
    shortDescription: 'Remove extra spaces, tabs, and whitespace from text.',
    category: 'data-formatting',
    keywords: ['remove whitespace', 'trim spaces', 'remove extra spaces', 'clean whitespace'],
    metaTitle: 'Remove Whitespace Tool - Trim Extra Spaces | textformater.online',
    metaDescription: 'Free tool to remove extra whitespace from text. Trim leading/trailing spaces, remove tabs, and clean up formatting. Instant whitespace cleaner.',
  },
  {
    slug: 'text-deduping-tool',
    name: 'Text Deduping Tool',
    shortDescription: 'Advanced deduplication with case-insensitive and fuzzy matching options.',
    category: 'data-formatting',
    keywords: ['dedupe text', 'deduplication', 'remove duplicates', 'unique text'],
    metaTitle: 'Text Deduping Tool - Advanced Deduplication | textformater.online',
    metaDescription: 'Free advanced text deduping tool. Remove duplicates with case-insensitive matching and whitespace normalization. Clean up lists and data efficiently.',
  },
  {
    slug: 'sort-text-lines',
    name: 'Sort Text Lines',
    shortDescription: 'Sort lines alphabetically, numerically, or by length.',
    category: 'data-formatting',
    keywords: ['sort text', 'sort lines', 'alphabetical sort', 'organize text'],
    metaTitle: 'Sort Text Lines - Alphabetical & Numeric Sorting | textformater.online',
    metaDescription: 'Free tool to sort text lines. Sort alphabetically, numerically, by length, or reverse order. Organize your lists and data instantly.',
  },
  {
    slug: 'add-line-numbers',
    name: 'Add Line Numbers',
    shortDescription: 'Add sequential line numbers to each line of text.',
    category: 'data-formatting',
    keywords: ['line numbers', 'number lines', 'add numbers', 'enumerate lines'],
    metaTitle: 'Add Line Numbers Tool - Number Text Lines | textformater.online',
    metaDescription: 'Free tool to add line numbers to text. Automatically number each line with customizable format. Perfect for code, lists, and documentation.',
  },
  {
    slug: 'remove-html-tags',
    name: 'Remove HTML Tags',
    shortDescription: 'Strip all HTML tags from text leaving only plain content.',
    category: 'data-formatting',
    keywords: ['remove html', 'strip html tags', 'html to text', 'clean html'],
    metaTitle: 'Remove HTML Tags - Strip HTML to Plain Text | textformater.online',
    metaDescription: 'Free tool to remove HTML tags from text. Convert HTML to plain text by stripping all markup. Extract clean text content from HTML code.',
  },
  {
    slug: 'text-to-csv-converter',
    name: 'Text to CSV Converter',
    shortDescription: 'Convert plain text to CSV format with custom delimiters.',
    category: 'data-formatting',
    keywords: ['text to csv', 'csv converter', 'convert to csv', 'text to spreadsheet'],
    metaTitle: 'Text to CSV Converter - Create CSV Files | textformater.online',
    metaDescription: 'Free text to CSV converter. Transform plain text into CSV format with customizable delimiters. Perfect for importing data into spreadsheets.',
  },

  // ===== TECHNICAL TOOLS =====
  {
    slug: 'url-encoder',
    name: 'URL Encoder',
    shortDescription: 'Encode text for safe use in URLs and query strings.',
    category: 'technical-tools',
    keywords: ['url encode', 'percent encode', 'encode url', 'uri encoder'],
    metaTitle: 'URL Encoder - Percent Encode Text Online | textformater.online',
    metaDescription: 'Free URL encoder tool. Convert text to URL-safe format using percent encoding. Encode special characters for safe use in URLs and query strings.',
  },
  {
    slug: 'url-decoder',
    name: 'URL Decoder',
    shortDescription: 'Decode URL-encoded text back to readable format.',
    category: 'technical-tools',
    keywords: ['url decode', 'percent decode', 'decode url', 'uri decoder'],
    metaTitle: 'URL Decoder - Decode Percent Encoded Text | textformater.online',
    metaDescription: 'Free URL decoder tool. Convert percent-encoded URLs back to readable text. Decode %20, %3D and other URL-encoded characters instantly.',
  },
  {
    slug: 'html-entity-encoder',
    name: 'HTML Entity Encoder',
    shortDescription: 'Convert special characters to HTML entities.',
    category: 'technical-tools',
    keywords: ['html encode', 'html entities', 'escape html', 'html special chars'],
    metaTitle: 'HTML Entity Encoder - Escape HTML Characters | textformater.online',
    metaDescription: 'Free HTML entity encoder. Convert special characters like <, >, & to HTML entities. Safely display code and special characters in web pages.',
  },
  {
    slug: 'html-entity-decoder',
    name: 'HTML Entity Decoder',
    shortDescription: 'Convert HTML entities back to regular characters.',
    category: 'technical-tools',
    keywords: ['html decode', 'decode entities', 'unescape html', 'html to text'],
    metaTitle: 'HTML Entity Decoder - Decode HTML Entities | textformater.online',
    metaDescription: 'Free HTML entity decoder. Convert HTML entities like &amp; &lt; &gt; back to regular characters. Decode HTML-encoded text instantly.',
  },
  {
    slug: 'base64-encoder',
    name: 'Base64 Encoder',
    shortDescription: 'Encode text to Base64 format.',
    category: 'technical-tools',
    keywords: ['base64 encode', 'base64 converter', 'text to base64', 'base64 encoding'],
    metaTitle: 'Base64 Encoder - Encode Text to Base64 | textformater.online',
    metaDescription: 'Free Base64 encoder. Convert text to Base64 encoded format instantly. Perfect for encoding data for APIs, emails, and data transfer.',
  },
  {
    slug: 'base64-decoder',
    name: 'Base64 Decoder',
    shortDescription: 'Decode Base64 encoded text back to original format.',
    category: 'technical-tools',
    keywords: ['base64 decode', 'base64 decoder', 'decode base64', 'base64 to text'],
    metaTitle: 'Base64 Decoder - Decode Base64 to Text | textformater.online',
    metaDescription: 'Free Base64 decoder. Convert Base64 encoded strings back to readable text. Decode Base64 data from APIs, emails, and encoded content.',
  },
  {
    slug: 'md5-hash-generator',
    name: 'MD5 Hash Generator',
    shortDescription: 'Generate MD5 hash checksums from text.',
    category: 'technical-tools',
    keywords: ['md5 hash', 'md5 generator', 'md5 checksum', 'hash generator'],
    metaTitle: 'MD5 Hash Generator - Create MD5 Checksums | textformater.online',
    metaDescription: 'Free MD5 hash generator. Create MD5 checksums from any text instantly. Generate 128-bit hash values for verification and comparison.',
  },
  {
    slug: 'sha256-hash-generator',
    name: 'SHA-256 Hash Generator',
    shortDescription: 'Generate secure SHA-256 hash from text.',
    category: 'technical-tools',
    keywords: ['sha256 hash', 'sha256 generator', 'sha256 checksum', 'secure hash'],
    metaTitle: 'SHA-256 Hash Generator - Secure Hash Algorithm | textformater.online',
    metaDescription: 'Free SHA-256 hash generator. Create secure SHA-256 checksums from any text. Generate cryptographic hashes for security and verification.',
  },
  {
    slug: 'json-formatter',
    name: 'JSON Formatter',
    shortDescription: 'Format, beautify, and validate JSON data.',
    category: 'technical-tools',
    keywords: ['json formatter', 'json beautifier', 'format json', 'json pretty print'],
    metaTitle: 'JSON Formatter & Beautifier - Pretty Print JSON | textformater.online',
    metaDescription: 'Free JSON formatter and beautifier. Format, validate, and pretty print JSON data instantly. Clean up minified JSON for easy reading.',
  },
  {
    slug: 'xml-formatter',
    name: 'XML Formatter/Beautifier',
    shortDescription: 'Format and beautify XML documents.',
    category: 'technical-tools',
    keywords: ['xml formatter', 'xml beautifier', 'format xml', 'xml pretty print'],
    metaTitle: 'XML Formatter & Beautifier - Pretty Print XML | textformater.online',
    metaDescription: 'Free XML formatter and beautifier. Format and indent XML documents for better readability. Clean up minified XML instantly.',
  },
  {
    slug: 'css-minifier',
    name: 'CSS Minifier',
    shortDescription: 'Minify CSS code by removing whitespace and comments.',
    category: 'technical-tools',
    keywords: ['css minifier', 'minify css', 'compress css', 'css optimization'],
    metaTitle: 'CSS Minifier - Compress & Optimize CSS | textformater.online',
    metaDescription: 'Free CSS minifier tool. Compress CSS code by removing whitespace, comments, and unnecessary characters. Optimize CSS for faster page loads.',
  },
  {
    slug: 'javascript-minifier',
    name: 'JavaScript Minifier',
    shortDescription: 'Minify JavaScript code for production deployment.',
    category: 'technical-tools',
    keywords: ['js minifier', 'minify javascript', 'compress js', 'javascript optimization'],
    metaTitle: 'JavaScript Minifier - Compress JS Code | textformater.online',
    metaDescription: 'Free JavaScript minifier. Compress and optimize JS code by removing whitespace and comments. Reduce file size for faster loading websites.',
  },

  // ===== CREATIVE GENERATORS =====
  {
    slug: 'bubble-text-generator',
    name: 'Bubble Text Generator',
    shortDescription: 'Convert text to ⓑⓤⓑⓑⓛⓔ letters using Unicode.',
    category: 'creative-generators',
    keywords: ['bubble text', 'circle text', 'enclosed letters', 'bubble font'],
    metaTitle: 'Bubble Text Generator - Ⓑⓤⓑⓑⓛⓔ Letters | textformater.online',
    metaDescription: 'Free bubble text generator. Convert your text to ⓑⓤⓑⓑⓛⓔ letters using Unicode enclosed characters. Stand out on social media with unique text.',
  },
  {
    slug: 'square-text-generator',
    name: 'Square Text Generator',
    shortDescription: 'Convert text to 🅂🅀🅄🄰🅁🄴 letters using Unicode.',
    category: 'creative-generators',
    keywords: ['square text', 'box text', 'squared letters', 'square font'],
    metaTitle: 'Square Text Generator - 🅂🅀🅄🄰🅁🄴 Letters | textformater.online',
    metaDescription: 'Free square text generator. Convert text to 🅂🅀🅄🄰🅁🄴 letters using Unicode squared characters. Create unique text for social media profiles.',
  },
  {
    slug: 'currency-text-generator',
    name: 'Currency Text Generator',
    shortDescription: 'Convert text using currency-like symbols (₵₳$H).',
    category: 'creative-generators',
    keywords: ['currency text', 'money text', 'cash text', 'currency symbols'],
    metaTitle: 'Currency Text Generator - ₵₳$H Style Text | textformater.online',
    metaDescription: 'Free currency text generator. Convert your text using currency symbols like ₵, ₳, $, €. Create money-themed text for social media.',
  },
  {
    slug: 'zalgo-text-generator',
    name: 'Zalgo Text Generator',
    shortDescription: 'Create c̷̢͘r̵̛͝e̸̡͠e̷̛͜p̴̕͠y̵̧̕ glitchy Zalgo text.',
    category: 'creative-generators',
    keywords: ['zalgo text', 'creepy text', 'cursed text', 'glitchy text'],
    metaTitle: 'Zalgo Text Generator - C̷̢r̵e̸e̷p̴y̵ Text | textformater.online',
    metaDescription: 'Free Zalgo text generator. Create c̷̢r̵̛e̸̡e̷̛p̴̕y̵̧ corrupted text with glitch effects. Perfect for Halloween, horror themes, and creepy messages.',
  },
  {
    slug: 'vaporwave-text-generator',
    name: 'Vaporwave Text Generator',
    shortDescription: 'Create ａｅｓｔｈｅｔｉｃ fullwidth vaporwave text.',
    category: 'creative-generators',
    keywords: ['vaporwave text', 'aesthetic text', 'fullwidth text', 'wide text'],
    metaTitle: 'Vaporwave Text Generator - Ａｅｓｔｈｅｔｉｃ Text | textformater.online',
    metaDescription: 'Free vaporwave text generator. Create ａｅｓｔｈｅｔｉｃ fullwidth text for that retro vaporwave look. Perfect for social media and creative projects.',
  },
  {
    slug: 'braille-text-converter',
    name: 'Braille Text Converter',
    shortDescription: 'Convert text to ⠃⠗⠁⠊⠇⠇⠑ Unicode characters.',
    category: 'creative-generators',
    keywords: ['braille converter', 'braille text', 'text to braille', 'braille unicode'],
    metaTitle: 'Braille Text Converter - ⠃⠗⠁⠊⠇⠇⠑ Generator | textformater.online',
    metaDescription: 'Free braille text converter. Transform regular text into ⠃⠗⠁⠊⠇⠇⠑ Unicode patterns. Educational tool for learning braille alphabet.',
  },
  {
    slug: 'phonetic-alphabet-generator',
    name: 'Phonetic Alphabet Generator (NATO)',
    shortDescription: 'Convert text to NATO phonetic alphabet (Alpha, Bravo, Charlie).',
    category: 'creative-generators',
    keywords: ['nato alphabet', 'phonetic alphabet', 'alpha bravo charlie', 'spelling alphabet'],
    metaTitle: 'NATO Phonetic Alphabet Generator - Alpha Bravo | textformater.online',
    metaDescription: 'Free NATO phonetic alphabet generator. Convert text to Alpha, Bravo, Charlie format. Spell out words clearly for radio, phone, and professional communication.',
  },
  {
    slug: 'text-to-ascii-art',
    name: 'Text to ASCII Art',
    shortDescription: 'Convert text to ASCII art banners using various fonts.',
    category: 'creative-generators',
    keywords: ['ascii art', 'text art', 'ascii banner', 'text banner'],
    metaTitle: 'Text to ASCII Art Generator - ASCII Banners | textformater.online',
    metaDescription: 'Free text to ASCII art generator. Create ASCII art banners and text art from your words. Multiple fonts available for creative text displays.',
  },
  {
    slug: 'invisible-ink-generator',
    name: 'Invisible Ink Generator',
    shortDescription: 'Generate invisible text using zero-width Unicode characters.',
    category: 'creative-generators',
    keywords: ['invisible text', 'hidden text', 'zero width', 'invisible characters'],
    metaTitle: 'Invisible Ink Generator - Hidden Text | textformater.online',
    metaDescription: 'Free invisible ink generator. Create hidden text using zero-width Unicode characters. Send secret messages that appear invisible to others.',
  },
  {
    slug: 'glitch-text-generator',
    name: 'Glitch Text Generator',
    shortDescription: 'Create glitchy, corrupted-looking text effects.',
    category: 'creative-generators',
    keywords: ['glitch text', 'corrupted text', 'broken text', 'distorted text'],
    metaTitle: 'Glitch Text Generator - Corrupted Text Effects | textformater.online',
    metaDescription: 'Free glitch text generator. Create corrupted, distorted text effects. Perfect for cyberpunk themes, gaming usernames, and digital art.',
  },

  // ===== ANALYSIS & UTILITY TOOLS =====
  {
    slug: 'word-counter',
    name: 'Word Counter',
    shortDescription: 'Count words, characters, sentences, and paragraphs.',
    category: 'analysis-utilities',
    keywords: ['word counter', 'character counter', 'word count', 'text statistics'],
    metaTitle: 'Word Counter - Count Words, Characters & More | textformater.online',
    metaDescription: 'Free word counter tool. Count words, characters, sentences, paragraphs, and reading time. Detailed text statistics for writers and editors.',
  },
  {
    slug: 'line-counter-tool',
    name: 'Line Counter Tool',
    shortDescription: 'Count total lines, empty lines, and non-empty lines.',
    category: 'analysis-utilities',
    keywords: ['line counter', 'count lines', 'line count', 'text lines'],
    metaTitle: 'Line Counter Tool - Count Text Lines Online | textformater.online',
    metaDescription: 'Free line counter tool. Count total lines, empty lines, and non-empty lines in your text. Analyze text structure and formatting.',
  },
  {
    slug: 'readability-score-checker',
    name: 'Readability Score Checker',
    shortDescription: 'Calculate Flesch-Kincaid and other readability scores.',
    category: 'analysis-utilities',
    keywords: ['readability score', 'flesch kincaid', 'reading level', 'text complexity'],
    metaTitle: 'Readability Score Checker - Flesch-Kincaid Analysis | textformater.online',
    metaDescription: 'Free readability score checker. Calculate Flesch-Kincaid, Gunning Fog, and other readability metrics. Analyze text complexity and reading level.',
  },
  {
    slug: 'keyword-density-checker',
    name: 'Keyword Density Checker',
    shortDescription: 'Analyze keyword frequency and density in text.',
    category: 'analysis-utilities',
    keywords: ['keyword density', 'word frequency', 'seo analysis', 'keyword checker'],
    metaTitle: 'Keyword Density Checker - SEO Word Analysis | textformater.online',
    metaDescription: 'Free keyword density checker. Analyze word frequency and keyword density for SEO optimization. Find the most common words in your content.',
  },
  {
    slug: 'text-difference-checker',
    name: 'Text Difference Checker',
    shortDescription: 'Compare two texts and highlight the differences.',
    category: 'analysis-utilities',
    keywords: ['text diff', 'compare text', 'difference checker', 'text comparison'],
    metaTitle: 'Text Difference Checker - Compare & Diff Text | textformater.online',
    metaDescription: 'Free text difference checker. Compare two texts side by side and highlight differences. Perfect for proofreading and version comparison.',
  },
  {
    slug: 'remove-punctuation-tool',
    name: 'Remove Punctuation Tool',
    shortDescription: 'Remove all punctuation marks from text.',
    category: 'analysis-utilities',
    keywords: ['remove punctuation', 'strip punctuation', 'delete punctuation', 'clean text'],
    metaTitle: 'Remove Punctuation Tool - Strip Punctuation | textformater.online',
    metaDescription: 'Free tool to remove punctuation from text. Strip all punctuation marks including periods, commas, quotes and more. Clean text processing.',
  },
  {
    slug: 'find-and-replace-tool',
    name: 'Find & Replace Tool',
    shortDescription: 'Find and replace text with support for regex patterns.',
    category: 'analysis-utilities',
    keywords: ['find replace', 'search replace', 'text replace', 'regex replace'],
    metaTitle: 'Find & Replace Tool - Text Search & Replace | textformater.online',
    metaDescription: 'Free find and replace tool. Search and replace text with support for regular expressions. Powerful text editing with pattern matching.',
  },
  {
    slug: 'text-extractor-regex',
    name: 'Text Extractor (Regex)',
    shortDescription: 'Extract text patterns using regular expressions.',
    category: 'analysis-utilities',
    keywords: ['regex extractor', 'pattern extractor', 'text extraction', 'regex match'],
    metaTitle: 'Text Extractor with Regex - Pattern Matching | textformater.online',
    metaDescription: 'Free regex text extractor. Extract specific patterns from text using regular expressions. Find emails, URLs, numbers, and custom patterns.',
  },
  {
    slug: 'list-randomizer',
    name: 'List Randomizer',
    shortDescription: 'Randomly shuffle and reorder list items.',
    category: 'analysis-utilities',
    keywords: ['list randomizer', 'shuffle list', 'random order', 'randomize lines'],
    metaTitle: 'List Randomizer - Shuffle & Randomize Lists | textformater.online',
    metaDescription: 'Free list randomizer tool. Randomly shuffle and reorder list items. Perfect for random selection, giveaways, and randomizing any list.',
  },
  {
    slug: 'text-to-slug-converter',
    name: 'Text to Slug Converter',
    shortDescription: 'Convert text to URL-friendly slugs.',
    category: 'analysis-utilities',
    keywords: ['slug generator', 'url slug', 'slug converter', 'seo slug'],
    metaTitle: 'Text to Slug Converter - URL Slug Generator | textformater.online',
    metaDescription: 'Free text to slug converter. Generate URL-friendly slugs from any text. Perfect for creating SEO-friendly URLs, permalinks, and identifiers.',
  },
];

// Helper functions
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getToolsByCategory(categorySlug: CategorySlug): Tool[] {
  return tools.filter(tool => tool.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getRelatedTools(currentSlug: string, limit: number = 6): Tool[] {
  const currentTool = getToolBySlug(currentSlug);
  if (!currentTool) return [];

  // Get tools from same category first
  const sameCategoryTools = tools.filter(
    tool => tool.category === currentTool.category && tool.slug !== currentSlug
  );

  // If not enough, add from other categories
  const otherTools = tools.filter(
    tool => tool.category !== currentTool.category && tool.slug !== currentSlug
  );

  return [...sameCategoryTools, ...otherTools].slice(0, limit);
}

export function getAllToolSlugs(): string[] {
  return tools.map(tool => tool.slug);
}

export function getAllCategorySlugs(): CategorySlug[] {
  return categories.map(cat => cat.slug);
}
