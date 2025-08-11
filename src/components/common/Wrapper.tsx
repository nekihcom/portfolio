interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto">
      {children}
    </div>
  );
};