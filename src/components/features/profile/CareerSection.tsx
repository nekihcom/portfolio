import type { ICareerItem } from "@/types/type";

type Props = {
  career: ICareerItem[];
};

const CareerSection = ({ career }: Props) => {

  return (
    <div className="w-full@max-w-3xl@mx-auto">
      {career.length > 0 && (
        <div className="mb-12">
          <div className="space-y-6 px-4">
            {career.map((item, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-6 pb-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-600 mt-1 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {item.role}
                </p>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerSection;
