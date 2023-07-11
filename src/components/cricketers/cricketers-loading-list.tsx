import CricketerLoadingCard from "@/components/cricketers/cricketer-loading-card";

export function CricketersLoadingList() {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {new Array(3).fill(0).map((_, idx) => (
        <CricketerLoadingCard key={idx} />
      ))}
    </div>
  );
}
