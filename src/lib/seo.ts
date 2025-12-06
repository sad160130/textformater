import { Metadata } from 'next';
import { Tool, Category, getCategoryBySlug } from './tools-data';

const SITE_URL = 'https://textformater.online';
const SITE_NAME = 'textformater.online';

export function generateToolMetadata(tool: Tool): Metadata {
  const category = getCategoryBySlug(tool.category);

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords.join(', '),
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `${SITE_URL}/tools/${tool.slug}`,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: `${SITE_URL}/tools/${tool.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'article:section': category?.name || 'Text Tools',
    },
  };
}

export function generateCategoryMetadata(category: Category): Metadata {
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/category/${category.slug}`,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: category.metaTitle,
      description: category.metaDescription,
    },
    alternates: {
      canonical: `${SITE_URL}/category/${category.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: 'textformater.online - Free Online Text Formatting & Conversion Tools',
    description: 'Convert, format, and analyze text online with 50+ free tools. Title case converter, JSON formatter, word counter, and more. Fast, browser-based, and private.',
    keywords: 'text converter, text formatter, online text tools, case converter, json formatter, word counter, text analysis, free text tools',
    openGraph: {
      title: 'textformater.online - Free Online Text Formatting & Conversion Tools',
      description: 'Convert, format, and analyze text online with 50+ free tools. Fast, browser-based, and private.',
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'textformater.online - Free Online Text Tools',
      description: 'Convert, format, and analyze text with 50+ free browser-based tools.',
    },
    alternates: {
      canonical: SITE_URL,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// JSON-LD Schema generators
export interface FAQ {
  question: string;
  answer: string;
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Free online text formatting, conversion, and analysis tools.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/tools?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateToolBreadcrumbs(tool: Tool) {
  const category = getCategoryBySlug(tool.category);
  return generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: category?.name || 'Tools', url: `${SITE_URL}/category/${tool.category}` },
    { name: tool.name, url: `${SITE_URL}/tools/${tool.slug}` },
  ]);
}

export function generateCategoryBreadcrumbs(category: Category) {
  return generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Categories', url: `${SITE_URL}/tools` },
    { name: category.name, url: `${SITE_URL}/category/${category.slug}` },
  ]);
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateSoftwareApplicationSchema(tool: Tool) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.shortDescription,
    url: `${SITE_URL}/tools/${tool.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function generateHowToSchema(tool: Tool, steps: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${tool.name}`,
    description: tool.shortDescription,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step,
    })),
  };
}
