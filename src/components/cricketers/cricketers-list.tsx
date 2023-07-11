import { TPlayer } from "@/lib/get-players";
import CricketerCard from "@/components/cricketers/cricketer-card";

interface CricketersListProps {
  cricketers: TPlayer[];
}

export default function CricketersList({ cricketers }: CricketersListProps) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cricketers.map((cricketer) => (
        <CricketerCard key={cricketer.id} cricketer={cricketer} />
      ))}
    </div>
  );
}
