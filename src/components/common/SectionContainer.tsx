import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const SectionContainer = ({ children, title='', subtitle='', className='' }: Props) => {
  return (
    <section className={`${className} px-4 md:px-0`}>
      <Container>
        {title && (
          <div className="mb-4">
            <SectionTitle title={title} subtitle={subtitle} />
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export default SectionContainer;