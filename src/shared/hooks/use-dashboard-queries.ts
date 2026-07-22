"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import type { LoginRequest, RecentActivitiesTypeEnum } from "@/src/shared/lib/types";

export function useLoginMutation() {
  const queryClient = useQueryClient();
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: (payload: LoginRequest) => login(payload),
    onSuccess: (tokens) => {
      setTokens(tokens);
      void queryClient.invalidateQueries();
    },
  });
}

export function useMeQuery() {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    enabled: Boolean(token),
  });
}

export function useVitrinsQuery() {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["vitrins"],
    queryFn: fetchVitrins,
    enabled: Boolean(token),
  });
}

export function useLevelsQuery() {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["levels"],
    queryFn: fetchLevels,
    enabled: Boolean(token),
  });
}

export function useCustomerClubSummaryQuery(userVitrinId?: string) {
  const token = useAuthStore((state) => state.accessToken);
  return useQuery({
    queryKey: ["customer-club-summary", userVitrinId ?? "default"],
    queryFn: userVitrinId
      ? () => fetchCustomerClubSummaryForVitrin(userVitrinId)
      : fetchCustomerClubSummary,
    enabled: Boolean(token),
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
    enabled: Boolean(token),
  });
}
