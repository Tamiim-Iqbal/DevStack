import type { ITechnology } from "../types/technologyType";

interface TechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  onAddToStack: (technology: ITechnology) => void;
}

const TechnologyCard = ({technology, selectedTechnologies,onAddToStack }: TechnologyCardProps) => { 
    const isAdded = selectedTechnologies.some(
        (item) => item.id === technology.id );

  return (
    <div className={`flex h-full flex-col rounded-xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md 
        ${ isAdded ? "border-pink-300": "border-gray-200" }`} >

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img src={technology.icon} alt={technology.name} className="h-7 w-7 object-contain"/>

        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-500"> {technology.badge} </span>
      </div>

      {/* Name */}
      <h2 className="mt-3 text-md font-bold text-gray-900"> {technology.name}</h2>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-[12px] leading-4 text-gray-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-3 flex items-center justify-between gap-2 text-[10px]">
        <span className="rounded-sm bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>

        <span className="text-gray-500">{technology.difficulty} </span>

        <span className="flex items-center gap-1 text-gray-600">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-3 w-full cursor-pointer rounded-md border py-2 text-[11px] font-bold transition-colors ${
          isAdded
            ? "cursor-not-allowed border-0 bg-pink-100 text-pink-600"
            : "border-transparent bg-[#080d1b] text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;