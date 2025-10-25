import React from 'react';

function KategoriFiltre({ kategoriler, secilenKategori, onKategoriSec }) {
  return (
    <div>
      <select
        value={secilenKategori}
        onChange={(e) => onKategoriSec(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white"
      >
        <option value="">Tüm Kategoriler</option>
        {kategoriler.map((kategori, index) => (
          <option key={index} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;