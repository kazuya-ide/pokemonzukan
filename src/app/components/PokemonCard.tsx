// src/app/components/PokemonCard.tsx
interface PokemonCardProps {
    name: string;
    imageUrl: string;
  }
  
  const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
          <img src={imageUrl} alt={name} className="mx-auto w-48 h-48" /> 
      </div>
    );
  };
  
  export default PokemonCard;