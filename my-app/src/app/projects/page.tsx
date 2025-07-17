import ProjectCard from "@/components/projectcard";

const projects = [
  {
    title: "Ai Powered Pull Request Review",
    subtitle: "Connecting musicians with technology",
    image: "", // update with your actual path
  },
  {
    title: "Politicate",
    subtitle: "Personalized AI-powered political education platform",
    image: "",
  },
  {
    title: "steersafe",
    subtitle: "Gamified mobile app that incentivizes distraction-free driving",
    image: "",
  },
  {
    title: "Dream Team",
    subtitle: "Team matchmaking driven by machine learning",
    image: "",
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-semibold flex items-center gap-2 mb-10">
        <span>🛠️</span> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
