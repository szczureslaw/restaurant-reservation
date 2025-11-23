// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Promotions from './components/Promotions';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

// --- NOWA GALERIA ---
const Gallery = () => {
  const images = [
    "https://placehold.co/600x400/8B0000/FFFFFF?text=Danio+1",
    "https://placehold.co/600x400/D4AF37/000000?text=Danio+2",
    "https://placehold.co/600x400/F5F5DC/8B0000?text=Interior",
    "https://placehold.co/600x400/2D2D2D/F5F5DC?text=Deser",
    "https://placehold.co/600x400/8B0000/FFFFFF?text=Wino",
    "https://placehold.co/600x400/D4AF37/000000?text=Stolik",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Nasze Smaki</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img src={src} alt={`Gusto ${i+1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// --- KONIEC GALERII ---

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Gallery /> {/* ← NOWA GALERIA */}
      <About />
      <Promotions />
      <ReservationForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;