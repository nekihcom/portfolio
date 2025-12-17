import { IWork } from "@/types/type";
import ImageSlider from "@/components/common/ImageSlider";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

type Props = {
  work: IWork;
}

const Work = ({ work }: Props) => {
  return (
    <Dialog key={work.name}>
      <DialogTrigger asChild>
        <button className="group cursor-pointer rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 overflow-hidden">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={work.thumbnail}
              alt={work.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="font-semibold text-lg text-white px-4 text-center">
                {work.name}
              </h3>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] md:max-w-[1024px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>{work.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左カラム */}
          <div className="flex flex-col gap-6">
            {/* 左カラム上段: アプリケーション名と説明 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center">
                {work.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {work.description}
              </p>
            </div>

            {/* 左カラム下段: 技術スタック */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">技術スタック</h3>
              <div className="space-y-3">
                {work.techStacks.map((techStack, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h4 className="font-medium text-sm text-muted-foreground md:w-32 md:shrink-0">
                      {techStack.category}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {techStack.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* 右カラム: 画像スライダー */}
          <div className="lg:sticky lg:top-0 lg:self-start">
            <ImageSlider images={work.images} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Work;