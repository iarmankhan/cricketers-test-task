"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
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
        <h1 className="font-bold text-2xl">{cricketer?.name}</h1>

        <p className="mt-2 ">{cricketer?.description}</p>

        <div>
          <p className="mt-2 text-sm">Type: {type}</p>
          <p className="mt-2 text-sm">Points: {cricketer?.points}</p>
          <p className="mt-2 text-sm">Rank: {cricketer?.rank}</p>
          <p className="mt-2 text-sm">Age: {age}</p>
        </div>
      </div>

      <SimilarCricketers id={id} />
    </div>
  );
}
