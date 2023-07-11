import { useSimilarCricketers } from "@/lib/hooks/use-similar-cricketers";
import CricketersList from "@/components/cricketers/cricketers-list";
import { CricketersLoadingList } from "@/components/cricketers/cricketers-loading-list";

interface SimilarCricketersProps {
  id: string;
}

export function SimilarCricketers({ id }: SimilarCricketersProps) {
  const { data: similarCricketers, isLoading } = useSimilarCricketers(id);

  if (isLoading) return <CricketersLoadingList />;

  return <CricketersList cricketers={similarCricketers || []} minimal />;
}
