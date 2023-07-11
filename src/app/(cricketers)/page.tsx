"use client"

import CricketersListFilters from "@/components/cricketers/cricketers-list-filters";
import CricketersList from "@/components/cricketers/cricketers-list";

export default function CricketersListPage() {
  return (
    <div>
      <CricketersListFilters />

      <CricketersList cricketers={[]} />
    </div>
  )
}
