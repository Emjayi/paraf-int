"use client";

import Image from "next/image";
import { Button } from "@/src/shared/components/wrappers/button";
import { BadgeCheck, CircleAlert, CircleCheckBig, SquareCheckBig } from "lucide-react";

export default function ProfileSummary() {
  return (
    <div  className="w-full text-right">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-1">
        {/* Right side club switcher */}
        <div className="order-1 bg-linear-to-l py-2 from-transparent pl-12 via-white/50 to-transparent flex items-center gap-3 md:order-1">
          <span className="text-sm text-gray-500 whitespace-nowrap">
            انتخاب باشگاه مشتریان:
          </span>
          <div className="flex bg-muted rounded-md p-1 items-center gap-2">
            <Button className=" border-sky-500 bg-white px-5 py-2 text-sm font-medium text-black hover:bg-muted">
              پروفایل شخصی
            </Button>
            <Button className=" bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500 hover:border-sky-500 hover:bg-muted hover:text-black">
              موبایل پاسارگاد
            </Button>
          </div>
        </div>
        {/* Left side links (visually left, first in RTL source order would be right, but matches image) */}
        <div className="order-2 bg-linear-to-l py-2 from-transparent via-white/50 to-transparent pr-12 flex items-center gap-6 md:order-2">
          <Button variant="link" className="text-sm text-gray-500 hover:text-gray-700">
            سوالات متداول شما
          </Button>
          <Button variant="link" className="text-sm text-gray-500 hover:text-gray-700">
            قوانین و مقررات
          </Button>
        </div>

      </div>

      {/* Main content */}
      <div className="grid bg-white rounded-2xl grid-cols-1 gap-0 px-6 py-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {/* Column 3: profile card */}
        <div className="flex items-center justify-start gap-4 px-4 py-4">

          <div className="relative h-32 w-32 p-2 shrink-0 overflow-hidden rounded-xl bg-white drop-shadow-zinc-300 drop-shadow-xl ">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
            <Image src="/profileImage.png" alt="آرین رستگار" fill className="object-cover z-20 rotate-y-180" />
            <Image src="/profile.svg" alt="آرین رستگار" fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-gray-800">آرین رستگار</h3>
              <div className="relative h-4 w-4 shrink-0">
                <BadgeCheck className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-gray-400"><strong>تعمیرکار موبایل</strong> / مشهد، ایران </p>
            <span className="w-fit rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
              مغازه‌دار
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <div className="relative h-4 w-4 shrink-0">
              <SquareCheckBig className="h-3 w-3"/>
              </div>
              <span>ماموریت انجام‌شده:</span>
              <span className="font-bold text-black">۱۷</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-2 hidden w-px self-stretch bg-gray-200 md:block" />

        {/* Column 2: mission banner */}
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-4">
          <div className="flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-500">
            <CircleAlert className="h-3 w-3 "/>
            <span>وقت کمی مونده، ماموریتت رو همین الان انجام بده.</span>
          </div>
          <Button className=" max-w-xs gap-2 rounded-lg bg-sky-500 py-5 text-sm font-medium hover:bg-sky-600">
            مشاهده ماموریت
            <SquareCheckBig className="h-3 w-3"/>
          </Button>
        </div>

        {/* Divider */}
        <div className="mx-2 hidden w-px self-stretch bg-gray-200 md:block" />

        {/* Column 1: coins / level cards + discount row */}
        <div className="flex flex-col gap-4 px-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Coin card */}
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-4">
              <div className="relative h-9 w-9 shrink-0">
                <Image src="/cup.png" alt="سکه" fill className="object-contain" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-800">۲,۰۵۷ سکه</p>
                <p className="text-xs text-gray-400">۲۵۹,۷۰۰ تومان</p>
              </div>
              <button className="mr-auto text-gray-400">
                <div className="relative h-4 w-4">
                  <Image src="/coins.png" alt="اطلاعات" fill className="object-contain" />
                </div>
              </button>
            </div>

            {/* Level card */}
            <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-gray-200 px-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-800">سطح برنزی</p>
                <div className="relative h-10 w-20 shrink-0">
                  <Image src="/coins.png" alt="سطح برنزی" fill className="object-contain" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-400">
                  <div className="relative h-4 w-4">
                    <Image src="/cup.png" alt="اطلاعات" fill className="object-contain" />
                  </div>
                </button>
                <span className="text-xs text-gray-400">امتیاز ۱۲۴</span>
                <div className="relative h-3 w-3">
                  <Image src="/cup.png" alt="امتیاز" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Discount / streak row */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <button className="text-gray-400">
                <div className="relative h-4 w-4">
                  <Image src="/sale.png" alt="قبلی" fill className="object-contain" />
                </div>
              </button>
              <span>۳۵ روز اخیر</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                معادل: <span className="font-medium text-gray-600">۵۶ امتیاز</span>
              </span>
              <div className="flex items-center gap-1">
                <div className="relative h-4 w-4 shrink-0">
                  <Image src="/coins.png" alt="تخفیف" fill className="object-contain" />
                </div>
                <span>
                  سکه دریافتی از طرح تخفیف:{" "}
                  <span className="font-medium text-gray-600">۵۶۱ سکه</span>
                </span>
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}