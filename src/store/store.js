import { create } from "zustand";
import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";

export const useMachineStore = create(persist(
    (set) => ({
        machines: [],
        addMachine: (newMachine) => set((state) => ({
            machines: [...state.machines, newMachine]
        })),
        deleteMachine: (index) => set((state) => ({
            machines: state.machines.filter((_, i) => i !== index),
            shallow
        }))
    }), { name: "machines" })
);

export const useRecipeStore = create(persist(
    (set) => ({
        recipes: [],
        addRecipe: (newRecipe) => set((state) => ({
            recipes: [...state.recipes, newRecipe]
        })),
        deleteRecipe: (index) => set((state) => ({
            recipes: state.recipes.filter((_, i) => i !== index),
            shallow
        }))
    }), { name: "recipes" })
);

export const useDispenserStore = create(persist(
    (set) => ({
        dispensers: [],
        addDispenser: (newDispenser) => set((state) => ({
            dispensers: [...state.dispensers, newDispenser]
        })),
        deleteDispenser: (index) => set((state) => ({
            dispensers: state.dispensers.filter((_, i) => i !== index),
            shallow
        })),
        incrementDispenser: (index) => set((state) => {
            const dispensers = [...state.dispensers];

            if (dispensers[index]) {
                dispensers[index] = {
                    ...dispensers[index],
                    quantity: (dispensers[index].quantity - 0) < 1000 ? (dispensers[index].quantity - 0) + 1 : (dispensers[index].quantity - 0)
                };
            }

            return { dispensers };
        }),
        decrementDispenser: (index) => set((state) => {
            const dispensers = [...state.dispensers];

            if (dispensers[index]) {
                dispensers[index] = {
                    ...dispensers[index],
                    quantity: (dispensers[index].quantity - 0) > 0 ? (dispensers[index].quantity - 0) - 1 : (dispensers[index].quantity - 0)
                };
            }

            return { dispensers };
        })
    }), { name: "dispensers" })
);
