// Text transformation functions for all tools
// All transformations run client-side for privacy and speed

// ===== CASE MANIPULATION =====

export function toTitleCase(text: string): string {
  const minorWords = new Set([
    'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'
  ]);

  return text.toLowerCase().replace(/(?:^|\s)\S/g, (match, offset) => {
    const word = text.slice(offset).split(/\s/)[0].toLowerCase();
    // Always capitalize first word and words not in minor words list
    if (offset === 0 || !minorWords.has(word)) {
      return match.toUpperCase();
    }
    return match;
  });
}

export function toSentenceCase(text: string): string {
  return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, match => match.toUpperCase());
}

export function toAlternatingCase(text: string): string {
  let isUpper = false;
  return text.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      isUpper = !isUpper;
      return isUpper ? char.toUpperCase() : char.toLowerCase();
    }
    return char;
  }).join('');
}

export function reverseText(text: string, byWord: boolean = false): string {
  if (byWord) {
    return text.split(' ').reverse().join(' ');
  }
  return text.split('').reverse().join('');
}

const upsideDownMap: Record<string, string> = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
  'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
  'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
  'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ',
  'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
  'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ɹ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ',
  'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ',
  '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0', '.': '˙', ',': '\'',
  '\'': ',', '"': ',,', '`': ',', '?': '¿', '!': '¡', '[': ']', ']': '[', '(': ')',
  ')': '(', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
};

export function toUpsideDown(text: string): string {
  return text.split('').reverse().map(char => upsideDownMap[char] || char).join('');
}

const smallCapsMap: Record<string, string> = {
  'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ',
  'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ',
  'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
  'y': 'ʏ', 'z': 'ᴢ'
};

export function toSmallCaps(text: string): string {
  return text.toLowerCase().split('').map(char => smallCapsMap[char] || char).join('');
}

export function toStrikethrough(text: string): string {
  return text.split('').map(char => char + '\u0336').join('');
}

export function toUnderline(text: string): string {
  return text.split('').map(char => char + '\u0332').join('');
}

const boldMap: Record<string, string> = {
  'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛',
  'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣',
  'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
  'Y': '𝗬', 'Z': '𝗭', 'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳',
  'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻',
  'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃',
  'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇', '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯',
  '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
};

export function toBold(text: string): string {
  return text.split('').map(char => boldMap[char] || char).join('');
}

const italicMap: Record<string, string> = {
  'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏',
  'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗',
  'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟',
  'Y': '𝘠', 'Z': '𝘡', 'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧',
  'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯',
  'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷',
  'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
};

export function toItalic(text: string): string {
  return text.split('').map(char => italicMap[char] || char).join('');
}

// ===== DATA FORMATTING =====

export function removeEmptyLines(text: string): string {
  return text.split('\n').filter(line => line.trim() !== '').join('\n');
}

export function removeLineBreaks(text: string, separator: string = ' '): string {
  return text.replace(/\r?\n/g, separator);
}

