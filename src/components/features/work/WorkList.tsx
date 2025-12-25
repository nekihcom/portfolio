import Work from "@/components/features/work/Work";
import { IWork } from "@/types/type";

type Props = {
  works: IWork[];
}

const WorkList = ({ works }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {works.map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </div>
  );
};

export default WorkList;