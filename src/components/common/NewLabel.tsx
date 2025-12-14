import dayjs from "dayjs";

/**
 * 日付が7日以内かどうかを判定
 */
const isWithin7Days = (dateString: string): boolean => {
  const articleDate = dayjs(dateString);
  const today = dayjs();
  const diffDays = today.diff(articleDate, "day");
  return diffDays >= 0 && diffDays <= 7;
};

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