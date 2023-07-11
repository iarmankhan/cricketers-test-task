import {useLocalStorageState} from "@/lib/hooks/use-local-storage-state";
import {SortFields} from "@/lib/models/cricketers";

export function  useCricketersFilters() {
  const [search, setSearch] = useLocalStorageState<string>('search', '')
  const [filter, setFilter] = useLocalStorageState<string>('filter', '')
  const [page, setPage] = useLocalStorageState<number>('page', 1)
  const [sortBy, setSortBy] = useLocalStorageState<SortFields | undefined>('sortBy', undefined)

  return {
    search,
    setSearch,
    filter,
    setFilter,
    page,
    setPage,
    sortBy,
    setSortBy,
  }
}
