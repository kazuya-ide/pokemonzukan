// src/app/page.tsx
"use client";

import { useState } from "react";
import { fetchPokemonData } from "../utils/api";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
name: string;
sprites: {
    front_default: string;
 };
  id: number;
}
export default function Home() {
const [pokemonId, setPokemonId] = useState<string>("");
const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
const [error, setError] = useState<string | null>(null);

const handleSearch = async () => {
    if (!pokemonId) {
    setError("図鑑番号を入力してください。");
    return;
  }

  const id = Number(pokemonId)
  try {
    const data = await fetchPokemonData(id);
    setPokemonData(data);
    setError(null);
} catch (e: unknown) {
    setError(`エラーが発生しました: ${String(e)}`);
    setPokemonData(null);
}
};

return (
  <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-8">ポケモン図鑑</h1>
    <div className="mb-4 flex space-x-2">
      <input
        type="number"
        placeholder="図鑑番号を入力"
        className="border rounded px-3 py-2"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        検索
      </button>
    </div>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    {pokemonData && (
        <PokemonCard
        name={pokemonData.name}
        imageUrl={pokemonData.sprites.front_default}
        imageWidth={150}
        imageHeight={150}
      />
    )}
  </main>
);
}