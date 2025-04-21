import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-foh-navy to-foh-brown text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join CLASS and embark on a transformative educational experience that
          will shape your future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="beige">
            <Link href="https://admission.charusat.ac.in" target="_blank">
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
