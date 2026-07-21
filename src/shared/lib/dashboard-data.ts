import type {
  CustomerClubSummary,
  LevelResponse,
  RecentActivity,
  RecentActivitiesTypeEnum,
  UserMeResponse,
  UserVitrinSummary,
} from "@/src/shared/lib/types";
import { EndUserRoleEnum } from "@/src/shared/lib/types";

export const navLinks = ["کالا", "خدمات", "فروشندگان", "نمایندگی‌ها"] as const;

export const profileTabs = [
  { id: "personal", label: "پروفایل شخصی" },
  { id: "pasarkard", label: "موبایل پاسارکد" },
] as const;

export const levelTabs = [
  { label: "سطح الماس", icon: "diamond" },
  { label: "سطح طلایی", icon: "trophy" },
  { label: "سطح نقره‌ای", icon: "cup" },
  { label: "سطح برنزی", icon: "cup" },
] as const;

export const activityFilters = [
  "همه",
  "امتیاز",
  "سکه",
  "دوگانه",
  "برداشت سکه",
  "انتقال سکه",
] as const;

export const featureCards = [
  {
    title: "ارسال رایگان",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ...",
  },
  {
    title: "پشتیبانی حرفه‌ای",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ...",
  },
  {
    title: "جوایز ویژه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ...",
  },
  {
    title: "شبکه همکاران",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ...",
  },
  {
    title: "رویدادهای ویژه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ...",
  },
  {
    title: "گزارش فروش",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با ...",
  },
] as const;

export const dashboardFallback: {
  me: UserMeResponse;
  vitrins: UserVitrinSummary[];
  summary: CustomerClubSummary;
  levels: LevelResponse[];
  recentActivities: RecentActivity[];
} = {
  me: {
    level: 17,
    coins: 2097,
    scores: 124,
  } satisfies UserMeResponse,
  vitrins: [
    {
      id: "default",
      role: EndUserRoleEnum.WHOLESALER,
      companyName: "پاراف",
      level: 17,
      scores: 124,
    } satisfies UserVitrinSummary,
  ],
  summary: {
    numberTasksCompleted: 56,
    totalScoreMonthly: 124,
    totalCoinMonthly: 511,
  } satisfies CustomerClubSummary,
  levels: [
    { name: "سطح برنزی", scores: 124, file: { link: "#" } },
    { name: "سطح نقره‌ای", scores: 400, file: { link: "#" } },
    { name: "سطح طلایی", scores: 900, file: { link: "#" } },
    { name: "سطح الماس", scores: 1400, file: { link: "#" } },
  ] satisfies LevelResponse[],
  recentActivities: [
    {
      type: "SCORE" as RecentActivitiesTypeEnum,
      taskTitle: "پاسخ تیکت شما درباره «شکایت فنی»",
      taskDescription: "توسط تیم پشتیبانی داده شد.",
      scoreAmount: 10,
      coinAmount: 0,
    },
    {
      type: "COIN" as RecentActivitiesTypeEnum,
      taskTitle: "وضعیت «همایش پاراف‌کلاب» نهایی شد.",
      taskDescription: "مبلغ جایزه ثبت شد.",
      scoreAmount: 0,
      coinAmount: 5,
    },
    {
      type: "BOTH" as RecentActivitiesTypeEnum,
      taskTitle: "ارسال لینک «دعوت دوستان»",
      taskDescription: "دوست شما ثبت‌نام موفق داشت.",
      scoreAmount: 20,
      coinAmount: 0,
    },
    {
      type: "SPENTCOIN" as RecentActivitiesTypeEnum,
      taskTitle: "برداشت ۱۷۰ سکه",
      taskDescription: "معادل ۳۲۰ هزار تومان با کیف پول",
      scoreAmount: 0,
      coinAmount: -170,
    },
    {
      type: "TRANSFERCOIN" as RecentActivitiesTypeEnum,
      taskTitle: "۳۰۰ سکه منتقل شد",
      taskDescription: "به حساب «برترین برندسازی»",
      scoreAmount: 0,
      coinAmount: -300,
    },
  ] satisfies RecentActivity[],
};

export const heroText = {
  kicker: "آرین عزیز",
  title: "به پاراف‌کلاب (باشگاه مشتریان پاراف) خوش اومدی!",
} as const;

export const promoText = {
  discount: "23% تخفیف تا",
  title: "جشن ۱۹ سالگی ایکس‌ویژن؛\nشما هم هدیه بگیرید",
  subtitle: "آپان ۱۷ هدیه برنده خوش‌شانس",
  cta: "خرید",
} as const;
