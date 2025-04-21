import Image from "next/image";
import { School } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export function CampusLifeSection() {
  return (
    <section className="py-16 bg-foh-peach/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Campus Life"
          subtitle="Experience a vibrant campus life at CLASS with various academic and cultural activities"
          theme="accent"
          icon={<School className="h-6 w-6 text-foh-beige" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
            <Image
              src="/images/campus-life/1.png"
              alt="Campus Life"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
            <Image
              src="/images/campus-life/2.jpg"
              alt="Campus Life"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
            <Image
              src="/images/campus-life/3.jpg"
              alt="Campus Life"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg h-64 shadow-lg">
            <Image
              src="/images/campus-life/4.png"
              alt="Campus Life"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
