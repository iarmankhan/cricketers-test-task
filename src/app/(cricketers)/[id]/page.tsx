"use client";

import {
  ArrowLeftIcon,
  CalendarIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useCricketer } from "@/lib/hooks/use-cricketer";
import { NotFound } from "next/dist/client/components/error";
import { useMemo } from "react";
import { camelCaseToTitleCase, getAgeFromDOB } from "@/lib/utils";
import { SimilarCricketers } from "@/components/cricketer-details/similar-cricketers";

export default function CricketerDetailsPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data: cricketer, isLoading } = useCricketer(id);
  const age = useMemo(() => {
    if (!cricketer?.dob) return 0;

    return getAgeFromDOB(new Date(cricketer?.dob!));
  }, [cricketer?.dob]);

  const type = useMemo(() => {
    if (!cricketer?.type) return "";
    return camelCaseToTitleCase(cricketer?.type);
  }, [cricketer?.type]);

  if (!cricketer && !isLoading) {
    return NotFound();
  }

  return (
    <div className="my-4">
      <div>
        <Link href="/">
          <div className="flex flex-row items-center hover:underline underline-offset-4">
            <ArrowLeftIcon className="mr-2 font-semibold" />
            <p className="font-semibold">Back to Cricketers</p>
          </div>
        </Link>
      </div>

      <div className="my-6">
        <h1 className="font-bold text-2xl">
          {cricketer?.name} #{cricketer?.rank}
        </h1>

        <p className="mt-4 text-md">{cricketer?.description}</p>

        <div className="flex flex-col space-y-2 my-4">
          {type && (
            <div className="flex flex-row gap-2 items-center text-md">
              <PersonIcon />
              <span className="font-medium">Type:</span> {type}
            </div>
          )}
          <div className="flex flex-row gap-2 items-center text-md">
            <StarIcon />
            <span className="font-medium">Points:</span> {cricketer?.points}
          </div>

          <div className="flex flex-row gap-2 items-center text-md">
            <CalendarIcon />
            <span className="font-medium">Age:</span> {age}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-xl mb-4">Similar Cricketers</h4>
        <SimilarCricketers id={id} />
      </div>
    </div>
  );
}
