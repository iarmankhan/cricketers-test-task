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
import { camelCaseToTitleCase, formatDOB, getAgeFromDOB } from "@/lib/utils";
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

  const dob = useMemo(() => {
    if (!cricketer?.dob) return "";
    return formatDOB(new Date(cricketer?.dob!));
  }, [cricketer?.dob]);

  if (!cricketer && !isLoading) {
    return NotFound();
  }

  return (
    <div className="my-4">
      <div className="p-2 sm:p-4">
        <Link href="/">
          <div className="flex flex-row items-center hover:underline underline-offset-4">
            <ArrowLeftIcon className="mr-2 text-gray-600" />
            <p className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">
              Back to Cricketers
            </p>
          </div>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h1 className="font-bold text-3xl text-gray-800">
          {cricketer?.name}{" "}
          <span className="text-gray-600">#{cricketer?.rank}</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700">{cricketer?.description}</p>

        <div className="flex flex-row gap-4 flex-wrap mt-6">
          {type && (
            <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
              <PersonIcon className="text-gray-600" />
              <span className="font-semibold">Type:</span> {type}
            </div>
          )}

          <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
            <StarIcon className="text-gray-600" />
            <span className="font-semibold">Points:</span> {cricketer?.points}
          </div>

          <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
            <CalendarIcon className="text-gray-600" />
            <span className="font-semibold">Age:</span> {age}
          </div>

          <div className="flex flex-row gap-2 items-center text-lg text-gray-700">
            <CalendarIcon className="text-gray-600" />
            <span className="font-semibold">Date of birth:</span> {dob}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="font-bold text-xl mb-4">Similar Cricketers</h4>
        <SimilarCricketers id={id} />
      </div>
    </div>
  );
}
