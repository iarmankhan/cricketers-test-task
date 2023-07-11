import { useQuery } from "react-query";
import { getCricketers, SortFields } from "@/lib/models/cricketers";
import { CRICKETERS_LIMIT } from "@/lib/constants";

export function useCricketers(
  searchQuery: string = "",
  filter: string = "",
  page: number = 1,
  limit: number = CRICKETERS_LIMIT,
  order?: SortFields,
) {
  return useQuery(
    ["cricketers", searchQuery, filter, page, limit, order],
    async () => {
      return getCricketers(searchQuery, filter, page, limit, order);
    },
    {
      refetchOnWindowFocus: false,
    },
  );
}