export function removeDuplicateLines(text: string, caseSensitive: boolean = true): string {
  const lines = text.split('\n');
  const seen = new Set<string>();
  return lines.filter(line => {
    const key = caseSensitive ? line : line.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).join('\n');
}

export function textToSingleLine(text: string, separator: string = ' '): string {
  return text.replace(/\s+/g, separator).trim();
}

export function removeWhitespace(text: string, options: { leading?: boolean; trailing?: boolean; extra?: boolean; all?: boolean } = {}): string {
  let result = text;
  if (options.all) {
    return result.replace(/\s/g, '');
  }
  if (options.leading) {
    result = result.split('\n').map(line => line.trimStart()).join('\n');
  }
  if (options.trailing) {
    result = result.split('\n').map(line => line.trimEnd()).join('\n');
  }
  if (options.extra) {
    result = result.replace(/[^\S\n]+/g, ' ').replace(/\n+/g, '\n');
  }
  return result;
}

export function sortLines(text: string, options: { direction?: 'asc' | 'desc'; type?: 'alpha' | 'numeric' | 'length' } = {}): string {
  const { direction = 'asc', type = 'alpha' } = options;
  const lines = text.split('\n');

  lines.sort((a, b) => {
    let comparison = 0;
    switch (type) {
      case 'numeric':
        comparison = (parseFloat(a) || 0) - (parseFloat(b) || 0);
        break;
      case 'length':
        comparison = a.length - b.length;
        break;
      case 'alpha':
      default:
        comparison = a.localeCompare(b);
    }
    return direction === 'desc' ? -comparison : comparison;
  });

  return lines.join('\n');
}

export function addLineNumbers(text: string, options: { startAt?: number; separator?: string; padding?: boolean } = {}): string {
  const { startAt = 1, separator = '. ', padding = true } = options;
  const lines = text.split('\n');
  const maxDigits = (startAt + lines.length - 1).toString().length;

  return lines.map((line, index) => {
    const num = (startAt + index).toString();
    const paddedNum = padding ? num.padStart(maxDigits, ' ') : num;
    return `${paddedNum}${separator}${line}`;
  }).join('\n');
}

export function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

export function textToCsv(text: string, options: { inputDelimiter?: string; outputDelimiter?: string } = {}): string {
  const { inputDelimiter = '\t', outputDelimiter = ',' } = options;
  return text.split('\n').map(line => {
    const cells = line.split(inputDelimiter);
    return cells.map(cell => {
      // Quote cells that contain delimiter, quotes, or newlines
      if (cell.includes(outputDelimiter) || cell.includes('"') || cell.includes('\n')) {
        return `"${cell.replace(/"/g, '""')}"`;
      }
      return cell;
    }).join(outputDelimiter);
  }).join('\n');
}

// ===== TECHNICAL TOOLS =====

export function urlEncode(text: string): string {
  return encodeURIComponent(text);
}

export function urlDecode(text: string): string {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

export function htmlEntityEncode(text: string): string {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, char => entities[char]);
}

export function htmlEntityDecode(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&nbsp;': ' ',
  };
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, match => entities[match] || match);
}

export function base64Encode(text: string): string {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    return '';
  }
}

export function base64Decode(text: string): string {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch {
    return '';
  }
}

