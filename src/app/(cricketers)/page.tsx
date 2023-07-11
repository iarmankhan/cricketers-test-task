"use client"

import CricketersListFilters from "@/components/cricketers/cricketers-list-filters";
import CricketersList from "@/components/cricketers/cricketers-list";
import {useCricketers} from "@/lib/hooks/use-cricketers";
import {useMemo} from "react";
import {useCricketersFilters} from "@/lib/hooks";

export default function CricketersListPage() {
  const {search, setSearch, page, setPage, filter, setFilter, sortBy, setSortBy} = useCricketersFilters()
  const {refetch, isLoading, data} = useCricketers(search, filter, page, 10, sortBy)

  const cricketers = useMemo(() => {
    if (!data) return []
    return data.players || []
  }, [data])

  return (
    <div className='my-4'>
      <CricketersListFilters
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        sortBy={sortBy}
        onSortByChange={setSortBy}
      />

      <CricketersList cricketers={cricketers} />
    </div>
  )
}
