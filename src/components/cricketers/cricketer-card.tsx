import {TPlayer} from "@/lib/get-players";

interface CricketerCardProps {
  cricketer: TPlayer
}

export default function CricketerCard({cricketer}: CricketerCardProps) {
  return (
    <div>
      <h1>{cricketer.name}</h1>
      <p>{cricketer.type}</p>
      <p>{cricketer.description}</p>
    </div>
  )
}
