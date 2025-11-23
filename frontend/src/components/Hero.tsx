import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-primary to-red-800 text-light py-28 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-3xl mx-auto fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Smakuj <span className="text-accent">Wyjątkowość</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Autorska kuchnia śródziemnomorska w sercu miasta. Zarezerwuj stolik i zanurz się w świecie aromatów.
        </p>
        <Link
          to="rezerwacja"
          smooth={true}
          duration={700}
          className="btn-secondary inline-block cursor-pointer"
        >
          Zarezerwuj stolik
        </Link>
      </div>
    </section>
  );
};

export default Hero;