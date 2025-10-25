import React from 'react';

function FavoriPaneli({ favoriSayisi, toplamSayi }) {
  return (
    <div className="bg-blue-600 rounded-xl shadow-lg p-6 mb-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Favori Filmlerim</h2>
          <p className="text-lg text-blue-100">
            Toplam <span className="font-bold">{favoriSayisi}</span> favori film
          </p>
        </div>
        <div className="text-5xl">
          ⭐
        </div>
      </div>
      <div className="mt-4 bg-white/20 rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${(favoriSayisi / toplamSayi) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default FavoriPaneli;