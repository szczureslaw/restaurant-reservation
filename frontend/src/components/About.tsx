const About = () => {
  return (
    <section id="onas" className="py-16 bg-secondary fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">O nas</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/8B0000/FFFFFF?text=Zespół+Gusto"
              alt="Zespół restauracji"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-dark mb-4">
              Nasza restauracja to miejsce, gdzie tradycja łączy się z nowoczesnością. Od 20 lat serwujemy autorską kuchnię śródziemnomorską, opartą na sezonowych i lokalnych składnikach.
            </p>
            <p className="text-dark">
              Filozofia naszej kuchni to szacunek dla natury, smaku i Twojego czasu. Każdy posiłek to podróż gustowa, przygotowana z pasją przez nasz zespół kucharzy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;