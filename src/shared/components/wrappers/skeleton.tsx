import type { ComponentProps } from "react";
import { Skeleton as ShadSkeleton } from "@/src/shared/components/ui/skeleton";

export function Skeleton(props: ComponentProps<typeof ShadSkeleton>) {
  return <ShadSkeleton {...props} />;
}
