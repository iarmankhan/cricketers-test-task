import { TPlayer } from "@/lib/get-players";
import { Card, CardContent, CardHeader } from "@/components/ui";
import { camelCaseToTitleCase, getAgeFromDOB } from "@/lib/utils";
import { useMemo } from "react";

interface CricketerCardProps {
  cricketer: TPlayer;
}

export default function CricketerCard({ cricketer }: CricketerCardProps) {
  const age = useMemo(() => {
    return getAgeFromDOB(new Date(cricketer.dob!));
  }, [cricketer.dob]);

  return (
    <Card className="cursor-pointer">
      <CardHeader className="">
        <h3 className="text-lg font-bold">{cricketer.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Type: {camelCaseToTitleCase(cricketer.type!)}</p>
        <p className="text-sm">Points: {cricketer.points}</p>
        <p className="text-sm">Rank: {cricketer.rank}</p>
        <p className="text-sm">Age: {age}</p>
      </CardContent>
    </Card>
  );
}
