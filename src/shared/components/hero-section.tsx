import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="my-12 flex w-full justify-center gap-6 overflow-hidden rounded-[32px] p-6 text-white md:items-center"
      aria-labelledby="hero-title"
    >
      <Image src={"/firework.svg"} width={170} height={170} className="absolute delay-50 animate-ping" alt="cup" />
      <Image src={"/firework.svg"} width={170} height={170} className="absolute translate-x-90 delay-500 animate-ping" alt="cup" />
      <Image src={"/firework.svg"} width={170} height={170} className="absolute -translate-x-90 delay-1000 animate-ping" alt="cup" />
      <div className="rounded-full peer/hero bg-white p-6 backdrop-blur-sm pb-12 pr-12 pl-36">
        <p className="mb-3 text-sm text-black">آرین عزیز</p>
        <h1 id="hero-title" className="text-2xl text-purple-500 font-black leading-[1.9] md:text-[2rem]">
          به  <span className=" animate-pulse ">پاراف‌کلاب <span className="text-sm">(باشگاه مشتریان پاراف)</span></span> خوش اومدی!
        </h1>
      </div>
      <div className="">
      <Image src={"/cup.svg"} width={270} height={270} className="absolute -translate-y-35 translate-x-40 animate-wiggle-3" alt="cup" />
      <Image src={"/bag.svg"} width={160} height={160} className="absolute -translate-y-4 translate-x-50 animate-wiggle-2" alt="bag" />
      </div>
    </section>
  );
}
