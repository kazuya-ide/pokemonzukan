export interface Pokemon {
    id: number;
    name: string;
    image: string | null;
    types: string[];
    description: string | null;
    stats: {
        [key: string]: number;
    };
}