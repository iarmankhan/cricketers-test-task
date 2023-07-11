import { TPlayer } from "@/lib/get-players";
import { Card, CardContent, CardHeader } from "@/components/ui";
import { camelCaseToTitleCase, getAgeFromDOB } from "@/lib/utils";
import { useMemo } from "react";
import Link from "next/link";

interface CricketerCardProps {
  cricketer: TPlayer;
  minimal?: boolean;
}

export default function CricketerCard({
  cricketer,
  minimal,
}: CricketerCardProps) {
  const age = useMemo(() => {
    return getAgeFromDOB(new Date(cricketer.dob!));
  }, [cricketer.dob]);

  const type = useMemo(() => {
    if (!cricketer.type) return "";
    return camelCaseToTitleCase(cricketer.type);
  }, [cricketer.type]);

  return (
    <Card>
      <CardHeader className="">
        <Link href={`/${cricketer.id}`}>
          <h3 className="text-lg font-bold hover:underline">
            {cricketer.name}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        {type && !minimal && <p className="text-sm">Type: {type}</p>}
        <p className="text-sm">Points: {cricketer.points}</p>
        <p className="text-sm">Rank: {cricketer.rank}</p>
        {!minimal && <p className="text-sm">Age: {age}</p>}
      </CardContent>
    </Card>
  );
}
