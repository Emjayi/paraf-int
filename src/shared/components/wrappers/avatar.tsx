import type { ComponentProps } from "react";
import {
  Avatar as ShadAvatar,
  AvatarFallback as ShadAvatarFallback,
  AvatarImage as ShadAvatarImage,
} from "@/src/shared/components/ui/avatar";

export function Avatar(props: ComponentProps<typeof ShadAvatar>) {
  return <ShadAvatar {...props} />;
}

export function AvatarImage(props: ComponentProps<typeof ShadAvatarImage>) {
  return <ShadAvatarImage {...props} />;
}

export function AvatarFallback(props: ComponentProps<typeof ShadAvatarFallback>) {
  return <ShadAvatarFallback {...props} />;
}
