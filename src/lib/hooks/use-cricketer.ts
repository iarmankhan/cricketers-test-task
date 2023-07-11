import { useQuery } from "react-query";
import { getCricketer } from "@/lib/models/cricketers";

export function useCricketer(id: string) {
  return useQuery(["cricketer", id], async () => {
    return getCricketer(id);
  });
}
