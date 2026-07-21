export enum EndUserRoleEnum {
  USER = "user",
  RETAILER = "retailer",
  WHOLESALER = "wholesaler",
  MARKETER = "marketer",
  PRODUCER = "producer",
  IMPORTER = "importer",
  MERCHANT = "merchant",
  DISTRIBUTOR = "distributor",
  BANK = "bank",
  GOVERNMENT = "government",
  INSTITUTE = "institute",
}

export enum RecentActivitiesTypeEnum {
  BOTH = "BOTH",
  COIN = "COIN",
  SCORE = "SCORE",
  SPENTCOIN = "SPENTCOIN",
  TRANSFERCOIN = "TRANSFERCOIN",
}

export type LoginRequest = {
  phone: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type UserMeResponse = {
  level: number;
  coins: number;
  scores: number;
  role?: EndUserRoleEnum;
};

export type UserVitrinSummary = {
  id: string;
  role: EndUserRoleEnum;
  companyName: string;
  level: number;
  scores: number;
};

export type LevelResponse = {
  name: string;
  scores: number;
  file: {
    link: string;
  };
};

export type CustomerClubSummary = {
  numberTasksCompleted: number;
  totalScoreMonthly: number;
  totalCoinMonthly: number;
};

export type RecentActivity = {
  type: RecentActivitiesTypeEnum;
  taskTitle: string;
  taskDescription: string;
  scoreAmount: number;
  coinAmount: number;
};

