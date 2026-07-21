import type { ComponentProps } from "react";
import { Progress as ShadProgress } from "@/src/shared/components/ui/progress";

export function Progress(props: ComponentProps<typeof ShadProgress>) {
  return <ShadProgress {...props} />;
}
