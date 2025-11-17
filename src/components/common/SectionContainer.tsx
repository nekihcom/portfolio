import Link from 'next/link'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Button, buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
type ButtonSize = VariantProps<typeof buttonVariants>['size']

type Props = {
  sectionTitle?: string
  children: React.ReactNode
  className?: string
  detailLink?: string
  detailLinkLabel?: string
  detailLinkVariant?: ButtonVariant
  detailLinkAlign?: 'left' | 'center' | 'right'
  detailLinkSize?: ButtonSize
}

export const SectionContainer = ({
  sectionTitle = '',
  children,
  className = '',
  detailLink,
  detailLinkLabel,
  detailLinkVariant = 'default',
  detailLinkAlign = 'right',
  detailLinkSize = 'default',
}: Props) => {
  const alignClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[detailLinkAlign]

  return (
    <section className={`mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl ${className}`}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      {children}
      {detailLink && detailLinkLabel && (
        <div className={`flex ${alignClass} mt-6`}>
          <Button asChild variant={detailLinkVariant} size={detailLinkSize}>
            <Link href={detailLink}>{detailLinkLabel}</Link>
          </Button>
        </div>
      )}
    </section>
  )
}