// MD5 implementation (simple, for demonstration - in production use crypto library)
export async function md5Hash(text: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('MD5', msgBuffer).catch(() => null);

  // Fallback MD5 implementation since Web Crypto doesn't support MD5
  if (!hashBuffer) {
    return simpleMd5(text);
  }

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Simple MD5 implementation for client-side use
function simpleMd5(string: string): string {
  function rotateLeft(x: number, n: number): number {
    return (x << n) | (x >>> (32 - n));
  }

  function addUnsigned(x: number, y: number): number {
    const x4 = x & 0x80000000;
    const y4 = y & 0x80000000;
    const x8 = x & 0x40000000;
    const y8 = y & 0x40000000;
    const result = (x & 0x3FFFFFFF) + (y & 0x3FFFFFFF);
    if (x8 & y8) return result ^ 0x80000000 ^ x4 ^ y4;
    if (x8 | y8) {
      if (result & 0x40000000) return result ^ 0xC0000000 ^ x4 ^ y4;
      return result ^ 0x40000000 ^ x4 ^ y4;
    }
    return result ^ x4 ^ y4;
  }

  function F(x: number, y: number, z: number): number { return (x & y) | (~x & z); }
  function G(x: number, y: number, z: number): number { return (x & z) | (y & ~z); }
  function H(x: number, y: number, z: number): number { return x ^ y ^ z; }
  function I(x: number, y: number, z: number): number { return y ^ (x | ~z); }

  function FF(a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number {
    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function GG(a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number {
    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function HH(a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number {
    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function II(a: number, b: number, c: number, d: number, x: number, s: number, ac: number): number {
    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }

  function convertToWordArray(string: string): number[] {
    let messageLength = string.length;
    let numberOfWords = (((messageLength + 8) - ((messageLength + 8) % 64)) / 64 + 1) * 16;
    let wordArray = new Array(numberOfWords - 1);
    let wordCount;
    let bytePosition = 0;
    let byteCount = 0;
    while (byteCount < messageLength) {
      wordCount = (byteCount - (byteCount % 4)) / 4;
      bytePosition = (byteCount % 4) * 8;
      wordArray[wordCount] = (wordArray[wordCount] || 0) | (string.charCodeAt(byteCount) << bytePosition);
      byteCount++;
    }
    wordCount = (byteCount - (byteCount % 4)) / 4;
    bytePosition = (byteCount % 4) * 8;
    wordArray[wordCount] = (wordArray[wordCount] || 0) | (0x80 << bytePosition);
    wordArray[numberOfWords - 2] = messageLength << 3;
    wordArray[numberOfWords - 1] = messageLength >>> 29;
    return wordArray;
  }

  function wordToHex(value: number): string {
    let hex = '';
    for (let count = 0; count <= 3; count++) {
      const byte = (value >>> (count * 8)) & 255;
      hex = hex + byte.toString(16).padStart(2, '0');
    }
    return hex;
  }

  const x = convertToWordArray(string);
  let a = 0x67452301;
  let b = 0xEFCDAB89;
  let c = 0x98BADCFE;
  let d = 0x10325476;

  const S11 = 7, S12 = 12, S13 = 17, S14 = 22;
  const S21 = 5, S22 = 9, S23 = 14, S24 = 20;
  const S31 = 4, S32 = 11, S33 = 16, S34 = 23;
  const S41 = 6, S42 = 10, S43 = 15, S44 = 21;

  for (let k = 0; k < x.length; k += 16) {
    const AA = a, BB = b, CC = c, DD = d;
    a = FF(a, b, c, d, x[k + 0] || 0, S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1] || 0, S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2] || 0, S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3] || 0, S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4] || 0, S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5] || 0, S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6] || 0, S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7] || 0, S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8] || 0, S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9] || 0, S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10] || 0, S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11] || 0, S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12] || 0, S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13] || 0, S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14] || 0, S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15] || 0, S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1] || 0, S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6] || 0, S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11] || 0, S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0] || 0, S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5] || 0, S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10] || 0, S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15] || 0, S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4] || 0, S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9] || 0, S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14] || 0, S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3] || 0, S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8] || 0, S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13] || 0, S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2] || 0, S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7] || 0, S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12] || 0, S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5] || 0, S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8] || 0, S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11] || 0, S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14] || 0, S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1] || 0, S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4] || 0, S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7] || 0, S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10] || 0, S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13] || 0, S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0] || 0, S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3] || 0, S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6] || 0, S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9] || 0, S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12] || 0, S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15] || 0, S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2] || 0, S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0] || 0, S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7] || 0, S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14] || 0, S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5] || 0, S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12] || 0, S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3] || 0, S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10] || 0, S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1] || 0, S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8] || 0, S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15] || 0, S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6] || 0, S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13] || 0, S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4] || 0, S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11] || 0, S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2] || 0, S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9] || 0, S44, 0xEB86D391);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }
  return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

export async function sha256Hash(text: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function formatJson(text: string, spaces: number = 2): { formatted: string; error?: string } {
  try {
    const parsed = JSON.parse(text);
    return { formatted: JSON.stringify(parsed, null, spaces) };
  } catch (e) {
    return { formatted: text, error: e instanceof Error ? e.message : 'Invalid JSON' };
  }
}

export function formatXml(text: string): string {
  let formatted = '';
  let indent = '';
  const tab = '  ';

  text.split(/>\s*</).forEach(node => {
    if (node.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }
    formatted += indent + '<' + node + '>\n';
    if (node.match(/^<?\w[^>]*[^\/]$/)) {
      indent += tab;
    }
  });

  return formatted.substring(1, formatted.length - 2);
}

export function minifyCss(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([{}:;,])\s*/g, '$1') // Remove space around special chars
    .replace(/;}/g, '}') // Remove last semicolon
    .trim();
}

