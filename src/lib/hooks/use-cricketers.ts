import {useQuery} from "react-query";
import {getCricketers, SortFields} from "@/lib/models/cricketers";

export function useCricketers(
  searchQuery: string = '',
  filter: string = '',
  page: number = 1,
  limit: number = 10,
  order?: SortFields,
){
  return useQuery(
    ['cricketers', searchQuery, filter, page, limit, order],
    async () => {
      return getCricketers(searchQuery, filter, page, limit, order)
    },
    {
      refetchOnWindowFocus: false,
    }
  )
}
