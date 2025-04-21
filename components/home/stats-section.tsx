export function StatsSection() {
  return (
    <section className="py-12 bg-foh-peach/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-foh-navy mb-2">13+</p>
            <p className="text-gray-700">Expert Faculty</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-foh-brown mb-2">22+</p>
            <p className="text-gray-700">Years of Excellence</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-foh-beige mb-2">3</p>
            <p className="text-gray-700">Programs offered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
