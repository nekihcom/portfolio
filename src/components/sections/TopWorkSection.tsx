import SectionContainer from "@/components/common/SectionContainer";
import WorkList from "@/components/features/work/WorkList";
import { getWorksList } from "@/services/work";
import { IWork } from "@/types/type";


const TopWorkSection = async () => {
  const works: IWork[] = await getWorksList(3);

  return (
    <SectionContainer className="py-10" title="実績" subtitle="Work">
      {works.length > 0 ? (
        <WorkList works={works} />
      ) : (
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">準備中です</p>
        </div>
      )}
    </SectionContainer>
  );
};

export default TopWorkSection;