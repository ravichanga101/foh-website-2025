import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 bg-foh-brown text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-white"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Shape Your Future
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join CLASS and discover a world of opportunities that will empower
            you to achieve your academic and professional aspirations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              asChild
              size="lg"
              variant="beige"
              className="text-lg px-8 py-6 font-medium hover:scale-105 transition-transform"
            >
              <Link href="https://admission.charusat.ac.in" target="_blank">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-foh-beige"></div>
    </section>
  );
}
