import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const SectionContainer = ({ children, title='', className='' }: Props) => {
  return (
    <section className={className}>
      <Container>
        {title && (
          <SectionTitle title={title} />
        )}
        {children}
      </Container>
    </section>
  );
}

export default SectionContainer;