export function minifyJs(text: string): string {
  // Basic JS minification (removes comments and extra whitespace)
  return text
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([{}();,:])\s*/g, '$1') // Remove space around special chars
    .trim();
}

// ===== CREATIVE GENERATORS =====

const bubbleMap: Record<string, string> = {
  'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ',
  'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ',
  'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ',
  'y': 'ⓨ', 'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ',
  'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
  'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ',
  'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②', '3': '③',
  '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

export function toBubbleText(text: string): string {
  return text.split('').map(char => bubbleMap[char] || char).join('');
}

const squareMap: Record<string, string> = {
  'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷',
  'i': '🄸', 'j': '🄹', 'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿',
  'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃', 'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇',
  'y': '🅈', 'z': '🅉', 'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵',
  'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹', 'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽',
  'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃', 'U': '🅄', 'V': '🅅',
  'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉'
};

export function toSquareText(text: string): string {
  return text.split('').map(char => squareMap[char] || char).join('');
}

const currencyMap: Record<string, string> = {
  'a': '₳', 'b': '฿', 'c': '₵', 'd': 'Đ', 'e': '€', 'f': '₣', 'g': 'G', 'h': 'H',
  'i': 'ł', 'j': 'J', 'k': '₭', 'l': '£', 'm': '₥', 'n': '₦', 'o': 'Ø', 'p': '₱',
  'q': 'Q', 'r': '₹', 's': '$', 't': '₮', 'u': 'Ʉ', 'v': 'V', 'w': '₩', 'x': 'Ӿ',
  'y': '¥', 'z': 'Ƶ'
};

export function toCurrencyText(text: string): string {
  return text.toLowerCase().split('').map(char => currencyMap[char] || char.toUpperCase()).join('');
}

const zalgoChars = {
  up: ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈́', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', '͛', '͆', '̚'],
  mid: ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͏', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡'],
  down: ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣']
};

export function toZalgo(text: string, intensity: 'low' | 'medium' | 'high' = 'medium'): string {
  const counts = { low: 2, medium: 4, high: 8 };
  const count = counts[intensity];

  return text.split('').map(char => {
    if (char === ' ' || char === '\n') return char;

    let result = char;
    for (let i = 0; i < count; i++) {
      result += zalgoChars.up[Math.floor(Math.random() * zalgoChars.up.length)];
      result += zalgoChars.mid[Math.floor(Math.random() * zalgoChars.mid.length)];
      result += zalgoChars.down[Math.floor(Math.random() * zalgoChars.down.length)];
    }
    return result;
  }).join('');
}

export function toVaporwave(text: string): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    // Convert ASCII space to ideographic space
    if (code === 32) return '\u3000';
    // Convert ASCII 33-126 to fullwidth equivalents
    if (code >= 33 && code <= 126) {
      return String.fromCharCode(code + 65248);
    }
    return char;
  }).join('');
}

const brailleMap: Record<string, string> = {
  'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓',
  'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏',
  'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
  'y': '⠽', 'z': '⠵', ' ': '⠀', '1': '⠂', '2': '⠆', '3': '⠒', '4': '⠲', '5': '⠢',
  '6': '⠖', '7': '⠶', '8': '⠦', '9': '⠔', '0': '⠴'
};

export function toBraille(text: string): string {
  return text.toLowerCase().split('').map(char => brailleMap[char] || char).join('');
}

