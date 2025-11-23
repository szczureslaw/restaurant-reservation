const Promotions = () => {
  const offers = [
    {
      title: "Szczęśliwe godziny",
      desc: "W piątek od 17:00 do 19:00 – 20% taniej na wino!",
    },
    {
      title: "Romantyczny wieczór",
      desc: "Tylko w soboty – menu dla dwojga z kieliszkiem szampana.",
    },
    {
      title: "Lunch dnia",
      desc: "Codziennie od 12:00 do 15:00 – wyjątkowy zestaw lunchowy.",
    },
  ];

  return (
    <section id="promocje" className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Oferty specjalne</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="border border-primary rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 card-hover"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{offer.title}</h3>
              <p className="text-dark">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;