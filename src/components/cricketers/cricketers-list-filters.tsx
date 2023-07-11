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
import {useCricketersFilters} from "@/lib/hooks";

interface CricketersListFiltersProps {
  search: string
  onSearchChange: (search: string) => void

  sortBy: SortFields | undefined
  onSortByChange: (order?: SortFields) => void

  filter: string
  onFilterChange: (type: string) => void
}

export default function CricketersListFilters({
                                                search,
                                                onSearchChange,
                                                sortBy,
                                                onSortByChange,
                                                filter,
                                                onFilterChange
                                              }: CricketersListFiltersProps) {

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className=''>
        <Input type='search' placeholder='Search by name...' value={search} onChange={e => onSearchChange(e.target.value)}/>
      </div>

      <div className='flex flex-row items-center gap-4'>
        <Select value={sortBy} onValueChange={(val) => {
          onSortByChange(val as SortFields)
        }}>
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

        <Select
          value={filter}
          onValueChange={(val) => {
            onFilterChange(val)
          }}
        >
          <SelectTrigger className="w-[180px]" >
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