const natoAlphabet: Record<string, string> = {
  'a': 'Alpha', 'b': 'Bravo', 'c': 'Charlie', 'd': 'Delta', 'e': 'Echo', 'f': 'Foxtrot',
  'g': 'Golf', 'h': 'Hotel', 'i': 'India', 'j': 'Juliet', 'k': 'Kilo', 'l': 'Lima',
  'm': 'Mike', 'n': 'November', 'o': 'Oscar', 'p': 'Papa', 'q': 'Quebec', 'r': 'Romeo',
  's': 'Sierra', 't': 'Tango', 'u': 'Uniform', 'v': 'Victor', 'w': 'Whiskey', 'x': 'X-ray',
  'y': 'Yankee', 'z': 'Zulu', '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three',
  '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
};

export function toPhoneticAlphabet(text: string): string {
  return text.toLowerCase().split('').map(char => {
    if (char === ' ') return '(space)';
    return natoAlphabet[char] || char;
  }).join(' ');
}

// Simple ASCII art (basic implementation)
export function toAsciiArt(text: string): string {
  const fonts: Record<string, string[]> = {
    'a': ['  ___  ', ' / _ \\ ', '| |_| |', '|  _  |', '| | | |', '|_| |_|'],
    'b': [' ____  ', '|  _ \\ ', '| |_) |', '|  _ < ', '| |_) |', '|____/ '],
    'c': ['  ____ ', ' / ___|', '| |    ', '| |    ', '| |___ ', ' \\____|'],
    'd': [' ____  ', '|  _ \\ ', '| | | |', '| | | |', '| |_| |', '|____/ '],
    'e': [' _____ ', '| ____|', '|  _|  ', '| |___ ', '| ____|', '|_____|'],
    'f': [' _____ ', '|  ___|', '| |_   ', '|  _|  ', '| |    ', '|_|    '],
    'g': ['  ____ ', ' / ___|', '| |  _ ', '| |_| |', '| |_| |', ' \\____|'],
    'h': [' _   _ ', '| | | |', '| |_| |', '|  _  |', '| | | |', '|_| |_|'],
    'i': [' ___ ', '|_ _|', ' | | ', ' | | ', ' | | ', '|___|'],
    'j': ['     _ ', '    | |', '    | |', ' _  | |', '| |_| |', ' \\___/ '],
    'k': [' _  __', '| |/ /', '| \' / ', '| . \\ ', '| |\\ \\', '|_| \\_\\'],
    'l': [' _     ', '| |    ', '| |    ', '| |    ', '| |___ ', '|_____|'],
    'm': [' __  __ ', '|  \\/  |', '| |\\/| |', '| |  | |', '| |  | |', '|_|  |_|'],
    'n': [' _   _ ', '| \\ | |', '|  \\| |', '| |\\  |', '| | \\ |', '|_|  \\_|'],
    'o': ['  ___  ', ' / _ \\ ', '| | | |', '| | | |', '| |_| |', ' \\___/ '],
    'p': [' ____  ', '|  _ \\ ', '| |_) |', '|  __/ ', '| |    ', '|_|    '],
    'q': ['  ___  ', ' / _ \\ ', '| | | |', '| |_| |', ' \\__\\_\\', '        '],
    'r': [' ____  ', '|  _ \\ ', '| |_) |', '|  _ < ', '| | \\ \\', '|_|  \\_\\'],
    's': ['  ____ ', ' / ___|', '| |___ ', ' \\___ \\', ' ___) |', '|____/ '],
    't': [' _____ ', '|_   _|', '  | |  ', '  | |  ', '  | |  ', '  |_|  '],
    'u': [' _   _ ', '| | | |', '| | | |', '| | | |', '| |_| |', ' \\___/ '],
    'v': ['__     __', '\\ \\   / /', ' \\ \\ / / ', '  \\ V /  ', '   \\ /   ', '    V    '],
    'w': ['__        __', '\\ \\      / /', ' \\ \\ /\\ / / ', '  \\ V  V /  ', '   \\_/\\_/   ', '            '],
    'x': ['__  __', '\\ \\/ /', ' \\  / ', ' /  \\ ', '/_/\\_\\', '      '],
    'y': ['__   __', '\\ \\ / /', ' \\ V / ', '  | |  ', '  | |  ', '  |_|  '],
    'z': [' _____', '|__  /', '  / / ', ' / /_ ', '/____|', '      '],
    ' ': ['    ', '    ', '    ', '    ', '    ', '    '],
  };

  const height = 6;
  const lines: string[] = Array(height).fill('');

  text.toLowerCase().split('').forEach(char => {
    const charArt = fonts[char] || fonts[' '];
    for (let i = 0; i < height; i++) {
      lines[i] += (charArt[i] || '      ');
    }
  });

  return lines.join('\n');
}

