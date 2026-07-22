"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import { Eye, EyeOff, LoaderCircle, LockKeyhole, Phone } from "lucide-react";
import Image from "next/image";
import { useLoginMutation } from "@/src/shared/hooks/use-dashboard-queries";
import { Button } from "@/src/shared/components/wrappers/button";
import { Input } from "@/src/shared/components/wrappers/input";

function getLoginError(error: unknown) {
  if (error instanceof AxiosError) {
    const payload = error.response?.data as { message?: unknown } | undefined;
    const message = payload?.message;
    if (typeof message === "string") return message;
  }
  return "ورود انجام نشد. شماره موبایل و رمز عبور را بررسی کنید.";
}

export function LoginPage() {
  const loginMutation = useLoginMutation();
  const [phone, setPhone] = useState("989027927890");
  const [password, setPassword] = useState("p.123456");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-dvh place-items-center bg-slate-100 px-5 py-10">
      <form
        className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          loginMutation.mutate({ phone: phone.trim(), password });
        }}
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <Image src="/logo.svg" width={100} height={42} alt="پاراف" priority />
          <h1 className="mt-6 text-2xl font-black text-slate-900">ورود به پاراف‌کلاب</h1>
          <p className="mt-2 text-sm text-slate-500">اطلاعات حساب خود را وارد کنید.</p>
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">شماره موبایل</span>
            <span className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 px-3 focus-within:border-sky-500">
              <Phone size={17} className="text-slate-400" />
              <Input
                dir="ltr"
                inputMode="tel"
                autoComplete="username"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="h-auto border-0 px-0 text-left shadow-none focus-visible:ring-0"
                required
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-slate-700">رمز عبور</span>
            <span className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 px-3 focus-within:border-sky-500">
              <LockKeyhole size={17} className="text-slate-400" />
              <Input
                dir="ltr"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-auto border-0 px-0 text-left shadow-none focus-visible:ring-0"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="text-slate-400 hover:text-sky-600"
                aria-label={showPassword ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </span>
          </label>
        </div>

        {loginMutation.isError ? (
          <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
            {getLoginError(loginMutation.error)}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={loginMutation.isPending}
          className="mt-6 h-12 w-full rounded-xl bg-sky-600 text-sm font-bold hover:bg-sky-700"
        >
          {loginMutation.isPending ? <LoaderCircle className="animate-spin" size={18} /> : null}
          {loginMutation.isPending ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </main>
  );
}
