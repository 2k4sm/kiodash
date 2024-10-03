import { useMachineStore, useDispenserStore, useRecipeStore } from "../../store/store"

const CustomModal = ({ modalType }) => {
    const machines = useMachineStore((state) => state.machines)
    const deleteMachine = useMachineStore((state) => state.deleteMachine)

    const recipes = useRecipeStore((state) => state.recipes)
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)


    const dispensers = useDispenserStore((state) => state.dispensers)
    const deleteDispenser = useDispenserStore((state) => state.deleteDispenser)

    switch (modalType) {
        case 'Machine':
            return (
                <div className="flex flex-col justify-center items-center gap-2 ">
                    {machines.map((machine, index) => (
                        <div onClick={() => deleteMachine(index)} className="bg-slate-500 w-[80%] rounded-md text-center p-3" key={index}>{machine.machineName}</div>
                    ))}
                </div>
            );

        case 'Dispenser':
            return (
                <div className="flex flex-col justify-center items-center gap-2 ">
                    {dispensers.map((dispenser, index) => (
                        <div onClick={() => deleteDispenser(index)} className="bg-slate-500 w-[80%] rounded-md text-center p-3" key={index}>{dispenser.dispenserId} - {dispenser.machineId}</div>
                    ))}
                </div>
            );

        case 'Recipe':
            return (
                <div className="flex flex-col justify-center items-center gap-2 ">
                    {recipes.map((recipe, index) => (
                        <div onClick={() => deleteRecipe(index)} className="bg-slate-500 w-[80%] rounded-md text-center p-3" key={index}>{recipe.recipeName}</div>
                    ))}
                </div>
            );

        default:
            return <h1>Error Creating Modal.</h1>;
    }
};

function DeleteModel({ isOpen, modalType, modalClose }) {

    return (
        <div>
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle bg-slate-200">
                    <div className="modal-box flex flex-col items-center">
                        <div className="w-[100%]">
                            <CustomModal modalType={modalType}> </CustomModal>
                        </div>
                        <div className="modal-action flex justify-between items-center">
                            <button type="button" className="btn" onClick={modalClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    )
}

export default DeleteModel