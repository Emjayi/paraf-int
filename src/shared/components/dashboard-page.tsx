"use client";

import { useEffect, useState } from "react";
import { ActivityPanels } from "@/src/shared/components/activity-panels";
import { FeatureGrid } from "@/src/shared/components/feature-grid";
import { Header } from "@/src/shared/components/header";
import { HeroSection } from "@/src/shared/components/hero-section";
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
import { LoginPage } from "@/src/shared/components/login-page";
import { useAuthStore } from "@/src/shared/lib/auth-storage";
import { LoaderCircle } from "lucide-react";

export function DashboardPage() {
  const { accessToken, hydrated } = useAuthStore();
  const [selectedVitrinId, setSelectedVitrinId] = useState<string>();
  const meQuery = useMeQuery();
  const vitrinsQuery = useVitrinsQuery();
  const levelsQuery = useLevelsQuery();
  const summaryQuery = useCustomerClubSummaryQuery(selectedVitrinId);
  const activitiesQuery = useRecentActivitiesQuery({ size: 10, userVitrinId: selectedVitrinId });

  useEffect(() => {
    if (selectedVitrinId && !vitrinsQuery.data?.some((item) => item.id === selectedVitrinId)) {
      setSelectedVitrinId(undefined);
    }
  }, [selectedVitrinId, vitrinsQuery.data]);

  if (!hydrated) {
    return (
      <main className="grid min-h-dvh place-items-center">
        <LoaderCircle className="animate-spin text-sky-600" size={32} />
      </main>
    );
  }

  if (!accessToken) return <LoginPage />;

  const me = meQuery.data ?? dashboardFallback.me;
  const levels = levelsQuery.data ?? dashboardFallback.levels;
  const summary = summaryQuery.data ?? dashboardFallback.summary;
  const activities = activitiesQuery.data ?? dashboardFallback.recentActivities;

  return (
    <div className="mx-auto w-full rtl">
      <Header coins={me.coins} scores={me.scores} />
      <main id="content">
        <section className="mx-auto w-[min(1360px,calc(100%-64px))] px-0 pb-[72px]">
        <HeroSection />
        <ProfileSummary
          me={me}
          vitrins={vitrinsQuery.data ?? []}
          selectedVitrinId={selectedVitrinId}
          onSelectVitrin={setSelectedVitrinId}
          summary={summary}
          levels={levels}
          isLoading={meQuery.isLoading || vitrinsQuery.isLoading || summaryQuery.isLoading}
        />
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
