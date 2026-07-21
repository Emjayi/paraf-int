import type { ComponentProps } from "react";
import { Separator as ShadSeparator } from "@/src/shared/components/ui/separator";

export function Separator(props: ComponentProps<typeof ShadSeparator>) {
  return <ShadSeparator {...props} />;
}
