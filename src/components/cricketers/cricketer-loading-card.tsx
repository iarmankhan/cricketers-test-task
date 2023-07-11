import { Card, CardContent, CardHeader, Skeleton } from "@/components/ui";

export default function CricketerLoadingCard() {
  return (
    <Card className="cursor-pointer">
      <CardHeader className="">
        <Skeleton className="w-1/2 h-4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="w-1/4 h-4" />
        <Skeleton className="w-1/4 h-4" />
        <Skeleton className="w-1/4 h-4" />
      </CardContent>
    </Card>
  );
}
