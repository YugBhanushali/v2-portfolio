import { ProjectItem } from "@/components/ProjectItem";
import { Project, projects } from "../utils/constants";

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-star p-3 md:p-5 max-w-full md:max-w-[75%] lg:max-w-[50%] mx-auto">
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
