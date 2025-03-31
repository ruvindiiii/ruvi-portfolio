export type TechCardProps = {
  imageUrl: string;
  title: string;
};

export function TechCard(props: TechCardProps) {
  return (
    <div className="p-4 rounded-lg bg-primary/50 flex flex-col items-center justify-center hover:bg-primary/60 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-12 h-12 mb-2 group-hover:animate-pulse"
      />
      <span className="text-white group-hover:font-medium">{props.title}</span>
    </div>
  );
}
