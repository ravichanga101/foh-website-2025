import Image from "next/image";

interface HeroProps {
  readonly title: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageWidth?: number;
  readonly imageHeight?: number;
}

export function Hero({
  title,
  imageSrc,
  imageAlt,
  imageWidth = 1600,
  imageHeight = 600,
}: HeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 flex items-end justify-center bg-dark-800/50">
        <div className="px-6 py-6 bg-deepblue-700/70 backdrop-blur-sm rounded-lg max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center tracking-wide leading-tight">
            {title}
          </h1>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-[500px] object-cover"
      />
    </section>
  );
}
