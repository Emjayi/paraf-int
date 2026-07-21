"use client";

import { Eye, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/src/shared/components/wrappers/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/wrappers/card";
import { Tabs, TabsList, TabsTrigger } from "@/src/shared/components/wrappers/tabs";
import { cn } from "@/src/shared/lib/cn";
import { formatFaNumber } from "@/src/shared/lib/format";
import type { RecentActivity } from "@/src/shared/lib/types";
import Image from "next/image";

const filters = ["نمایش همه", "امتیاز", "سکه", "دوگانه", "برداشت سکه", "انتقال سکه"] as const;
const types = [
  {label:"امتیاز", icon:"", color:""},
  {label:"سکه", icon:"", color:""},
  {label:"دوگانه", icon:"", color:""},
  {label:"برداشت سکه", icon:"", color:""},
  {label:"انتقال سکه", icon:"", color:""}]

type ActivityPanelsProps = {
  activities: RecentActivity[];
};

function amountLabel(activity: RecentActivity) {
  if (activity.coinAmount) {
    const sign = activity.coinAmount > 0 ? "+" : "-";
    return `${sign}${formatFaNumber(Math.abs(activity.coinAmount))} سکه`;
  }
  return `+${formatFaNumber(activity.scoreAmount)} امتیاز`;
}

export function ActivityPanels({ activities }: ActivityPanelsProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("نمایش همه");

  const rows = activities.slice(0, 9);

  return (
    <section className="mt-8 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]" aria-labelledby="recent-title">

      <Card className="rounded-[28px] border border-white/70 bg-white/90 shadow-[0_18px_44px_rgba(43,70,118,0.08)]">
        <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle id="recent-title">فعالیت‌های اخیر</CardTitle>
            <p className="text-sm text-slate-500">مروری بر آخرین فعالیت‌ها و دستاوردها</p>
          </div>
          <Button type="button" variant="ghost" className="justify-start rounded-xl text-slate-600 hover:bg-slate-100">
            <Eye size={15} />
            لیست کامل
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs value={filter} onValueChange={(value) => setFilter(value as (typeof filters)[number])}>
            <TabsList variant="line" className="flex flex-wrap justify-start gap-2">
              {filters.map((item) => (
                <TabsTrigger
                  key={item}
                  value={item}
                  className={cn(
                    "rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-500 after:hidden data-[active]:border-sky-200 data-[active]:bg-sky-50 data-[active]:text-sky-700",
                    filter === item && "border-sky-200 bg-sky-50 text-sky-700",
                  )}
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <ul className="space-y-3">
            {rows.map((activity, index) => (
              <li
                key={`${activity.taskTitle}-${index}`}
                className="grid gap-2 rounded-[22px] border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600 sm:grid-cols-[0.05fr_0.1fr_0.6fr_0.1fr_0.1fr__0.05fr] sm:items-center"
              >
                <strong className="text-sm text-sky-700">{amountLabel(activity)}</strong>
                <strong className="text-sm text-sky-700">{amountLabel(activity)}</strong>
                <p className="font-medium text-slate-800">{activity.taskTitle}</p>
                <span className="inline-flex w-fit rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                  موفق
                </span>
                <small className="text-xs text-slate-400">۲ روز پیش</small>
                <Info size={15} aria-hidden="true" className="text-slate-400" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="rounded-[28px] border border-white/70 bg-white/90 shadow-[0_18px_44px_rgba(43,70,118,0.08)]">
        <CardHeader>
          <CardTitle>نمودار فعالیت‌ها</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-col bg-slate-200 gap-4 rounded-lg p-4">
            <p className="text-sm leading-7 font-bold text-slate-600">اخیراً کاهشی بودی،<br/> برای حفظ سطح برنزی بیشتر مشارکت کن! 👀</p>
            <div className="flex flex-wrap gap-2 justify-end">
              <Button type="button" variant="secondary" className="px-4">
                <strong>دعوت دوستان</strong>
              </Button>
              <Button type="button" variant="secondary" className=" px-4">
                <strong>شرکت در نظرسنجی</strong>
              </Button>
            </div>
          </div>
          <p className="text-sm text-slate-500">
          نمودار تغییرات امتیاز بر اساس فعالیت 6 ماهه شما
          </p>
          <p className="text-sm text-slate-500">
            فعالیت شما نسبت به ماه گذشته <strong>۳۵٪ کاهش</strong> یافته.
          </p>
          <Image src={"/chart.svg"} width={300} height={200} alt="chart" className="w-full"/>
        </CardContent>
      </Card>
    </section>
  );
}
