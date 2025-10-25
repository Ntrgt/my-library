import { useState } from 'react';
import filmlerData from './data/filmler';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import FavoriPaneli from './components/FavoriPaneli';
import FilmListe from './components/FilmListe';
import './App.css';

function App() {
  const [filmler, setFilmler] = useState(filmlerData);
  const [aramaMetni, setAramaMetni] = useState('');
  const [secilenKategori, setSecilenKategori] = useState('');

  // Kategorileri al (benzersiz)
  const kategoriler = [...new Set(filmler.map(film => film.kategori))];

  // Favori toggle fonksiyonu
  const favoriToggle = (id) => {
    setFilmler(filmler.map(film => 
      film.id === id ? { ...film, favoriMi: !film.favoriMi } : film
    ));
  };

  // Filtreleme
  const filtrelenmisFilmler = filmler.filter(film => {
    const aramaUyumu = film.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUyumu = secilenKategori === '' || film.kategori === secilenKategori;
    return aramaUyumu && kategoriUyumu;
  });

  // Favori sayısı
  const favoriSayisi = filmler.filter(film => film.favoriMi).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            🎬 Film Kütüphanesi
          </h1>
          <p className="text-gray-600 text-lg">
            Favori filmlerinizi keşfedin ve yönetin
          </p>
        </header>

        {/* Favori Paneli */}
        <FavoriPaneli 
          favoriSayisi={favoriSayisi} 
          toplamSayi={filmler.length} 
        />

        {/* Filtre Bölümü */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <AramaCubugu 
              value={aramaMetni} 
              onChange={setAramaMetni} 
            />

            <KategoriFiltre
              kategoriler={kategoriler}
              secilenKategori={secilenKategori}
              onKategoriSec={setSecilenKategori}
            />
          </div>

          <div className="mt-5 flex items-center justify-between bg-gray-100 rounded-lg px-5 py-3">
            <span className="text-gray-700 font-semibold">
              Gösterilen Film Sayısı:
            </span>
            <span className="bg-blue-600 text-white font-bold text-lg px-4 py-1 rounded-full">
              {filtrelenmisFilmler.length}
            </span>
          </div>
        </div>

        {/* Film Listesi */}
        <FilmListe 
          filmler={filtrelenmisFilmler} 
          onFavoriToggle={favoriToggle} 
        />
      </div>
    </div>
  );
}

export default App;