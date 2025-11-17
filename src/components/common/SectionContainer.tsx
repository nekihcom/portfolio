import { SectionTitle } from '@/components/common/SectionTitle'

type Props = {
  sectionTitle?: string
  children: React.ReactNode
  className?: string
}

export const SectionContainer = ({ sectionTitle="", children, className="" }: Props) => {
  return (
    <section className={`mx-auto w-full max-w-3xl ${className}`}>
      {sectionTitle && (
        <SectionTitle>{sectionTitle}</SectionTitle>
      )}
      {children}
    </section>
  )
}