export function toInvisibleInk(text: string): string {
  // Using zero-width characters to encode text
  const zeroWidth = {
    '0': '\u200B', // Zero-width space
    '1': '\u200C', // Zero-width non-joiner
  };

  return text.split('').map(char => {
    const binary = char.charCodeAt(0).toString(2).padStart(8, '0');
    return binary.split('').map(bit => zeroWidth[bit as '0' | '1']).join('');
  }).join('\u200D'); // Zero-width joiner as separator
}

export function toGlitchText(text: string): string {
  const glitchChars = ['̸', '̵', '̶', '̷', '̲', '̳', '͓', '͍', '̼', '̻'];

  return text.split('').map(char => {
    if (char === ' ' || char === '\n') return char;
    const numGlitch = Math.floor(Math.random() * 3) + 1;
    let result = char;
    for (let i = 0; i < numGlitch; i++) {
      result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
    return result;
  }).join('');
}

// ===== ANALYSIS & UTILITY =====

export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  readingTime: string;
  speakingTime: string;
}

export function getTextStats(text: string): TextStats {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length;
  const lines = text.split('\n').length;

  // Average reading speed: 200-250 words per minute
  const readingMinutes = Math.ceil(words / 225);
  const readingTime = readingMinutes < 1 ? '< 1 min' : `${readingMinutes} min`;

  // Average speaking speed: 125-150 words per minute
  const speakingMinutes = Math.ceil(words / 137);
  const speakingTime = speakingMinutes < 1 ? '< 1 min' : `${speakingMinutes} min`;

  return { characters, charactersNoSpaces, words, sentences, paragraphs, lines, readingTime, speakingTime };
}

export interface LineStats {
  total: number;
  empty: number;
  nonEmpty: number;
  longestLine: number;
  shortestLine: number;
  averageLength: number;
}

export function getLineStats(text: string): LineStats {
  const lines = text.split('\n');
  const nonEmptyLines = lines.filter(l => l.trim());
  const lineLengths = nonEmptyLines.map(l => l.length);

  return {
    total: lines.length,
    empty: lines.length - nonEmptyLines.length,
    nonEmpty: nonEmptyLines.length,
    longestLine: Math.max(...lineLengths, 0),
    shortestLine: Math.min(...lineLengths, 0),
    averageLength: nonEmptyLines.length ? Math.round(lineLengths.reduce((a, b) => a + b, 0) / nonEmptyLines.length) : 0
  };
}

export interface ReadabilityScore {
  fleschKincaid: number;
  fleschReadingEase: number;
  gradeLevel: string;
  readingLevel: string;
}

