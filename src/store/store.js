import { create } from "zustand"
import { persist } from "zustand/middleware"
import { shallow } from "zustand/shallow"
export const useMachineStore = create(persist(
    (set) => ({
        machines: [{ machineName: "name1" }, { machineName: "name2" }, { machineName: "name3" }],
        addMachine: (newMachine) => set((state) => ({
            machines: [...state.machines, newMachine]
        })),
        deleteMachine: (machineName) => set((state) => ({
            machines: state.machines.filter(machine => machine.machineName !== machineName),
            shallow
        }))
    }), { name: "machines" })
)

export const useRecipeStore = create(persist(
    (set) => ({
        recipes: [],
        addRecipe: (newRecipe) => set((state) => ({
            recipes: [...state.recipes, newRecipe]
        })),

        deleteRecipe: (recipeName) => set((state) => ({
            recipes: state.recipes.filter(recipe => recipe.name !== recipeName),
            shallow
        }))
    }), { name: "recipes" })
)

export const useDispenserStore = create(persist(
    (set) => ({
        dispensers: [],

        addDispenser: (newDispenser) => set((state) => ({
            dispensers: [...state.dispensers, newDispenser]
        })),

        deleteDispenser: (dispenserName) => set((state) => ({
            dispensers: state.dispensers.filter(dispenser => dispenser.name !== dispenserName),
            shallow
        }))
    }), { name: "dispensers" })
)

