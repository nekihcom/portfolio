type Props = {
  id: string
  className?: string
  children: React.ReactNode
}

export const SectionContainer = (props:Props) => {
  const { id, className='', children } = props;

  // const cn = className + ' my-40 px-4 md:px-0';

  return (
    <section id={id} className={`w-[95%] max-w-[350px] md:max-w-[780px] mx-auto py-16 ${className}`}>
      {children}
    </section>
  );
}