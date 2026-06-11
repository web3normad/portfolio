import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-40">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title={"What\nI ship."}
        />

        <div>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
