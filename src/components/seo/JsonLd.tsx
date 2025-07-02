import Script from 'next/script'

interface PersonJsonLdProps {
  name: string
  url: string
  image?: string
  sameAs?: string[]
  jobTitle?: string
  worksFor?: string
}

export function PersonJsonLd({
  name,
  url,
  image,
  sameAs = [],
  jobTitle = 'ソフトウェアエンジニア',
  worksFor = '',
}: PersonJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    ...(image && { image }),
    ...(sameAs.length > 0 && { sameAs }),
    jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: worksFor,
    },
  }

  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface WebsiteJsonLdProps {
  name: string
  url: string
  description: string
}

export function WebsiteJsonLd({ name, url, description }: WebsiteJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  publishedAt: string
  updatedAt?: string
  author: string
  image?: string
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  author,
  image,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    ...(updatedAt && { dateModified: updatedAt }),
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mochiken',
      logo: {
        '@type': 'ImageObject',
        url: '/og-image.png',
      },
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
  }

  return (
    <Script
      id="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface CreativeWorkJsonLdProps {
  title: string
  description: string
  url: string
  author: string
  image?: string
  dateCreated?: string
}

export function CreativeWorkJsonLd({
  title,
  description,
  url,
  author,
  image,
  dateCreated,
}: CreativeWorkJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    ...(dateCreated && { dateCreated }),
  }

  return (
    <Script
      id="creativework-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 