import { TPlayer } from "@/lib/get-players";
import { Card, CardContent, CardHeader } from "@/components/ui";
import { camelCaseToTitleCase, getAgeFromDOB } from "@/lib/utils";
import { useMemo } from "react";
import Link from "next/link";
import { CalendarIcon, PersonIcon, StarIcon } from "@radix-ui/react-icons";

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
    <Card className="relative rounded-lg overflow-hidden shadow-lg">
      <CardHeader className="bg-gray-100 py-4 px-6">
        <Link href={`/${cricketer.id}`}>
          <h3 className="text-lg font-bold hover:underline">
            {cricketer.name}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="py-6 px-6">
        <div className="flex flex-col space-y-2">
          {type && !minimal && (
            <div className="flex flex-row gap-2 items-center text-sm text-gray-600">
              <PersonIcon />
              <span className="font-medium">Type:</span> {type}
            </div>
          )}
          <div className="flex flex-row gap-2 items-center text-sm text-gray-600">
            <StarIcon />
            <span className="font-medium">Points:</span> {cricketer.points}
          </div>

          {!minimal && (
            <div className="flex flex-row gap-2 items-center text-sm text-gray-600">
              <CalendarIcon />
              <span className="font-medium">Age:</span> {age}
            </div>
          )}
        </div>

        <span className="absolute text-4xl text-gray-400 font-bold bottom-2 right-2">
          #{cricketer.rank}
        </span>
      </CardContent>
    </Card>
  );
}
