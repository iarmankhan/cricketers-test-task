"use client";

import CricketersListFilters from "@/components/cricketers/cricketers-list-filters";
import CricketersList from "@/components/cricketers/cricketers-list";
import { useCricketers } from "@/lib/hooks/use-cricketers";
import { useMemo } from "react";
import { useCricketersFilters } from "@/lib/hooks";
import { CRICKETERS_LIMIT } from "@/lib/constants";
import { CricketersLoadingList } from "@/components/cricketers/cricketers-loading-list";
import { Pagination } from "@/components/ui";

export default function CricketersListPage() {
  const {
    search,
    setSearch,
    page,
    setPage,
    filter,
    setFilter,
    sortBy,
    setSortBy,
  } = useCricketersFilters();

  const { refetch, isLoading, data } = useCricketers(
    search,
    filter,
    page,
    10,
    sortBy,
  );

  const cricketers = useMemo(() => {
    if (!data) return [];
    return data.players || [];
  }, [data]);

  const totalPages = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data.total / CRICKETERS_LIMIT);
  }, [data]);

  return (
    <div className="my-4">
      <CricketersListFilters
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        sortBy={sortBy}
        onSortByChange={setSortBy}
      />

      <div className="my-6">
        {isLoading ? (
          <CricketersLoadingList />
        ) : !data?.players?.length ? (
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-center text-2xl font-bold">
              No cricketers found
            </p>
          </div>
        ) : (
          <CricketersList cricketers={cricketers} />
        )}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
