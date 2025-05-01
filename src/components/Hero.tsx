// 'use client';
import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    // bg-[var(--hero-background)]
    <section className="w-full overflow-hidden bg-gradient-to-r from-white to-[var(--hero-background)]">
      <Container>
        <div className="mx-auto w-full max-h-[85vh] min-h-[85vh] min-width-screen relative flex flex-col justify-start md:flex-row items-center">
          <div className="flex flex-col justify-between">
            <p className="text-2xl uppercase text-[var(--hero-text)] font-medium tracking-[0.2em]">
              New Collection
            </p>
            <h1
              className="text-8xl font-heading text-[var(--hero-text)] leading-tight tracking-normal"
              style={{ fontFamily: `'Playfair Display', serif` }}
            >
              Effortless <br /> Style
            </h1>
            <button className="w-fit bg-[var(--hero-button)] text-white mx-4 px-6 py-3 hover:bg-rose uppercase rounded-xs tracking-wider">
              Shop Now
            </button>
          </div>
          <div className="hidden md:block absolute bottom-0 right-0 z-10">
            <Image
              src="/images/Model_hero.png"
              alt="Lucent Nepal"
              width={500}
              height={400}
              className="object-contain"
              objectFit="cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
