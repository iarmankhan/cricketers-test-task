import {SortFields} from "@/lib/models/cricketers";
import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui";
import {useLocalStorageState} from "@/lib/hooks";

interface CricketersListFiltersProps {
  onSearchChange: (search: string) => void
  onSortByChange: (order?: SortFields) => void
  onFilterChange: (type: string) => void
}

export default function CricketersListFilters({}: CricketersListFiltersProps) {
  const [search, setSearch] = useLocalStorageState<string>('search', '')

  return (
    <div className='flex flex-row items-center'>
      <div>
        <Input type='search' value={search} onChange={e => setSearch(e.target.value)}/>
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By"/>
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

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Type"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Types</SelectLabel>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
