type Props = {
  id: string
  className?: string
  children: React.ReactNode
}

export const SectionContainer = (props:Props) => {
  const { id, className='', children } = props;

  return (
    <section id={id} className={`w-[95%] sm:w-[90%] max-w-[400px] md:max-w-[960px] mx-auto py-16 ${className}`}>
      {children}
    </section>
  );
}