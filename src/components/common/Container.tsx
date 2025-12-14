type Props = {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className='' }: Props) => {
  return (
    <div className={`container w-full lg:w-[1024px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;