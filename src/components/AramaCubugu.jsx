import React from 'react';

function AramaCubugu({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Film ara..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}

export default AramaCubugu;