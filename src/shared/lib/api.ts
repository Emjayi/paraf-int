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
  "/api/paraf";

export const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ??
  "https://wholesaler-core-develop.web.parafacc.ir";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

type ApiEnvelope<T> = {
  success?: boolean;
  result?: T;
};

function unwrapResponse<T>(data: T | ApiEnvelope<T>): T {
  if (
    typeof data === "object" &&
    data !== null &&
    "result" in data &&
    data.result !== undefined
  ) {
    return data.result;
  }

  return data as T;
}

api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(request: LoginRequest) {
  const { data } = await api.post<LoginResponse | ApiEnvelope<LoginResponse>>(
    "/users/login",
    request,
  );
  return unwrapResponse(data);
}

export async function fetchMe() {
  const { data } = await api.get<UserMeResponse | ApiEnvelope<UserMeResponse>>(
    "/users/me",
  );
  return unwrapResponse(data);
}

export async function fetchVitrins() {
  const { data } = await api.get<
    UserVitrinSummary[] | ApiEnvelope<UserVitrinSummary[]>
  >("/users/vitrin/all-user");
  return unwrapResponse(data);
}

export async function fetchVitrin(userVitrinId: string) {
  const { data } = await api.get<
    UserVitrinSummary | ApiEnvelope<UserVitrinSummary>
  >(`/users/vitrin/${userVitrinId}`);
  return unwrapResponse(data);
}

export async function fetchLevels() {
  const { data } = await api.get<LevelResponse[] | ApiEnvelope<LevelResponse[]>>(
    "/levels",
  );
  return unwrapResponse(data);
}

export async function fetchCustomerClubSummary() {
  const { data } = await api.get<
    CustomerClubSummary | ApiEnvelope<CustomerClubSummary>
  >("/customer-club/summary");
  return unwrapResponse(data);
}

export async function fetchCustomerClubSummaryForVitrin(userVitrinId: string) {
  const { data } = await api.get<
    CustomerClubSummary | ApiEnvelope<CustomerClubSummary>
  >(`/customer-club/summary-user-vitrin/${userVitrinId}`);
  return unwrapResponse(data);
}

export async function fetchRecentActivities(params: {
  offset?: number;
  size?: number;
  type?: RecentActivitiesTypeEnum;
  userVitrinId?: string;
}) {
  const { data } = await api.get<
    RecentActivity[] | ApiEnvelope<RecentActivity[]>
  >("/recent-activities", { params });
  return unwrapResponse(data);
}
