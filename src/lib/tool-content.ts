// Dynamic SEO content system with varied page structures
// Each tool has unique sections, ordering, and presentation styles

export type SectionType =
  | 'prose'           // Standard paragraph(s)
  | 'table'           // Data table
  | 'tips'            // Tip/trick boxes
  | 'warning'         // Caution/warning callout
  | 'history'         // Historical background
  | 'comparison'      // Side-by-side comparison
  | 'steps'           // Numbered steps (custom, not generic)
  | 'faq-inline'      // FAQ mixed into content
  | 'blockquote'      // Quote/callout
  | 'checklist'       // Checkbox-style list
  | 'code-example'    // Code snippet
  | 'use-case-story'  // Narrative use case
  | 'technical-deep-dive'; // Technical explanation

export interface ContentSection {
  type: SectionType;
  heading?: string;
  content: string;
}

export interface ToolContentData {
  // SEO fields
  targetKeyword: string;
  metaDescription?: string;

  // Page structure - array of sections in display order
  sections: ContentSection[];

  // Optional: custom "how to use" (null = skip this section entirely)
  howToUse?: {
    heading?: string; // Custom heading like "Getting Started" or "Quick Start"
    steps: Array<{ title: string; description: string }>;
  } | null;

  // Examples with varied presentation
  examples?: Array<{
    title: string;
    description?: string;
    input: string;
    output: string;
  }>;

  // FAQs (can be rendered inline or as separate section based on tool config)
  faqs?: Array<{
    question: string;
    answer: string;
  }>;

  // Hide the generic related tools section?
  hideRelatedTools?: boolean;

  // Custom CTA text
  ctaText?: string;
}

