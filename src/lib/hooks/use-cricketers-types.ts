import { useQuery } from "react-query";
import { getCricketersTypes } from "@/lib/models/cricketers";

export function useCricketersTypes() {
  return useQuery(["cricketers-types"], async () => {
    return getCricketersTypes();
  });
}
