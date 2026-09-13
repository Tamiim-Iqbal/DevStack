import type { ITechnology } from "../types/technologyType";
import StackItem from "./StackItem";

interface StackPanelProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackPanel = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackPanelProps) => {
  return (
    <aside className="flex h-fit flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-md font-bold text-gray-900"> Your Stack </h2>
          
          <p className="mt-1 text-[11px] text-gray-400">
            {selectedTechnologies.length === 0
              ? "No technologies selected yet."
              : `${selectedTechnologies.length} ${
                  selectedTechnologies.length === 1
                    ? "Technology"
                    : "Technologies"
                } Selected`}
          </p>
        </div>
      </div>

      {/* Stack Items */}
      <div className="mt-4">
        {selectedTechnologies.length === 0 ? (
          <div className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50">
            <p className="text-[11px] text-gray-400"> Your stack is empty. </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {selectedTechnologies.map((technology) => (
              <StackItem key={technology.id} technology={technology} onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </div>

      {/* Remove All Button */}
      {selectedTechnologies.length > 0 && (
        <button onClick={onRemoveAll}
          className="mt-7 w-full rounded-md border border-red-200 bg-white py-1.5 text-[11px] font-semibold text-red-500 transition-colors hover:bg-red-50" >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default StackPanel;