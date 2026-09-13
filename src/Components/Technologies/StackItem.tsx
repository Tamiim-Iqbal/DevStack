import type { ITechnology } from "../types/technologyType";

interface StackItemProps {
  technology: ITechnology;
  onRemove: (id: string) => void;
}

const StackItem = ({
  technology,
  onRemove,
}: StackItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-2">
      
      {/* Icon */}
      <img src={technology.icon} alt={technology.name} className="h-7 w-7 object-contain"/>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-semibold text-gray-900">{technology.name}</h3>

        <p className="mt-0.5 text-[9px] text-gray-400">{technology.category}</p>
      </div>

      {/* Remove */}
      <button onClick={() => onRemove(technology.id)} className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500" aria-label={`Remove ${technology.name}`}>×</button>
    </div>
  );
};

export default StackItem;