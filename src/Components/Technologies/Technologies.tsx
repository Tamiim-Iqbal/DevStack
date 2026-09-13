import { use, useState } from "react";
import { toast } from "react-toastify";

import type { ITechnology } from "../types/technologyType";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) => previous.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section className="mx-auto w-11/12 max-w-7xl py-12">
      <div className="mb-7">
        <h1 className="text-3xl font-bold text-gray-900">
          Explore the{" "}
          <span className="gradient-text">Technologies</span>
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology}
              selectedTechnologies={selectedTechnologies}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        <StackPanel selectedTechnologies={selectedTechnologies}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;