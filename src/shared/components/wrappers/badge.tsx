import type { ComponentProps } from "react";
import { Badge as ShadBadge } from "@/src/shared/components/ui/badge";

export function Badge(props: ComponentProps<typeof ShadBadge>) {
  return <ShadBadge {...props} />;
}
