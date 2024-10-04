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
    (set, get) => ({
        recipes: {},

        addRecipe: (machineId, newRecipe) => set((state) => {
            const updatedRecipes = { ...state.recipes };
            if (!updatedRecipes[machineId]) {
                updatedRecipes[machineId] = { recipes: [newRecipe] };
            } else {
                updatedRecipes[machineId].recipes.push(newRecipe);
            }
            return { recipes: updatedRecipes };
        }),

        deleteRecipe: (machineId, index) => set((state) => {
            const updatedRecipes = { ...state.recipes };
            const machineRecipes = updatedRecipes[machineId]?.recipes;

            if (machineRecipes && machineRecipes[index]) {
                machineRecipes.splice(index, 1);
                if (machineRecipes.length === 0) {
                    delete updatedRecipes[machineId];
                }
            }

            return { recipes: updatedRecipes };
        }),

        getRecipesByMachineId: (machineId) => {
            const state = get();
            return state.recipes[machineId]?.recipes || [];
        }
    }),
    { name: "recipes" }
));


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
