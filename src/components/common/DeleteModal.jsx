import { useMachineStore, useDispenserStore, useRecipeStore } from "../../store/store"

const CustomModal = ({ modalType, machineId, recInd, modalClose }) => {
    const machines = useMachineStore((state) => state.machines)
    const deleteMachine = useMachineStore((state) => state.deleteMachine)

    const recipeDelete = (machineId, index) => {
        deleteRecipe(machineId, index)
        modalClose()
    }

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
                    <div onClick={() => recipeDelete(machineId, recInd)} className="bg-slate-500 w-[80%] rounded-md text-center p-3 btn">Click to Delete...</div>
                </div>
            );

        default:
            return <h1>Error Creating Modal.</h1>;
    }
};


function DeleteModel({ isOpen, modalType, modalClose, machineId, index }) {

    return (
        <div>
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle bg-slate-200">
                    <div className="modal-box flex flex-col items-center">
                        <div className="w-[100%]">
                            <CustomModal modalType={modalType} machineId={machineId} recInd={index} modalClose={modalClose}> </CustomModal>
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