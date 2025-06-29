import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function ProjectCard({ title, subtitle, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl bg-muted/20 border-none">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
