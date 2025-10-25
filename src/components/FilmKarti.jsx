import React from 'react';

function FilmKarti({ film, onFavoriToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800 flex-1">
          {film.baslik}
        </h3>
        <button
          onClick={() => onFavoriToggle(film.id)}
          className="text-2xl focus:outline-none hover:scale-110 transition-transform"
        >
          {film.favoriMi ? '❤️' : '🤍'}
        </button>
      </div>
      
      <p className="text-gray-600 mb-3">
        <span className="font-semibold">Yönetmen:</span> {film.yazar}
      </p>
      
      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
        {film.kategori}
      </span>
    </div>
  );
}

export default FilmKarti;