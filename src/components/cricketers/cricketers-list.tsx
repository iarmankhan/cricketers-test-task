import {TPlayer} from "@/lib/get-players";

interface CricketersListProps {
  cricketers: TPlayer[]
}

export default function CricketersList({cricketers}: CricketersListProps) {
  return (
    <ul>
      {cricketers.map((cricketer) => (
        <li key={cricketer.id}>{cricketer.name}</li>
      ))}
    </ul>
  )
}
