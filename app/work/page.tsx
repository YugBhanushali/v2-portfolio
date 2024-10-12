import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { workExperiences } from "../utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Yug Bhanushali",
  description:
    "Discover my work experience and the companies I've collaborated with.",
  openGraph: {
    title: "Work - Yug Bhanushali",
    description:
      "Discover my work experience and the companies I've collaborated with.",
    url: "https://yugbhanushali.com/work",
    images: "https://yugbhanushali.com/api/og?type=Work",
  },
};

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-start w-full md:w-[75%] lg:w-[50%] p-3 md:p-5 mx-auto">
      <div>
        {workExperiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
