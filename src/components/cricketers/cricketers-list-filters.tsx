import { SortFields } from "@/lib/models/cricketers";
import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useCricketersTypes } from "@/lib/hooks/use-cricketers-types";
import { useMemo } from "react";
import { camelCaseToTitleCase } from "@/lib/utils";
import { useClient } from "@/lib/hooks/use-client";

interface CricketersListFiltersProps {
  search: string;
  onSearchChange: (search: string) => void;

  sortBy: SortFields | undefined;
  onSortByChange: (order?: SortFields) => void;

  filter: string;
  onFilterChange: (type: string) => void;
}

export default function CricketersListFilters({
  search,
  onSearchChange,
  sortBy,
  onSortByChange,
  filter,
  onFilterChange,
}: CricketersListFiltersProps) {
  const { data: types } = useCricketersTypes();

  const formattedTypes = useMemo(() => {
    if (!types) return [];

    return types
      .filter((type) => !!type)
      .map((type) => ({
        label: camelCaseToTitleCase(type!),
        value: type,
      })) as { label: string; value: string }[];
  }, [types]);

  const isClient = useClient();

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="">
        <Input
          type="search"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        {isClient && (
          <Select
            value={sortBy}
            onValueChange={(val) => {
              onSortByChange(val as SortFields);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value={SortFields.NAME}>Name</SelectItem>
                <SelectItem value={SortFields.RANK}>Rank</SelectItem>
                <SelectItem value={SortFields.DOB}>Age</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}

        {isClient && (
          <Select
            value={filter}
            onValueChange={(val) => {
              onFilterChange(val);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Types</SelectLabel>
                <SelectItem value={""}>All</SelectItem>
                {formattedTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
}
