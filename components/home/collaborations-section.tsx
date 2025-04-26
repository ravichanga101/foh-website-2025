import Image from "next/image";
import { Users } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export function CollaborationsSection() {
  return (
    <section className="py-16 bg-foh-beige/30">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <SectionTitle
          title="Collaborations"
          subtitle="We partner with leading institutions and organizations to enhance the learning experience of our students"
          theme="primary"
          icon={<Users className="h-6 w-6 text-foh-brown" />}
        />

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-foh-peach/50 w-[250px]">
            <Image
              src="/images/collaborations/BritishCouncil_Logo.png"
              alt="British Council"
              width={200}
              height={100}
              className="max-h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-foh-peach/50 w-[250px]">
            <Image
              src="/images/collaborations/IDP-Education.jpg"
              alt="IDP Education"
              width={200}
              height={100}
              className="max-h-16 w-auto"
            />
          </div>

          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md border border-foh-peach/50 w-[250px]">
            <Image
              src="/images/collaborations/ets.webp"
              alt="ETS"
              width={200}
              height={100}
              className="max-h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