export function calculateReadability(text: string): ReadabilityScore {
  const words = text.trim().split(/\s+/).filter(w => w);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim());
  const syllables = words.reduce((count, word) => count + countSyllables(word), 0);

  const wordCount = words.length || 1;
  const sentenceCount = sentences.length || 1;
  const syllableCount = syllables || 1;

  // Flesch Reading Ease
  const fleschReadingEase = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllableCount / wordCount);

  // Flesch-Kincaid Grade Level
  const fleschKincaid = 0.39 * (wordCount / sentenceCount) + 11.8 * (syllableCount / wordCount) - 15.59;

  // Determine grade level and reading level
  let gradeLevel: string;
  let readingLevel: string;

  if (fleschReadingEase >= 90) {
    gradeLevel = '5th grade';
    readingLevel = 'Very Easy';
  } else if (fleschReadingEase >= 80) {
    gradeLevel = '6th grade';
    readingLevel = 'Easy';
  } else if (fleschReadingEase >= 70) {
    gradeLevel = '7th grade';
    readingLevel = 'Fairly Easy';
  } else if (fleschReadingEase >= 60) {
    gradeLevel = '8th-9th grade';
    readingLevel = 'Standard';
  } else if (fleschReadingEase >= 50) {
    gradeLevel = '10th-12th grade';
    readingLevel = 'Fairly Difficult';
  } else if (fleschReadingEase >= 30) {
    gradeLevel = 'College';
    readingLevel = 'Difficult';
  } else {
    gradeLevel = 'College Graduate';
    readingLevel = 'Very Difficult';
  }

  return {
    fleschKincaid: Math.round(fleschKincaid * 10) / 10,
    fleschReadingEase: Math.round(fleschReadingEase * 10) / 10,
    gradeLevel,
    readingLevel
  };
}

function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;

  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

export interface KeywordDensity {
  word: string;
  count: number;
  density: number;
}

export function analyzeKeywordDensity(text: string, minLength: number = 3): KeywordDensity[] {
  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length >= minLength);
  const totalWords = words.length || 1;
  const wordCounts: Record<string, number> = {};

  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  return Object.entries(wordCounts)
    .map(([word, count]) => ({
      word,
      count,
      density: Math.round((count / totalWords) * 10000) / 100
    }))
    .sort((a, b) => b.count - a.count);
}

export interface DiffResult {
  type: 'equal' | 'add' | 'remove';
  value: string;
}

export function diffText(text1: string, text2: string): DiffResult[] {
  const lines1 = text1.split('\n');
  const lines2 = text2.split('\n');
  const result: DiffResult[] = [];

  let i = 0, j = 0;
  while (i < lines1.length || j < lines2.length) {
    if (i >= lines1.length) {
      result.push({ type: 'add', value: lines2[j] });
      j++;
    } else if (j >= lines2.length) {
      result.push({ type: 'remove', value: lines1[i] });
      i++;
    } else if (lines1[i] === lines2[j]) {
      result.push({ type: 'equal', value: lines1[i] });
      i++;
      j++;
    } else {
      result.push({ type: 'remove', value: lines1[i] });
      result.push({ type: 'add', value: lines2[j] });
      i++;
      j++;
    }
  }

  return result;
}

export function removePunctuation(text: string): string {
  return text.replace(/[^\w\s]|_/g, '');
}

export function findAndReplace(text: string, find: string, replace: string, options: { caseSensitive?: boolean; regex?: boolean; wholeWord?: boolean } = {}): string {
  const { caseSensitive = true, regex = false, wholeWord = false } = options;

  let pattern: RegExp;
  if (regex) {
    pattern = new RegExp(find, caseSensitive ? 'g' : 'gi');
  } else {
    let escaped = find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (wholeWord) {
      escaped = `\\b${escaped}\\b`;
    }
    pattern = new RegExp(escaped, caseSensitive ? 'g' : 'gi');
  }

  return text.replace(pattern, replace);
}

export function extractWithRegex(text: string, pattern: string, flags: string = 'g'): string[] {
  try {
    const regex = new RegExp(pattern, flags);
    const matches = text.match(regex);
    return matches || [];
  } catch {
    return [];
  }
}

export function randomizeList(text: string): string {
  const lines = text.split('\n');
  for (let i = lines.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lines[i], lines[j]] = [lines[j], lines[i]];
  }
  return lines.join('\n');
}

export function textToSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
