import axios from "axios";
import { getAuthToken } from "@/src/shared/lib/auth-storage";
import type {
  CustomerClubSummary,
  LevelResponse,
  LoginRequest,
  LoginResponse,
  RecentActivitiesTypeEnum,
  RecentActivity,
  UserMeResponse,
  UserVitrinSummary,
} from "@/src/shared/lib/types";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://wholesaler-core-v2.paraf.app/api";

export const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ??
  "https://wholesaler-core-develop.web.parafacc.ir";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(request: LoginRequest) {
  const { data } = await api.post<LoginResponse>("/users/login", request);
  return data;
}

export async function fetchMe() {
  const { data } = await api.get<UserMeResponse>("/users/me");
  return data;
}

export async function fetchVitrins() {
  const { data } = await api.get<UserVitrinSummary[]>("/users/vitrin/all-user");
  return data;
}

export async function fetchVitrin(userVitrinId: string) {
  const { data } = await api.get<UserVitrinSummary>(`/users/vitrin/${userVitrinId}`);
  return data;
}

export async function fetchLevels() {
  const { data } = await api.get<LevelResponse[]>("/levels");
  return data;
}

export async function fetchCustomerClubSummary() {
  const { data } = await api.get<CustomerClubSummary>("/customer-club/summary");
  return data;
}

export async function fetchCustomerClubSummaryForVitrin(userVitrinId: string) {
  const { data } = await api.get<CustomerClubSummary>(
    `/customer-club/summary-user-vitrin/${userVitrinId}`,
  );
  return data;
}

export async function fetchRecentActivities(params: {
  offset?: number;
  size?: number;
  type?: RecentActivitiesTypeEnum;
  userVitrinId?: string;
}) {
  const { data } = await api.get<RecentActivity[]>("/recent-activities", {
    params,
  });
  return data;
}

