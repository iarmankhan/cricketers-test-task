import { TPlayer } from "@/lib/get-players";
import CricketerCard from "@/components/cricketers/cricketer-card";

interface CricketersListProps {
  cricketers: TPlayer[];
  minimal?: boolean;
}

export default function CricketersList({
  cricketers,
  minimal,
}: CricketersListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cricketers.map((cricketer) => (
        <CricketerCard
          key={cricketer.id}
          cricketer={cricketer}
          minimal={minimal}
        />
      ))}
    </div>
  );
}
