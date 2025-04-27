import Image from "next/image";
import { School } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { cn } from "@/lib/utils";

// Array of campus life images with captions
const campusLifeImages = [
  {
    src: "/images/campus-life/1.png",
    alt: "Academic Excellence",
    caption: "Academic Excellence",
    description: "Nurturing scholarly pursuits and intellectual curiosity",
  },
  {
    src: "/images/campus-life/2.jpg",
    alt: "Cultural Activities",
    caption: "Cultural Activities",
    description: "Celebrating diversity through arts and expression",
  },
  {
    src: "/images/campus-life/3.jpg",
    alt: "Student Collaboration",
    caption: "Student Collaboration",
    description: "Building connections and collective knowledge",
  },
  {
    src: "/images/campus-life/4.png",
    alt: "Campus Events",
    caption: "Campus Events",
    description: "Engaging experiences that bring our community together",
  },
];

export function CampusLifeSection() {
  return (
    <section className="py-20 bg-foh-peach/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Campus Life"
          subtitle="Experience a vibrant campus life at CLASS with various academic and cultural activities"
          theme="accent"
          icon={<School className="h-6 w-6 text-foh-beige" />}
        />

        <div className="relative mt-12">
          {/* Single row of 4 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {campusLifeImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl 
                         shadow-[0_10px_20px_rgba(0,0,0,0.15)] 
                         hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] 
                         transition-all duration-500
                         hover:z-10 hover:scale-[1.02]"
              >
                {/* Equal aspect ratio container for all images */}
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-5">
                    <h3 className="text-white font-semibold text-xl mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                      {image.caption}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      {image.description}
                    </p>
                  </div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-foh-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced decorative elements with subtle shadows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-foh-accent/5 rounded-full blur-3xl -z-10 filter drop-shadow-lg"></div>
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-foh-accent/5 rounded-full blur-3xl -z-10 filter drop-shadow-lg"></div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-foh-accent/80 italic max-w-2xl mx-auto">
            Immerse yourself in a community that fosters intellectual growth,
            creativity, and meaningful connections.
          </p>
        </div>
      </div>
    </section>
  );
}
