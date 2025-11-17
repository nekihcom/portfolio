import { SectionTitle } from '@/components/common/SectionTitle'

type Props = {
  sectionTitle?: string
  children: React.ReactNode
  className?: string
}

export const SectionContainer = ({ sectionTitle="", children, className="" }: Props) => {
  return (
    <section className={`mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl ${className}`}>
      {sectionTitle && (
        <SectionTitle>{sectionTitle}</SectionTitle>
      )}
      {children}
    </section>
  )
}