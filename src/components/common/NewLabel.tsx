import { isWithin7Days } from "@/lib/utils";

type Props = {
  dateString: string;
}

const NewLabel = ({ dateString }: Props) => {
  return (
    <>
    {isWithin7Days(dateString) ? (
      <span className="text-xs w-12 text-center bg-red-600 text-white px-2 py-0.5 rounded whitespace-nowrap">
        NEW
      </span>
      ) : (
      <span className="text-xs w-12 text-center whitespace-nowrap"></span>
    )}  
    </>
  )
};

export default NewLabel;