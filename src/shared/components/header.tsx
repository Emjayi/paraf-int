"use client";

import {
  ArrowRight,
  Bell,
  ChevronDown,
  ChevronLeft,
  CircleQuestionMark,
  Grid2X2,
  Languages,
  LogOut,
  Search,
  ShoppingCart,
  Trophy,
} from "lucide-react";
import { Button } from "@/src/shared/components/wrappers/button";
import { Input } from "@/src/shared/components/wrappers/input";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/src/shared/lib/auth-storage";
import { formatFaNumber } from "@/src/shared/lib/format";

const navItems = ["کالا", "خدمات", "فروشندگان", "نمایندگی‌ها"];
export function Header({ coins, scores }: { coins: number; scores: number }) {
  const clear = useAuthStore((state) => state.clear);
  return (
    <header className="sticky top-0 z-50" aria-label="سربرگ">
      <div
        className="grid w-full h-auto gap-1 border-b border-slate-200/80 bg-white px-4 py-2 md:grid-cols-[0.3fr_0.5fr_0.5fr_0.6fr] md:items-center md:px-14"
        
      >
        <div className="inline-flex items-center justify-start gap-3" aria-label="Paraf">
          <Image src={"logo.svg"} height={30} width={80} alt="paraf logo"/> 
          <div className="grid gap-px text-right text-[12px] leading-5 text-[#347cab]">
            <span>بازار کالا و خدمات</span>
            <strong className="text-[11px]">ساده، امن، بی مرز</strong>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-start gap-x-7 gap-y-2 text-sm text-slate-600" aria-label="ناوبری اصلی">
          {navItems.map((item) => (
            <a href="#" key={item} className="inline-flex font-bold items-center gap-1.5">
              {item}
              {item !== "نمایندگی‌ها" ? <ChevronDown aria-hidden="true" size={14} /> : null}
            </a>
          ))}
        </nav>

        
        <label className="flex text-xs items-center justify-end gap-2 rounded-full border border-slate-300 bg-zinc-100 px-3 shadow-[0_8px_22px_rgba(43,70,118,0.08)]">
          <span className="sr-only">جستجو</span>
          <Input
            placeholder="جستجو در آگهی‌ها..."
            type="search"
            className=" border-0 bg-transparent px-1 shadow-none ring-0 focus-visible:border-0 focus-visible:ring-0"
          />
          <Search size={17} aria-hidden="true" className="text-slate-400" />
        </label>

        <div className="flex items-center justify-self-end gap-2">
        <Button
          type="button"
          variant="ghost"
          className="h-[30px] text-zinc-400 justify-self-start hover:bg-transparent px-3"
        >
          <span className="text-xs font-bold">
          فارسی
          <span aria-hidden="true">/</span>
          IRT
          </span>
          <Languages size={14} />
        </Button>
          <Button
            type="button"
            variant="outline"
            className="h-[34px] rounded-lg border-none px-3 text-[13px] shadow-none"
          >
            <span className="font-bold text-sm text-slate-800">
            ثبت آگهی جدید
            </span>
          </Button>
          <div className="border-r-2 pr-2 border-zinc-200 flex">
          <Button type="button" variant="ghost" size="icon" className="size-[34px] text-slate-700 hover:bg-slate-100" aria-label="اعلان‌ها">
            <Bell size={18}/>
          </Button>
          <Button type="button" variant="ghost" size="icon" className="size-[34px] text-slate-700 hover:bg-slate-100" aria-label="سبد خرید">
            <ShoppingCart size={18} />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="size-[34px] text-slate-700 hover:bg-slate-100" aria-label="دسته‌بندی‌ها">
            <Grid2X2 size={18} />
          </Button>
          <Button type="button" onClick={clear} variant="ghost" size="icon" className="size-[34px] text-rose-500 hover:bg-rose-50" aria-label="خروج">
            <LogOut size={18} />
          </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-3 px-4 py-1 bg-zinc-100 border-b border-slate-200 text-slate-500 md:grid-cols-[360px_1fr_220px] md:items-center md:px-14" role="search">
        <div className="flex gap-2 text-xs">
        <div>
          <Link href={"../"} className="flex gap-2 items-center font-bold">
            <ArrowRight className="h-4 w-4"/>
            <p className="text-black">برگشت</p>
          </Link>
        </div>
        <div>
          <div className="flex gap-2 items-center font-bold">
          <Link href={"#"}>
            <p className="text-foreground">صفحه اصلی</p>
          </Link>
            <ChevronLeft className="h-4 w-4"/>
            <Link href={"#"}>
            <p className="text-muted-foreground">پاراف کلاب</p>
            </Link>
          </div>
        </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Button variant={"default"} className="inline-flex rounded-sm bg-white text-black hover:bg-white/80 border-zinc-300 h-[30px] items-center gap-1.5 px-3 shadow-[0_8px_22px_rgba(43,70,118,0.08)]">
            <span className="text-xs font-bold text-gray-500">کیف پول:</span>
            <strong className="text-slate-800">{formatFaNumber(coins)}</strong>
            <small className="text-xs text-slate-500">سکه</small>
          </Button>
          <CircleQuestionMark className="h-4 w-4"/>
          <Button
            type="button"
            variant="secondary"
            className="h-[30px] min-w-24 rounded-full border border-slate-200 bg-[linear-gradient(90deg,#6d64de,#8d44db)] px-3 text-xs font-bold text-white shadow-[0_8px_22px_rgba(43,70,118,0.08)]"
          >
            <span>{formatFaNumber(scores)}</span>
            <Trophy size={14} />
          </Button>
        </div>
      </div>

    </header>
  );
}
