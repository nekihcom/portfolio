import { Metadata } from 'next'

const baseUrl = 'https://www.mchkn.com'

export function generateMetadata({
  title,
  description,
  path,
  image = '/og-image.png',
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = `${baseUrl}${path}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateBlogMetadata({
  title,
  description,
  publishedAt,
  updatedAt,
  slug,
}: {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  slug: string
}): Metadata {
  const path = `/blog/${slug}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      url: `${baseUrl}${path}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  }
}

export function generateWorkMetadata({
  title,
  description,
  slug,
}: {
  title: string
  description: string
  slug: string
}): Metadata {
  const path = `/work/${slug}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${baseUrl}${path}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  }
} 