export const toolContent: Record<string, ToolContentData> = {

  // ============================================
  // CASE MANIPULATION TOOLS (10 tools)
  // ============================================

  'title-case-converter': {
    targetKeyword: 'title case converter',
    sections: [
      {
        type: 'prose',
        content: `<p>Ever stared at a headline wondering if "with" should be capitalized? You're not alone. Title case trips up even experienced writers because the rules aren't as straightforward as "capitalize everything."</p>`
      },
      {
        type: 'table',
        heading: 'The Rules Nobody Remembers',
        content: `
          <table>
            <tr><th>Word Type</th><th>Rule</th><th>Examples</th></tr>
            <tr><td>Nouns, verbs, adjectives</td><td>Always capitalize</td><td>Dog, Running, Beautiful</td></tr>
            <tr><td>Articles</td><td>Lowercase (usually)</td><td>a, an, the</td></tr>
            <tr><td>Short prepositions</td><td>Lowercase</td><td>at, by, for, in, of</td></tr>
            <tr><td>Conjunctions</td><td>Lowercase</td><td>and, but, or, nor</td></tr>
            <tr><td>First/last word</td><td>Always capitalize</td><td>The, End</td></tr>
          </table>
        `
      },
      {
        type: 'faq-inline',
        content: `<p><strong>What about "Is" and "It"?</strong> They're verbs, so capitalize them. Yes, even though they're short. "It Is What It Is" — all caps except "What."</p>`
      },
      {
        type: 'comparison',
        heading: 'Style Guide Differences',
        content: `
          <p>AP Style, Chicago, and APA don't always agree:</p>
          <ul>
            <li><strong>AP:</strong> Capitalizes words of 4+ letters</li>
            <li><strong>Chicago:</strong> Lowercases all prepositions regardless of length</li>
            <li><strong>APA:</strong> Capitalizes words of 4+ letters, including prepositions</li>
          </ul>
          <p>This tool defaults to the most common convention, but ultimately — check your style guide.</p>
        `
      }
    ],
    howToUse: null, // Skip generic how-to, it's obvious
    examples: [
      { title: 'Blog Post', input: 'how to write better headlines for your blog', output: 'How to Write Better Headlines for Your Blog' },
      { title: 'With Prepositions', input: 'the man who sold the world', output: 'The Man Who Sold the World' }
    ],
    faqs: [
      { question: 'Should I capitalize "is" in titles?', answer: 'Yes. "Is" is a verb (form of "to be"), so it gets capitalized in title case.' },
      { question: 'What about hyphenated words?', answer: 'Capitalize both parts if they\'re major words: "Self-Driving" not "Self-driving."' }
    ]
  },

  'sentence-case-converter': {
    targetKeyword: 'sentence case converter',
    sections: [
      {
        type: 'prose',
        content: `<p>Sentence case. First letter up, rest down. That's it.</p>
        <p>Except... proper nouns stay capitalized. And acronyms. And sometimes brand names have weird casing (iPhone, eBay) that you might want to preserve.</p>`
      },
      {
        type: 'blockquote',
        content: `<blockquote>Used by: The New York Times, The Guardian, most academic writing, and anyone who thinks title case looks shouty.</blockquote>`
      },
      {
        type: 'tips',
        heading: 'When to Use Sentence Case',
        content: `
          <ul>
            <li>Academic papers and journals</li>
            <li>News headlines (many publications)</li>
            <li>Email subject lines (more casual feel)</li>
            <li>UI text and button labels</li>
            <li>Social media posts</li>
          </ul>
        `
      },
      {
        type: 'warning',
        content: `<p><strong>Watch out:</strong> Converting to sentence case will lowercase proper nouns too. "APPLE ANNOUNCES IPHONE" becomes "Apple announces iphone" — you'll need to fix "iPhone" manually.</p>`
      }
    ],
    howToUse: {
      heading: 'Quick Start',
      steps: [
        { title: 'Paste your text', description: 'Works with any length — single headline or entire paragraphs.' },
        { title: 'Get results instantly', description: 'First letter capitalized, rest lowercase.' },
        { title: 'Review proper nouns', description: 'Fix any names or acronyms that need re-capitalizing.' }
      ]
    },
    examples: [
      { title: 'From Title Case', input: 'The Quick Brown Fox Jumps Over The Lazy Dog', output: 'The quick brown fox jumps over the lazy dog' }
    ]
  },

  'alternating-case-generator': {
    targetKeyword: 'alternating case generator',
    sections: [
      {
        type: 'prose',
        content: `<p>yOu KnOw ExAcTlY wHaT tHiS iS fOr.</p>
        <p>The SpongeBob mocking meme. That sarcastic tone that text alone can't convey. When you need to express "I'm mocking what you just said" in written form.</p>`
      },
      {
        type: 'history',
        heading: 'Origin Story',
        content: `<p>This became internet-famous around 2017 with the "Mocking SpongeBob" meme. The alternating caps visually represent a mocking, sarcastic tone of voice — like when someone repeats what you said in a whiny voice.</p>
        <p>It's now standard internet vernacular for sarcasm.</p>`
      },
      {
        type: 'use-case-story',
        content: `
          <p><strong>Real usage:</strong></p>
          <p>Friend: "You should exercise more"</p>
          <p>You: "yOu ShOuLd ExErCiSe MoRe"</p>
          <p>Communication achieved.</p>
        `
      }
    ],
    howToUse: null,
    examples: [
      { title: 'Mocking Text', input: 'I love Mondays', output: 'i LoVe MoNdAyS' }
    ]
  },

  'reverse-text-generator': {
    targetKeyword: 'reverse text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>txet siht ekil — .sdrawkcab tI .esrever ni txet sevig looT</p>
        <p>Wait, let me write that properly: Tool gives text in reverse. It backwards. Like this text.</p>`
      },
      {
        type: 'checklist',
        heading: 'What People Actually Use This For',
        content: `
          <ul>
            <li>Creating mirror-readable text for printing on transfers</li>
            <li>Simple "encryption" for spoilers or puzzles</li>
            <li>Dyslexia simulation exercises</li>
            <li>Checking for palindromes</li>
            <li>Creative social media posts</li>
            <li>Testing input handling in software</li>
          </ul>
        `
      },
      {
        type: 'technical-deep-dive',
        heading: 'How Reversal Works',
        content: `<p>Character-by-character reversal. "Hello" → "olleH". Simple enough, but Unicode makes it interesting — emojis and combined characters (like é) need special handling to not break.</p>`
      }
    ],
    howToUse: null,
    examples: [
      { title: 'Basic Reverse', input: 'Hello World', output: 'dlroW olleH' },
      { title: 'Palindrome Test', input: 'racecar', output: 'racecar' }
    ]
  },

  'upside-down-text-generator': {
    targetKeyword: 'upside down text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>ʇxǝʇ uʍop ǝpᴉsdn</p>
        <p>That's not a special font. Those are actual Unicode characters that happen to look like upside-down letters. Copy them anywhere — they work in tweets, bios, messages, anywhere text works.</p>`
      },
      {
        type: 'table',
        heading: 'The Character Map',
        content: `
          <table>
            <tr><th>Normal</th><th>Flipped</th><th>Unicode</th></tr>
            <tr><td>a</td><td>ɐ</td><td>U+0250</td></tr>
            <tr><td>b</td><td>q</td><td>Just the letter q</td></tr>
            <tr><td>e</td><td>ǝ</td><td>U+01DD</td></tr>
            <tr><td>t</td><td>ʇ</td><td>U+0287</td></tr>
          </table>
          <p>Some letters (like x, o, s) look the same upside down. Others have dedicated Unicode characters. A few are approximations.</p>
        `
      },
      {
        type: 'warning',
        content: `<p>Not all letters have perfect upside-down equivalents. Some are approximations that look close but aren't perfect. Good enough for social media, not for anything requiring accuracy.</p>`
      }
    ],
    howToUse: null
  },

  'small-caps-generator': {
    targetKeyword: 'small caps generator',
    sections: [
      {
        type: 'prose',
        content: `<p>ꜱᴍᴀʟʟ ᴄᴀᴘꜱ ʟᴏᴏᴋ ʟɪᴋᴇ ᴛʜɪꜱ — uppercase letters at lowercase height. Elegant, understated, professional.</p>`
      },
      {
        type: 'history',
        heading: 'Typography Heritage',
        content: `<p>Small caps have been used in printing since the 1500s. Originally for acronyms in body text (so "NASA" doesn't SHOUT at you mid-sentence), headers in legal documents, and that sophisticated look in book design.</p>
        <p>Now they're everywhere: logo designs, social media bios, that fancy aesthetic you can't quite name.</p>`
      },
      {
        type: 'comparison',
        heading: 'Small Caps vs. Just Shrinking Text',
        content: `
          <p>Real small caps aren't just shrunken capital letters. They have:</p>
          <ul>
            <li>Proper stroke weight (shrunk caps look too thin)</li>
            <li>Adjusted proportions</li>
            <li>Consistent x-height with lowercase letters</li>
          </ul>
          <p>The Unicode characters we use approximate this effect for plain text contexts.</p>
        `
      }
    ],
    howToUse: null
  },

  'strikethrough-text-generator': {
    targetKeyword: 'strikethrough text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ ̶t̶e̶x̶t̶ — for when you want to say something but also pretend you didn't say it.</p>`
      },
      {
        type: 'use-case-story',
        heading: 'Why Strikethrough Exists',
        content: `
          <p>Originally: showing edits in documents. Redlined changes. What was removed.</p>
          <p>Now: comedic effect, passive aggression, corrections that let people see the original.</p>
          <p>Example: "I would l̶o̶v̶e̶ tolerate to attend your meeting."</p>
        `
      },
      {
        type: 'technical-deep-dive',
        content: `<p>This uses Unicode combining characters (U+0336) applied to each letter. It's not a font — these characters literally have a line drawn through them in the Unicode spec. Works almost everywhere, though rendering varies slightly by system.</p>`
      }
    ],
    howToUse: null,
    examples: [
      { title: 'Comedic Edit', input: 'This meeting could have been an email', output: 'T̶h̶i̶s̶ ̶m̶e̶e̶t̶i̶n̶g̶ ̶c̶o̶u̶l̶d̶ ̶h̶a̶v̶e̶ ̶b̶e̶e̶n̶ ̶a̶n̶ ̶e̶m̶a̶i̶l̶' }
    ]
  },

  'underline-text-generator': {
    targetKeyword: 'underline text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ text without HTML or Markdown. Just Unicode characters you can paste anywhere.</p>
        <p>Instagram bio? Works. Tweet? Works. Discord message? Works.</p>`
      },
      {
        type: 'blockquote',
        content: `<blockquote>Fun fact: Underlining for emphasis came from typewriters, which couldn't do italic or bold. In the digital age, underlining typically means "this is a link" — so using it for emphasis can confuse readers.</blockquote>`
      },
      {
        type: 'tips',
        content: `
          <p><strong>When to use:</strong></p>
          <ul>
            <li>Social media where formatting isn't supported</li>
            <li>Emphasis in plain text contexts</li>
            <li>Mimicking form fields or blanks</li>
          </ul>
          <p><strong>When to avoid:</strong></p>
          <ul>
            <li>Web content (looks like broken links)</li>
            <li>Professional documents (italic/bold preferred)</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'bold-text-generator-unicode': {
    targetKeyword: 'bold text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>𝗕𝗼𝗹𝗱 𝘁𝗲𝘅𝘁 that works in places where bold formatting doesn't exist.</p>
        <p>These aren't formatted regular letters — they're completely different Unicode characters called "Mathematical Bold" that happen to look like bold versions of the alphabet.</p>`
      },
      {
        type: 'table',
        heading: 'Unicode Math Alphabets',
        content: `
          <table>
            <tr><th>Style</th><th>Example</th><th>Unicode Block</th></tr>
            <tr><td>Bold</td><td>𝗔𝗕𝗖</td><td>Mathematical Bold</td></tr>
            <tr><td>Italic</td><td>𝐴𝐵𝐶</td><td>Mathematical Italic</td></tr>
            <tr><td>Bold Italic</td><td>𝑨𝑩𝑪</td><td>Mathematical Bold Italic</td></tr>
          </table>
          <p>These were designed for mathematical notation but got repurposed for social media styling.</p>
        `
      },
      {
        type: 'warning',
        content: `<p>Screen readers might read these as "mathematical bold capital A" instead of just "A". For accessibility, use sparingly and not for critical text.</p>`
      }
    ],
    howToUse: null
  },

  'italic-text-generator-unicode': {
    targetKeyword: 'italic text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>𝘐𝘵𝘢𝘭𝘪𝘤 𝘵𝘦𝘹𝘵 for Twitter bios, Instagram captions, and anywhere else that doesn't support formatting.</p>`
      },
      {
        type: 'use-case-story',
        content: `
          <p>The scenario: You're writing a tweet. You want emphasis. Twitter doesn't do italics.</p>
          <p>The old way: *asterisks* or _underscores_ (looks hacky)</p>
          <p>The new way: 𝘢𝘤𝘵𝘶𝘢𝘭 𝘪𝘵𝘢𝘭𝘪𝘤𝘴 (looks legit)</p>
        `
      },
      {
        type: 'tips',
        content: `
          <p>Mix with regular text for emphasis:</p>
          <p>"Just announced: our 𝘯𝘦𝘸 𝘤𝘰𝘭𝘭𝘦𝘤𝘵𝘪𝘰𝘯 drops Friday"</p>
          <p>Subtle, effective, doesn't look like you're trying too hard.</p>
        `
      }
    ],
    howToUse: null
  },

  // ============================================
  // DATA FORMATTING TOOLS (10 tools)
  // ============================================

  'remove-empty-lines': {
    targetKeyword: 'remove empty lines',
    sections: [
      {
        type: 'prose',
        content: `<p>You pasted something. Now there are blank lines everywhere. Just get rid of them.</p>`
      },
      {
        type: 'checklist',
        heading: 'Common Sources of Blank Line Chaos',
        content: `
          <ul>
            <li>Copied from PDFs (notorious for adding random breaks)</li>
            <li>Code with too-aggressive spacing</li>
            <li>Emails pasted from Outlook</li>
            <li>Spreadsheet exports</li>
            <li>OCR output</li>
            <li>Markdown that rendered weird</li>
          </ul>
        `
      },
      {
        type: 'technical-deep-dive',
        content: `<p>An "empty line" is usually just two newline characters in a row (or carriage return + newline on Windows). This tool collapses those sequences. Multiple blank lines become zero blank lines.</p>`
      }
    ],
    howToUse: null,
    examples: [
      { title: 'Clean Up', input: 'Line 1\n\n\nLine 2\n\nLine 3', output: 'Line 1\nLine 2\nLine 3' }
    ]
  },

  'remove-line-breaks': {
    targetKeyword: 'remove line breaks',
    sections: [
      {
        type: 'prose',
        content: `<p>Turn multi-line text into a single paragraph. Every line break becomes a space.</p>`
      },
      {
        type: 'use-case-story',
        heading: 'The PDF Copy-Paste Problem',
        content: `
          <p>You copy text from a PDF. You paste it. Now every line of the original document is its own line — even though it was one flowing paragraph.</p>
          <p>This fixes that. The text reflows into proper paragraphs.</p>
        `
      },
      {
        type: 'warning',
        content: `<p>This removes ALL line breaks. If you had intentional paragraph breaks, they're gone too. Use "remove empty lines" if you want to keep paragraph structure.</p>`
      }
    ],
    howToUse: null
  },

  'remove-duplicate-lines': {
    targetKeyword: 'remove duplicate lines',
    sections: [
      {
        type: 'prose',
        content: `<p>Got a list with duplicates? This kills the dupes. First occurrence stays, rest disappear.</p>`
      },
      {
        type: 'table',
        heading: 'Example',
        content: `
          <table>
            <tr><th>Before</th><th>After</th></tr>
            <tr><td>apple<br>banana<br>apple<br>cherry<br>banana</td><td>apple<br>banana<br>cherry</td></tr>
          </table>
        `
      },
      {
        type: 'tips',
        heading: 'Options',
        content: `
          <ul>
            <li><strong>Case-sensitive:</strong> "Apple" and "apple" are different</li>
            <li><strong>Case-insensitive:</strong> "Apple" and "apple" are the same (first one wins)</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'text-to-single-line': {
    targetKeyword: 'text to single line',
    sections: [
      {
        type: 'prose',
        content: `<p>Multi-line → single line. That's the entire tool.</p>
        <p>Every line break becomes a space. You get one continuous string.</p>`
      },
      {
        type: 'table',
        heading: 'Where Single-Line Text Matters',
        content: `
          <table>
            <tr><th>Context</th><th>Why</th></tr>
            <tr><td>Meta descriptions</td><td>Must be one line for SEO tools</td></tr>
            <tr><td>CSV cells</td><td>Newlines break row structure</td></tr>
            <tr><td>JSON string values</td><td>Unescaped newlines = invalid JSON</td></tr>
            <tr><td>Some API inputs</td><td>Newlines not accepted</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'remove-whitespace': {
    targetKeyword: 'remove whitespace',
    sections: [
      {
        type: 'prose',
        content: `<p>The invisible enemy. Spaces, tabs, non-breaking spaces, em spaces, hair spaces — there are literally 25+ types of whitespace in Unicode, and they all cause problems when you least expect it.</p>`
      },
      {
        type: 'use-case-story',
        heading: 'The "Why Doesn\'t This Match?" Problem',
        content: `
          <p>"John Smith" doesn't equal "John Smith"</p>
          <p>They look identical. But one has a regular space (U+0020) and one has a non-breaking space (U+00A0) from being copied from a web page.</p>
          <p>Your database rejects the duplicate. Your VLOOKUP fails. This tool reveals and removes the invisible differences.</p>
        `
      },
      {
        type: 'tips',
        heading: 'Modes',
        content: `
          <ul>
            <li><strong>Trim:</strong> Remove leading/trailing spaces only</li>
            <li><strong>Collapse:</strong> Multiple spaces → single space</li>
            <li><strong>Remove all:</strong> Delete every whitespace character</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'text-deduping-tool': {
    targetKeyword: 'text deduplication tool',
    sections: [
      {
        type: 'prose',
        content: `<p>Got duplicates? Course you do. That's why you're here.</p>
        <p>Paste text with repeated stuff. Get unique-only output. Simple.</p>`
      },
      {
        type: 'comparison',
        heading: 'Dedup Modes',
        content: `
          <table>
            <tr><th>Mode</th><th>What it does</th><th>Best for</th></tr>
            <tr><td>Line</td><td>Removes duplicate lines</td><td>Email lists, CSV rows</td></tr>
            <tr><td>Word</td><td>Removes repeated words</td><td>Keyword cleanup</td></tr>
            <tr><td>Sentence</td><td>Removes duplicate sentences</td><td>Content auditing</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'sort-text-lines': {
    targetKeyword: 'sort text lines',
    sections: [
      {
        type: 'prose',
        content: `<p>Alphabetize. A-Z, Z-A, or numerically. Each line becomes one item, sorted.</p>`
      },
      {
        type: 'warning',
        heading: 'The Numerical Gotcha',
        content: `
          <p>Alphabetically: 1, 10, 2, 20, 3</p>
          <p>Numerically: 1, 2, 3, 10, 20</p>
          <p>Choose the right mode or "10" comes before "2".</p>
        `
      },
      {
        type: 'checklist',
        heading: 'Sort Options',
        content: `
          <ul>
            <li>A-Z (ascending)</li>
            <li>Z-A (descending)</li>
            <li>Numerical (by number value)</li>
            <li>By length (shortest/longest first)</li>
            <li>Random shuffle</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'add-line-numbers': {
    targetKeyword: 'add line numbers',
    sections: [
      {
        type: 'prose',
        content: `<p>"Look at line 47" — suddenly your document is referenceable. That's what line numbers do.</p>`
      },
      {
        type: 'table',
        heading: 'Number Formats',
        content: `
          <table>
            <tr><th>Format</th><th>Output</th></tr>
            <tr><td>1.</td><td>1. First line</td></tr>
            <tr><td>1)</td><td>1) First line</td></tr>
            <tr><td>[1]</td><td>[1] First line</td></tr>
            <tr><td>Code</td><td>&nbsp;1 | First line</td></tr>
          </table>
        `
      },
      {
        type: 'use-case-story',
        content: `<p>Legal documents, code reviews, scripts, academic papers — anywhere you need to say "see line X" instead of "the third paragraph, about halfway down."</p>`
      }
    ],
    howToUse: null
  },

  'remove-html-tags': {
    targetKeyword: 'remove HTML tags',
    sections: [
      {
        type: 'prose',
        content: `<p>You have HTML. You want text. &lt;div&gt;s, &lt;span&gt;s, inline styles — all gone. Just the words remain.</p>`
      },
      {
        type: 'table',
        heading: 'What Disappears',
        content: `
          <table>
            <tr><th>Type</th><th>Result</th></tr>
            <tr><td>Tags</td><td>Removed completely</td></tr>
            <tr><td>Attributes</td><td>Gone</td></tr>
            <tr><td>Comments</td><td>Stripped</td></tr>
            <tr><td>Scripts/styles</td><td>Deleted (content and tags)</td></tr>
            <tr><td>Entities (&amp;amp;)</td><td>Converted (&)</td></tr>
          </table>
        `
      },
      {
        type: 'warning',
        content: `<p>Links lose their URLs. Images disappear (only alt text might remain). Tables flatten. The visual structure was CSS — without it, you get text in source order.</p>`
      }
    ],
    howToUse: null
  },

  'text-to-csv-converter': {
    targetKeyword: 'text to CSV converter',
    sections: [
      {
        type: 'prose',
        content: `<p>CSV: the cockroach of data formats. Works everywhere, outlives everything.</p>
        <p>Tab-separated? Pipe-delimited? Space-separated? Convert to proper CSV for Excel, Google Sheets, databases, whatever.</p>`
      },
      {
        type: 'technical-deep-dive',
        heading: 'CSV Escaping Rules (RFC 4180)',
        content: `
          <p>Values with commas get quoted: "New York, NY"</p>
          <p>Quotes inside values get doubled: "He said ""Hello"""</p>
          <p>Line breaks inside values are allowed (when quoted)</p>
          <p>This tool handles all of that automatically.</p>
        `
      }
    ],
    howToUse: null
  },

  // ============================================
  // TECHNICAL TOOLS (12 tools)
  // ============================================

  'url-encoder': {
    targetKeyword: 'URL encoder',
    sections: [
      {
        type: 'prose',
        content: `<p>URLs can't contain spaces, ampersands, or most special characters. This encodes them so they don't break.</p>`
      },
      {
        type: 'table',
        heading: 'Common Encodings',
        content: `
          <table>
            <tr><th>Character</th><th>Encoded</th><th>Why</th></tr>
            <tr><td>Space</td><td>%20</td><td>URLs can't have spaces</td></tr>
            <tr><td>&</td><td>%26</td><td>Separates query params</td></tr>
            <tr><td>=</td><td>%3D</td><td>Key-value separator</td></tr>
            <tr><td>?</td><td>%3F</td><td>Starts query string</td></tr>
          </table>
        `
      },
      {
        type: 'blockquote',
        content: `<blockquote>Safe characters that don't need encoding: A-Z, a-z, 0-9, hyphen, underscore, period, tilde.</blockquote>`
      }
    ],
    howToUse: null
  },

  'url-decoder': {
    targetKeyword: 'URL decoder',
    sections: [
      {
        type: 'prose',
        content: `<p>%20%2C%20%26%2C%20%3D → ", &, ="</p>
        <p>Paste URL gibberish, get readable text.</p>`
      },
      {
        type: 'use-case-story',
        heading: 'When You Need This',
        content: `
          <p><strong>Server logs:</strong> URLs are logged encoded. Decode to understand what was actually requested.</p>
          <p><strong>Debugging APIs:</strong> Your request looks like alphabet soup. Decode to see the actual values.</p>
          <p><strong>Tracking URLs:</strong> Marketing links often double-encode. Decode until it makes sense.</p>
        `
      }
    ],
    howToUse: null
  },

  'base64-encoder': {
    targetKeyword: 'Base64 encoder',
    sections: [
      {
        type: 'prose',
        content: `<p>Base64 turns any data into text using just 64 characters: A-Z, a-z, 0-9, +, /. The = signs are padding.</p>`
      },
      {
        type: 'table',
        heading: 'Why Base64 Exists',
        content: `
          <table>
            <tr><th>Use Case</th><th>What's Happening</th></tr>
            <tr><td>Data URLs</td><td>Image data embedded in HTML/CSS</td></tr>
            <tr><td>Basic Auth</td><td>"user:pass" encoded in headers</td></tr>
            <tr><td>JWTs</td><td>Payload as URL-safe text</td></tr>
            <tr><td>Email attachments</td><td>Binary files as text</td></tr>
          </table>
        `
      },
      {
        type: 'warning',
        content: `<p>Base64 is ENCODING, not ENCRYPTION. It provides zero security. Anyone can decode it instantly.</p>`
      }
    ],
    howToUse: null
  },

  'base64-decoder': {
    targetKeyword: 'Base64 decoder',
    sections: [
      {
        type: 'prose',
        content: `<p>SGVsbG8gV29ybGQ= → "Hello World"</p>
        <p>Paste Base64, see what's actually in there. JWT payloads, config values, API responses — decode it all.</p>`
      },
      {
        type: 'tips',
        content: `
          <p><strong>Decodes to garbage?</strong> The original was probably binary data (image, PDF), not text. Binary decoded as text = random characters.</p>
          <p><strong>JWT inspection:</strong> The middle section (between the dots) is Base64. Decode it to see claims, expiration, user data.</p>
        `
      }
    ],
    howToUse: null
  },

  'md5-hash-generator': {
    targetKeyword: 'MD5 hash generator',
    sections: [
      {
        type: 'prose',
        content: `<p>MD5: 32 hex characters. Same input always produces same output. "Hello World" = b10a8db164e0754105b7a99be72e3fe5. Forever.</p>`
      },
      {
        type: 'comparison',
        heading: 'When to Use (and When NOT To)',
        content: `
          <table>
            <tr><th>Use For</th><th>NEVER Use For</th></tr>
            <tr><td>File checksums</td><td>Passwords</td></tr>
            <tr><td>Cache keys</td><td>Security signatures</td></tr>
            <tr><td>Deduplication</td><td>Digital certificates</td></tr>
            <tr><td>Non-security IDs</td><td>Anything security-related</td></tr>
          </table>
        `
      },
      {
        type: 'warning',
        content: `<p>MD5 was broken in 2004. Researchers created two different files with identical MD5 hashes. For anything security-related, use SHA-256.</p>`
      }
    ],
    howToUse: null
  },

  'sha256-hash-generator': {
    targetKeyword: 'SHA-256 hash generator',
    sections: [
      {
        type: 'prose',
        content: `<p>SHA-256: 64 hex characters. The secure hash. Bitcoin runs on it. SSL certificates use it. It's the standard when MD5 isn't good enough (which is anything security-related).</p>`
      },
      {
        type: 'checklist',
        heading: 'Where You\'ll See SHA-256',
        content: `
          <ul>
            <li>Blockchain (Bitcoin mining, transaction IDs)</li>
            <li>SSL/TLS certificates</li>
            <li>Git commit IDs (newer repos)</li>
            <li>Package managers (npm, pip)</li>
            <li>File integrity verification</li>
          </ul>
        `
      },
      {
        type: 'blockquote',
        content: `<blockquote>2^256 possible outputs. That's more than atoms in the observable universe. Nobody's brute-forcing this.</blockquote>`
      }
    ],
    howToUse: null
  },

  'json-formatter': {
    targetKeyword: 'JSON formatter',
    sections: [
      {
        type: 'prose',
        content: `<p>{"name":"John","settings":{"theme":"dark"}} — good luck reading that.</p>
        <p>This adds indentation, validates syntax, and shows you where the errors are.</p>`
      },
      {
        type: 'table',
        heading: 'Common JSON Mistakes',
        content: `
          <table>
            <tr><th>Error</th><th>Problem</th></tr>
            <tr><td>{"a": 1,}</td><td>Trailing comma</td></tr>
            <tr><td>{'a': 1}</td><td>Single quotes</td></tr>
            <tr><td>{a: 1}</td><td>Unquoted keys</td></tr>
            <tr><td>// comment</td><td>Comments not allowed</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'xml-formatter': {
    targetKeyword: 'XML formatter',
    sections: [
      {
        type: 'prose',
        content: `<p>XML lives on. RSS feeds, SOAP APIs, Android layouts, Maven configs, Office documents. When you need to read or debug it, formatting helps.</p>`
      },
      {
        type: 'checklist',
        heading: 'What Makes XML Valid',
        content: `
          <ul>
            <li>Single root element</li>
            <li>Tags properly closed (&lt;tag&gt;...&lt;/tag&gt; or &lt;tag /&gt;)</li>
            <li>Tags properly nested</li>
            <li>Attributes quoted</li>
            <li>Case-sensitive (&lt;Tag&gt; ≠ &lt;tag&gt;)</li>
          </ul>
        `
      },
      {
        type: 'blockquote',
        content: `<blockquote>Unlike HTML, XML doesn't forgive. Every mistake is a parse error.</blockquote>`
      }
    ],
    howToUse: null
  },

  'css-minifier': {
    targetKeyword: 'CSS minifier',
    sections: [
      {
        type: 'prose',
        content: `<p>Remove comments, whitespace, and redundant characters. Same CSS, smaller file, faster download.</p>`
      },
      {
        type: 'table',
        heading: 'What Gets Compressed',
        content: `
          <table>
            <tr><th>Before</th><th>After</th></tr>
            <tr><td>.class {<br>&nbsp;&nbsp;color: red;<br>}</td><td>.class{color:red}</td></tr>
            <tr><td>/* comment */</td><td>(gone)</td></tr>
            <tr><td>margin: 0.5em;</td><td>margin:.5em</td></tr>
          </table>
        `
      },
      {
        type: 'tips',
        content: `<p>Typical savings: 10-30%. For production, bundlers like Vite/webpack minify automatically. This tool is for quick one-offs.</p>`
      }
    ],
    howToUse: null
  },

  'javascript-minifier': {
    targetKeyword: 'JavaScript minifier',
    sections: [
      {
        type: 'prose',
        content: `<p>JS minification goes beyond removing whitespace. It shortens variable names, inlines functions, and eliminates dead code. 40-80% size reduction is common.</p>`
      },
      {
        type: 'code-example',
        heading: 'The Transformation',
        content: `
          <p>Before:</p>
          <pre>function calculateTotal(items) {
  let sum = 0;
  for (let item of items) {
    sum += item.price;
  }
  return sum;
}</pre>
          <p>After:</p>
          <pre>function calculateTotal(t){let e=0;for(let n of t)e+=n.price;return e}</pre>
        `
      },
      {
        type: 'tips',
        content: `<p><strong>Debugging minified code:</strong> That's what source maps are for. They map minified code back to original source.</p>`
      }
    ],
    howToUse: null
  },

  'html-entity-encoder': {
    targetKeyword: 'HTML entity encoder',
    sections: [
      {
        type: 'prose',
        content: `<p>User types: &lt;script&gt;alert('hacked')&lt;/script&gt;</p>
        <p>You display it without encoding: congrats, you have an XSS vulnerability.</p>
        <p>Encoding converts special characters to safe representations that display as text, not execute as code.</p>`
      },
      {
        type: 'table',
        heading: 'Essential Encodings',
        content: `
          <table>
            <tr><th>Char</th><th>Entity</th><th>Why</th></tr>
            <tr><td>&lt;</td><td>&amp;lt;</td><td>Opens tags</td></tr>
            <tr><td>&gt;</td><td>&amp;gt;</td><td>Closes tags</td></tr>
            <tr><td>&amp;</td><td>&amp;amp;</td><td>Starts entities</td></tr>
            <tr><td>"</td><td>&amp;quot;</td><td>Breaks attributes</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'html-entity-decoder': {
    targetKeyword: 'HTML entity decoder',
    sections: [
      {
        type: 'prose',
        content: `<p>&amp;amp; &amp;lt; &amp;nbsp; → & < (space)</p>
        <p>Turn entity soup back into readable text.</p>`
      },
      {
        type: 'table',
        heading: 'Common Entities',
        content: `
          <table>
            <tr><th>Entity</th><th>Character</th><th>Source</th></tr>
            <tr><td>&amp;nbsp;</td><td>(space)</td><td>Everywhere</td></tr>
            <tr><td>&amp;mdash;</td><td>—</td><td>Em dashes</td></tr>
            <tr><td>&amp;rsquo;</td><td>'</td><td>Smart quotes</td></tr>
            <tr><td>&amp;copy;</td><td>©</td><td>Copyright</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  // ============================================
  // CREATIVE GENERATOR TOOLS (10 tools + extras)
  // ============================================

  'bubble-text-generator': {
    targetKeyword: 'bubble text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>ⓣⓨⓟⓔ ⓛⓘⓚⓔ ⓣⓗⓘⓢ</p>
        <p>Not a font — these are Unicode circled characters. They work anywhere text works: Instagram, Twitter, Discord, wherever.</p>`
      },
      {
        type: 'table',
        heading: 'Styles',
        content: `
          <table>
            <tr><th>Style</th><th>Example</th></tr>
            <tr><td>Outline</td><td>ⓐⓑⓒ</td></tr>
            <tr><td>Filled</td><td>🅐🅑🅒</td></tr>
          </table>
        `
      },
      {
        type: 'blockquote',
        content: `<blockquote>Only A-Z available. Numbers have circles (①②③) but punctuation stays normal.</blockquote>`
      }
    ],
    howToUse: null
  },

  'square-text-generator': {
    targetKeyword: 'square text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>🄱🄾🅇🄴🄳 letters. The edgier cousin of bubble text.</p>
        <p>Same concept: Unicode characters that look like letters in squares.</p>`
      },
      {
        type: 'history',
        content: `<p>These exist because Unicode includes "Enclosed Alphanumeric Supplement" — originally for East Asian typography. We just repurposed them for social media aesthetics.</p>`
      }
    ],
    howToUse: null
  },

  'currency-text-generator': {
    targetKeyword: 'currency text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>$M$O$N$E$Y$ — when you want your text to scream cash.</p>`
      },
      {
        type: 'table',
        heading: 'Styles',
        content: `
          <table>
            <tr><th>Currency</th><th>Result</th></tr>
            <tr><td>Dollar</td><td>$H$E$L$L$O$</td></tr>
            <tr><td>Euro</td><td>€H€E€L€L€O€</td></tr>
            <tr><td>Yen</td><td>¥H¥E¥L¥L¥O¥</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'zalgo-text-generator': {
    targetKeyword: 'Zalgo text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>H̸̤̓ę̴̛̣ c̸̨̛o̸͎͑m̷̢̾e̴̤̚s̵̱̈́.</p>
        <p>Zalgo text looks broken, corrupted, wrong. Named after a creepypasta horror entity. Now it's internet shorthand for chaos.</p>`
      },
      {
        type: 'technical-deep-dive',
        content: `<p>Unicode combining characters (diacritics meant for accents) stack vertically when you abuse them. The text overflows its bounds in unsettling ways.</p>`
      },
      {
        type: 'tips',
        heading: 'Intensity Levels',
        content: `
          <ul>
            <li><strong>Mini:</strong> Subtle unease</li>
            <li><strong>Normal:</strong> Visible corruption</li>
            <li><strong>Maxi:</strong> Full eldritch horror</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'vaporwave-text-generator': {
    targetKeyword: 'vaporwave text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>ＡＥＳＴＨＥＴＩＣ</p>
        <p>If you know, you know. 80s nostalgia, Japanese culture, Greek statues, palm trees, and this exact wide text.</p>`
      },
      {
        type: 'history',
        content: `<p>Fullwidth characters: designed for displaying Latin letters in East Asian typography. Repurposed for the ａｅｓｔｈｅｔｉｃ movement circa 2012.</p>`
      }
    ],
    howToUse: null
  },

  'braille-text-converter': {
    targetKeyword: 'Braille text converter',
    sections: [
      {
        type: 'prose',
        content: `<p>⠓⠑⠇⠇⠕ = "hello"</p>
        <p>Louis Braille invented this in 1824. He was 15. Each character is a pattern of 1-6 dots in a 2×3 grid.</p>`
      },
      {
        type: 'warning',
        content: `<p>This is VISUAL representation of Braille patterns. Actual accessibility requires screen readers and tactile displays. Don't use this for real accessibility purposes.</p>`
      }
    ],
    howToUse: null
  },

  'phonetic-alphabet-generator': {
    targetKeyword: 'NATO phonetic alphabet',
    sections: [
      {
        type: 'prose',
        content: `<p>"Was that B or D?" → "That's Bravo, Delta."</p>
        <p>The NATO phonetic alphabet eliminates confusion when spelling over radio, phone, or any lossy audio channel.</p>`
      },
      {
        type: 'blockquote',
        content: `<blockquote>Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</blockquote>`
      },
      {
        type: 'history',
        content: `<p>Adopted internationally in 1956. Words chosen because they're distinct across languages and accents. "Nine" becomes "Niner" to avoid confusion with German "Nein."</p>`
      }
    ],
    howToUse: null
  },

  'text-to-ascii-art': {
    targetKeyword: 'ASCII art generator',
    sections: [
      {
        type: 'prose',
        content: `<pre>
 _   _ _____ _     _     ___
| | | | ____| |   | |   / _ \\
| |_| |  _| | |   | |  | | | |
|  _  | |___| |___| |__| |_| |
|_| |_|_____|_____|_____|\\___/
</pre>
        <p>Terminal art from an era when screens were text-only.</p>`
      },
      {
        type: 'checklist',
        heading: 'Where It Lives Now',
        content: `
          <ul>
            <li>README file headers</li>
            <li>CLI splash screens</li>
            <li>Code comment banners</li>
            <li>Retro aesthetics</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'invisible-ink-generator': {
    targetKeyword: 'invisible text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>Text that's there but isn't. Zero-width characters that occupy space but render as nothing.</p>`
      },
      {
        type: 'technical-deep-dive',
        content: `
          <p>Zero-width space (U+200B), zero-width joiner (U+200D), zero-width non-joiner (U+200C) — they exist for text processing but can be abused creatively.</p>
        `
      },
      {
        type: 'checklist',
        heading: 'Uses',
        content: `
          <ul>
            <li>Blank usernames (where allowed)</li>
            <li>Empty-looking messages</li>
            <li>Invisible watermarking</li>
            <li>Bypassing "required field" checks (sometimes)</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'glitch-text-generator': {
    targetKeyword: 'glitch text generator',
    sections: [
      {
        type: 'prose',
        content: `<p>E̶R̷R̸O̵R̴</p>
        <p>Zalgo's cleaner cousin. Controlled distortion, cyberpunk vibes, still readable.</p>`
      },
      {
        type: 'comparison',
        content: `
          <table>
            <tr><th>Glitch</th><th>Zalgo</th></tr>
            <tr><td>Controlled</td><td>Chaotic</td></tr>
            <tr><td>Readable</td><td>Can be illegible</td></tr>
            <tr><td>Tech vibe</td><td>Horror vibe</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  // ============================================
  // ANALYSIS & UTILITY TOOLS (10 tools + extras)
  // ============================================

  'word-counter': {
    targetKeyword: 'word counter',
    sections: [
      {
        type: 'prose',
        content: `<p>"How many words is this?" The question behind every essay, blog post, and tweet.</p>`
      },
      {
        type: 'table',
        heading: 'What You Get',
        content: `
          <table>
            <tr><th>Metric</th><th>Why It Matters</th></tr>
            <tr><td>Words</td><td>Essay requirements, SEO targets</td></tr>
            <tr><td>Characters</td><td>Twitter limits, meta descriptions</td></tr>
            <tr><td>Sentences</td><td>Readability analysis</td></tr>
            <tr><td>Reading time</td><td>~200-250 wpm average</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'line-counter-tool': {
    targetKeyword: 'line counter',
    sections: [
      {
        type: 'prose',
        content: `<p>wc -l for people who don't want a terminal.</p>
        <p>Total lines, empty lines, lines with content. Simple.</p>`
      },
      {
        type: 'use-case-story',
        content: `
          <p><strong>Code:</strong> "How many lines is this file?"</p>
          <p><strong>Data:</strong> "How many rows in this CSV?"</p>
          <p><strong>Logs:</strong> "How many entries to parse?"</p>
        `
      }
    ],
    howToUse: null
  },

  'readability-score-checker': {
    targetKeyword: 'readability score checker',
    sections: [
      {
        type: 'prose',
        content: `<p>Is your writing too complex? Readability formulas answer that with math — syllable counts, sentence length, word complexity.</p>`
      },
      {
        type: 'table',
        heading: 'Score Interpretation',
        content: `
          <table>
            <tr><th>Flesch Score</th><th>Grade Level</th><th>Audience</th></tr>
            <tr><td>90-100</td><td>5th grade</td><td>Very easy</td></tr>
            <tr><td>60-70</td><td>8th-9th</td><td>Standard</td></tr>
            <tr><td>0-30</td><td>College grad</td><td>Difficult</td></tr>
          </table>
        `
      },
      {
        type: 'blockquote',
        content: `<blockquote>Hemingway wrote at 4th-grade level. Academic papers hit 12+. Neither is wrong — different audiences.</blockquote>`
      }
    ],
    howToUse: null
  },

  'keyword-density-checker': {
    targetKeyword: 'keyword density checker',
    sections: [
      {
        type: 'prose',
        content: `<p>Keyword density mattered more in 2008. Google's smarter now. But density still tells you: are you actually talking about your topic?</p>`
      },
      {
        type: 'table',
        heading: 'Density Guidelines',
        content: `
          <table>
            <tr><th>Density</th><th>Signal</th></tr>
            <tr><td>0-0.5%</td><td>Topic barely mentioned</td></tr>
            <tr><td>1-2%</td><td>Natural, focused</td></tr>
            <tr><td>3%+</td><td>Getting spammy</td></tr>
            <tr><td>5%+</td><td>Keyword stuffing</td></tr>
          </table>
        `
      },
      {
        type: 'tips',
        content: `<p>More important: use variations and synonyms. "Running shoes" should also mention "sneakers," "athletic footwear," "jogging."</p>`
      }
    ],
    howToUse: null
  },

  'text-difference-checker': {
    targetKeyword: 'text diff tool',
    sections: [
      {
        type: 'prose',
        content: `<p>Two versions. What changed? Green = added. Red = removed. Simple.</p>`
      },
      {
        type: 'use-case-story',
        content: `
          <p>Git does this. Wikipedia does this. You shouldn't need developer tools to compare text.</p>
          <p>Contract versions, essay drafts, code changes — paste both, see differences.</p>
        `
      }
    ],
    howToUse: null
  },

  'remove-punctuation-tool': {
    targetKeyword: 'remove punctuation',
    sections: [
      {
        type: 'prose',
        content: `<p>Periods, commas, quotes — sometimes you just need raw words.</p>`
      },
      {
        type: 'checklist',
        heading: 'When Punctuation Gets in the Way',
        content: `
          <ul>
            <li>Text analysis (word frequencies)</li>
            <li>NLP preprocessing</li>
            <li>Search normalization</li>
            <li>Data cleaning for imports</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'find-and-replace-tool': {
    targetKeyword: 'find and replace',
    sections: [
      {
        type: 'prose',
        content: `<p>Ctrl+H for the web. Find text, replace everywhere, done.</p>`
      },
      {
        type: 'technical-deep-dive',
        heading: 'Regex Mode',
        content: `
          <p>Regular expressions let you match patterns:</p>
          <table>
            <tr><th>Pattern</th><th>Matches</th></tr>
            <tr><td>\\d{3}-\\d{4}</td><td>555-1234</td></tr>
            <tr><td>\\s+</td><td>Multiple spaces</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'text-extractor-regex': {
    targetKeyword: 'regex text extractor',
    sections: [
      {
        type: 'prose',
        content: `<p>Define a pattern. Extract every match. Regex is cryptic but powerful.</p>`
      },
      {
        type: 'table',
        heading: 'Example Patterns',
        content: `
          <table>
            <tr><th>Pattern</th><th>Extracts</th></tr>
            <tr><td>\\d{3}-\\d{3}-\\d{4}</td><td>Phone numbers</td></tr>
            <tr><td>https?://[^\\s]+</td><td>URLs</td></tr>
            <tr><td>[A-Z]{2}\\d{6}</td><td>ID codes</td></tr>
          </table>
        `
      }
    ],
    howToUse: null
  },

  'list-randomizer': {
    targetKeyword: 'list randomizer',
    sections: [
      {
        type: 'prose',
        content: `<p>Paste list. Shuffle. Done.</p>
        <p>Fisher-Yates algorithm — every arrangement equally likely.</p>`
      },
      {
        type: 'checklist',
        heading: 'Uses',
        content: `
          <ul>
            <li>Raffle winners</li>
            <li>Random test inputs</li>
            <li>Decision making</li>
            <li>Flashcard shuffling</li>
          </ul>
        `
      }
    ],
    howToUse: null
  },

  'text-to-slug-converter': {
    targetKeyword: 'text to slug converter',
    sections: [
      {
        type: 'prose',
        content: `<p>"My Blog Post Title!" → "my-blog-post-title"</p>
        <p>URL-friendly text: lowercase, hyphens for spaces, no special characters.</p>`
      },
      {
        type: 'tips',
        heading: 'SEO Tip',
        content: `<p>Keep slugs short: "best-running-shoes-2024" beats "this-is-my-article-about-running-shoes-that-i-wrote"</p>`
      }
    ],
    howToUse: null
  }

};
