import type { ComponentProps } from "react";
import {
  Card as ShadCard,
  CardAction as ShadCardAction,
  CardContent as ShadCardContent,
  CardDescription as ShadCardDescription,
  CardFooter as ShadCardFooter,
  CardHeader as ShadCardHeader,
  CardTitle as ShadCardTitle,
} from "@/src/shared/components/ui/card";

export type CardProps = ComponentProps<typeof ShadCard>;

export function Card(props: CardProps) {
  return <ShadCard {...props} />;
}

export function CardHeader(props: ComponentProps<typeof ShadCardHeader>) {
  return <ShadCardHeader {...props} />;
}

export function CardTitle(props: ComponentProps<typeof ShadCardTitle>) {
  return <ShadCardTitle {...props} />;
}

export function CardDescription(props: ComponentProps<typeof ShadCardDescription>) {
  return <ShadCardDescription {...props} />;
}

export function CardAction(props: ComponentProps<typeof ShadCardAction>) {
  return <ShadCardAction {...props} />;
}

export function CardContent(props: ComponentProps<typeof ShadCardContent>) {
  return <ShadCardContent {...props} />;
}

export function CardFooter(props: ComponentProps<typeof ShadCardFooter>) {
  return <ShadCardFooter {...props} />;
}
