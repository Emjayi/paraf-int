"use client";

import { ActivityPanels } from "@/src/shared/components/activity-panels";
import { FeatureGrid } from "@/src/shared/components/feature-grid";
import { Header } from "@/src/shared/components/header";
import { HeroSection } from "@/src/shared/components/hero-section";
import LevelProgressCard from "@/src/shared/components/level-progress";
import ProfileSummary from "@/src/shared/components/profile-summary";
import Image from "next/image";
import { dashboardFallback } from "@/src/shared/lib/dashboard-data";
import {
  useCustomerClubSummaryQuery,
  useLevelsQuery,
  useMeQuery,
  useRecentActivitiesQuery,
  useVitrinsQuery,
} from "@/src/shared/hooks/use-dashboard-queries";
import Link from "next/link";

export function DashboardPage() {
  const meQuery = useMeQuery();
  const vitrinsQuery = useVitrinsQuery();
  const levelsQuery = useLevelsQuery();
  const summaryQuery = useCustomerClubSummaryQuery(vitrinsQuery.data?.[0]?.id);
  const activitiesQuery = useRecentActivitiesQuery({ size: 10 });

  const me = meQuery.data ?? dashboardFallback.me;
  const vitrin = vitrinsQuery.data?.[0] ?? dashboardFallback.vitrins[0];
  const levels = levelsQuery.data ?? dashboardFallback.levels;
  const summary = summaryQuery.data ?? dashboardFallback.summary;
  const activities = activitiesQuery.data ?? dashboardFallback.recentActivities;

  return (
    <div className="mx-auto w-full rtl">
      <Header />
      <main id="content">
        <section className="mx-auto w-[min(1360px,calc(100%-64px))] px-0 pb-[72px]">
        <HeroSection />
        <ProfileSummary />
        {/* <LevelProgressCard /> */}
        </section>
        <section className="">
          <Link href={"#"} className="w-full">
            <Image src={"/banner.png"} width={2000} height={400} alt="banner" className="object-cover object-center"/>
          </Link>
        </section>
        <section className="mx-auto w-[min(1360px,calc(100%-64px))] px-0 pb-[72px] rtl">
        <ActivityPanels activities={activities} />
        <FeatureGrid />
        </section>
      </main>
    </div>
  );
}
