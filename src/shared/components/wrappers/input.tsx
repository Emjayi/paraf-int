import type { ComponentProps } from "react";
import { Input as ShadInput } from "@/src/shared/components/ui/input";

export function Input(props: ComponentProps<typeof ShadInput>) {
  return <ShadInput {...props} />;
}
