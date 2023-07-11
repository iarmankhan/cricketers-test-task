// This file depicts the model for the players data coming from the API.

import getPlayers, {TPlayer} from "@/lib/get-players";

export enum SortFields {
  NAME = "name",
  RANK = "rank",
  DOB = "dob",
}

export const getCricketers = async (
  search: string = "",
  type = '',
  page = 1,
  limit = 10,
  order?: SortFields
) => {
  try {
    const players = await getPlayers();

    let filteredPlayers: TPlayer[] = [...players]

    if(type) {
      filteredPlayers = players.filter((player) => player.type === type)
    }

    if(search) {
      filteredPlayers = players.filter((player) => player?.name?.toLowerCase()?.includes(search.toLowerCase()))
    }

    const offset = (page - 1) * limit;
    const paginatedPlayers = filteredPlayers.slice(offset, offset + limit);

    if (order) {
      paginatedPlayers.sort((a, b) => {
        if(!a[order] || !b[order]) return 0;

        if (order === SortFields.NAME && a.name && b.name) {
          return a.name.localeCompare(b.name)
        }

        if (order === SortFields.RANK && a.rank && b.rank) {
          return a.rank - b.rank
        }

        if (order === SortFields.DOB && a.dob && b.dob) {
          return a.dob - b.dob
        }

        return 0
      })
    }

    return {
      players: paginatedPlayers,
      total: players.length,
    }
  } catch (error) {
    return {
      players: [],
      total: 0,
    }
  }
}

export const getCricketer = async (id: string) => {
  try {
    const players = await getPlayers();

    return players.find((player) => player.id === id)
  } catch (error) {
    return null
  }
}

export const getCricketersTypes = async () => {
  try {
    const players = await getPlayers();

    const types = players.map((player) => player.type)

    return [...new Set(types)].filter(Boolean)
  } catch (error) {
    return []
  }
}
