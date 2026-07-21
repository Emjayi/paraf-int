"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/src/shared/lib/auth-storage";
import {
  fetchCustomerClubSummary,
  fetchCustomerClubSummaryForVitrin,
  fetchLevels,
  fetchMe,
  fetchRecentActivities,
  fetchVitrins,
  login,
} from "@/src/shared/lib/api";
import { dashboardFallback } from "@/src/shared/lib/dashboard-data";
import type { LoginRequest, RecentActivitiesTypeEnum } from "@/src/shared/lib/types";

export function useLoginMutation() {
  const setTokens = useAuthStore((state) => state.setTokens);
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (payload: LoginRequest) => login(payload),
    onSuccess: async (tokens) => {
      setTokens(tokens);
      try {
        const me = await fetchMe();
        setUser(me);
      } catch {
        setUser(dashboardFallback.me);
      }
    },
  });
}

export function useMeQuery() {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    enabled: Boolean(token),
    initialData: dashboardFallback.me,
  });
}

export function useVitrinsQuery() {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["vitrins"],
    queryFn: fetchVitrins,
    enabled: Boolean(token),
    initialData: dashboardFallback.vitrins,
  });
}

export function useLevelsQuery() {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["levels"],
    queryFn: fetchLevels,
    enabled: Boolean(token),
    initialData: dashboardFallback.levels,
  });
}

export function useCustomerClubSummaryQuery(userVitrinId?: string) {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["customer-club-summary", userVitrinId ?? "default"],
    queryFn: userVitrinId
      ? () => fetchCustomerClubSummaryForVitrin(userVitrinId)
      : fetchCustomerClubSummary,
    enabled: Boolean(token) || !userVitrinId,
    initialData: dashboardFallback.summary,
  });
}

export function useRecentActivitiesQuery(params?: {
  offset?: number;
  size?: number;
  type?: RecentActivitiesTypeEnum;
  userVitrinId?: string;
}) {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["recent-activities", params],
    queryFn: () => fetchRecentActivities(params ?? {}),
    enabled: Boolean(token) || !params?.userVitrinId,
    initialData: dashboardFallback.recentActivities,
  });
}

