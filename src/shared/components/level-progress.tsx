"use client";

import Image from "next/image";

const levels = [
  { key: "bronze", label: "سطح برنزی" },
  { key: "silver", label: "سطح نقره‌ای" },
  { key: "gold", label: "سطح طلایی" },
  { key: "diamond", label: "سطح الماس" },
];

export default function LevelProgressCard() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex w-full flex-col gap-6 lg:flex-row lg:items-start"
    >
      {/* Left pill card */}
      <div className="flex w-full max-w-sm shrink-0 flex-col items-center gap-4 rounded-[2.5rem] bg-gradient-to-b from-indigo-50 to-violet-100 px-8 py-8 text-center">
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-violet-500 shadow-sm">
          <div className="relative h-3.5 w-3.5 shrink-0">
            <Image src="" alt="امتیاز" fill className="object-contain" />
          </div>
          <span>۲۷۷+</span>
        </div>
        <p className="text-sm font-bold text-gray-700">
          امتیاز لازم تا <span className="text-violet-500">سطح نقره‌ای</span>
        </p>
        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-sky-400 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-sky-50">
          <div className="relative h-4 w-4 shrink-0">
            <Image src="" alt="ماموریت‌ها" fill className="object-contain" />
          </div>
          ماموریت‌ها
        </button>
      </div>

      {/* Right progress card */}
      <div className="w-full flex-1 rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100 px-6 py-8 sm:px-10">
        {/* Timeline */}
        <div className="relative h-40 w-full">
          {/* base line (not yet achieved) */}
          <div className="absolute top-[58%] left-0 right-0 h-[3px] rounded-full bg-white/60" />
          {/* achieved portion of line */}
          <div
            className="absolute top-[58%] right-0 h-[3px] rounded-full bg-gradient-to-l from-fuchsia-300 to-violet-300"
            style={{ width: "38%" }}
          />

          {/* Silver level (upcoming) */}
          <div className="absolute top-0 left-[8%] flex -translate-x-1/2 flex-col items-center gap-2">
            <div className="relative h-10 w-10 shrink-0 opacity-70">
              <Image src="" alt="سطح نقره‌ای" fill className="object-contain" />
            </div>
            <div className="mt-6 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-violet-500 shadow-sm">
              <div className="relative h-3 w-3 shrink-0">
                <Image src="" alt="امتیاز" fill className="object-contain" />
              </div>
              <span>۴۰۰</span>
            </div>
            <p className="mt-1 text-xs font-medium text-gray-400">سطح نقره‌ای</p>
            <p className="text-[11px] text-gray-400">۹۹۹ تا ۴۰۰</p>
          </div>

          {/* Current score marker */}
          <div className="absolute -top-4 left-[58%] z-20 -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-full bg-violet-600 px-4 py-1.5 text-sm font-bold text-white shadow-md">
              <div className="relative h-4 w-4 shrink-0">
                <Image src="" alt="امتیاز فعلی" fill className="object-contain" />
              </div>
              <span>۱۲۴</span>
            </div>
          </div>

          {/* Bronze level (current, achieved) */}
          <div className="absolute top-[-6%] left-[80%] flex -translate-x-1/2 flex-col items-center gap-1">
            <div className="relative h-16 w-16 shrink-0">
              <Image src="" alt="سطح برنزی" fill className="object-contain" />
            </div>
            <div className="z-10 -mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 ring-2 ring-white">
              <div className="relative h-3 w-3 shrink-0">
                <Image src="" alt="تکمیل شده" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-2 text-xs font-medium text-gray-600">سطح برنزی</p>
            <p className="text-[11px] text-gray-400">۳۹۹ تا ۵۰</p>
          </div>

          {/* Normal user (achieved / start) */}
          <div className="absolute top-[6%] left-[95%] flex -translate-x-1/2 flex-col items-center gap-1">
            <div className="relative h-8 w-8 shrink-0">
              <Image src="" alt="کاربر عادی" fill className="object-contain" />
            </div>
            <div className="z-10 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-violet-200">
              <div className="relative h-2.5 w-2.5 shrink-0">
                <Image src="" alt="تکمیل شده" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-2 whitespace-nowrap text-xs font-medium text-gray-600">
              کاربر عادی
            </p>
            <p className="text-[11px] text-gray-400">۴۹۹ تا ۰</p>
          </div>
        </div>

        {/* Breadcrumb of levels */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-white/50 pt-6">
          {levels.map((level, i) => (
            <div key={level.key} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative h-5 w-5 shrink-0">
                  <Image src="" alt={level.label} fill className="object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {level.label}
                </span>
              </div>
              {i < levels.length - 1 && (
                <span className="text-gray-300">&larr;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}