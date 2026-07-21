import type { ComponentProps } from "react";
import {
  Tabs as ShadTabs,
  TabsContent as ShadTabsContent,
  TabsList as ShadTabsList,
  TabsTrigger as ShadTabsTrigger,
} from "@/src/shared/components/ui/tabs";

export type TabsProps = ComponentProps<typeof ShadTabs>;

export function Tabs(props: TabsProps) {
  return <ShadTabs {...props} />;
}

export function TabsList(props: ComponentProps<typeof ShadTabsList>) {
  return <ShadTabsList {...props} />;
}

export function TabsTrigger(props: ComponentProps<typeof ShadTabsTrigger>) {
  return <ShadTabsTrigger {...props} />;
}

export function TabsContent(props: ComponentProps<typeof ShadTabsContent>) {
  return <ShadTabsContent {...props} />;
}
