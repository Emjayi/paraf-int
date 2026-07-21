import type { ComponentProps } from "react";
import { Button as ShadButton } from "@/src/shared/components/ui/button";

export type ButtonProps = ComponentProps<typeof ShadButton>;

export function Button(props: ButtonProps) {
  return <ShadButton {...props} />;
}
