import { ShineBorder } from "./ui/shine-border";
import { ReactNode } from "react";

export type ExpertiseProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function ExpertiseCard(props: ExpertiseProps) {
  return (
    <div className="p-6 rounded-lg bg-primary/50 relative overflow-hidden">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      {props.icon}
      <h3 className="text-xl font-semibold mb-2 text-white">{props.title}</h3>
      <p className="text-gray-300">{props.description}</p>
    </div>
  );
}
