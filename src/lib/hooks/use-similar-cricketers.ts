import { useQuery } from "react-query";
import getPlayers from "@/lib/get-players";
import { getCricketer } from "@/lib/models/cricketers";

export function useSimilarCricketers(id: string) {
  return useQuery(["similar-cricketers", id], async () => {
    const player = await getCricketer(id);

    if (!player) {
      return [];
    }

    const players = await getPlayers();

    return players
      .filter((p) => {
        if (p.id === id) {
          return false;
        }

        return p.type === player.type;
      })
      .slice(0, 5);
  });
}
