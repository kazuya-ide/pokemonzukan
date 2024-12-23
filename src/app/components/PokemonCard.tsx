// src/app/components/PokemonCard.tsx
import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, imageWidth, imageHeight }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
            <Image
                src={imageUrl}
                alt={name}
                width={imageWidth}
                height={imageHeight}
                className="mx-auto"
            />
        </div>
    );
};

export default PokemonCard;