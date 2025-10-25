import React from 'react';
import FilmKarti from './FilmKarti';

function FilmListe({ filmler, onFavoriToggle }) {
  if (filmler.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-xl">Hiç film bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filmler.map((film) => (
        <FilmKarti
          key={film.id}
          film={film}
          onFavoriToggle={onFavoriToggle}
        />
      ))}
    </div>
  );
}

export default FilmListe;