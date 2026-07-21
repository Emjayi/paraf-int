import { Card, CardContent } from "@/src/shared/components/wrappers/card";
import { ImageSlot } from "@/src/shared/components/image-slot";
import Image from "next/image";

const features = [
  {name:"جوایز ویژه",image:"/features/gift.png"},
  {name:"پشتیبانی حرفه‌ای",image:"/features/support.png"},
  {name:"ارسال رایگان",image:"/features/rocket.png"},
  {name:"گزارش فروش",image:"/features/chart.png"},
  {name:"رویدادهای ویژه",image:"/features/calander.png"},
  {name:"شبکه همکاران",image:"/features/family.png"},
];

export function FeatureGrid() {
  return (
    <section className="mt-8" aria-labelledby="features-title">
      <h2 id="features-title" className="mb-5 text-xl font-black text-slate-800">
        ویژگی‌های <span className="text-sky-600">پاراف‌کلاب</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <Card className="rounded-[24px] border border-white/70 bg-white/90 shadow-[0_18px_44px_rgba(43,70,118,0.08)]" key={feature.name}>
            <CardContent className="flex flex-col items-center gap-4 p-5">
              <Image src={feature.image} width={150} height={150} alt="جای آیکون" />
              <h3 className="text-base font-bold text-slate-800">{feature.name}</h3>
              <p className="text-sm leading-7 text-slate-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
