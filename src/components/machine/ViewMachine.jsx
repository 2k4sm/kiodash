import { useDispenserStore, useRecipeStore } from "../../store/store";
import { useState } from "react";
import CreateModal from "../common/CreateModal";
import DeleteModal from "../common/DeleteModal";

function ViewMachine({ isOpen, machine, dispensers, closeModal, machineId }) {
    const incrementDisps = useDispenserStore((state) => state.incrementDispenser);
    const decrementDisps = useDispenserStore((state) => state.decrementDispenser);

    const [isAddModalOpen, setAddModal] = useState(false);
    const [isDeleteModalOpen, setDeleteModal] = useState(-1);

    const getRecipesByMachineId = useRecipeStore((state) => state.getRecipesByMachineId);
    const recipes = getRecipesByMachineId(machineId);

    return (
        <div>
            {isOpen && (
                <div>
                    <dialog open className="modal modal-bottom sm:modal-middle bg-slate-200">
                        {isAddModalOpen && (
                            <CreateModal
                                isOpen={isAddModalOpen}
                                closeModal={() => setAddModal(false)}
                                modalType={'Recipe'}
                                machineId={machineId}
                            />
                        )}
                        <div className="modal-box">
                            <div className="card-title font-sans">{machine.machineName}</div>

                            <div className="gap-1 flex-col h-60 mb-5">
                                <div className="flex justify-between">
                                    <span className="font-extrabold text-slate-400">Recipes</span>
                                    <button className="btn btn-xs rounded-md btn-primary" onClick={() => setAddModal(true)}>Create Recipe</button>
                                </div>

                                <div className="overflow-y-auto overscroll-y-auto max-h-52">
                                    {recipes.length > 0 ? (
                                        recipes.map((resp, index) => (
                                            <div key={index} className="bg-sky-900 m-2 p-1 rounded-md">
                                                <p className="font-mono font-bold break-words w-[70%]">{resp.recipeName}</p>
                                                <div className="flex justify-center items-center gap-2">
                                                    <p className="bg-slate-700 rounded-md p-1.5 break-words w-[70%]">
                                                        {resp.recipeDetails}
                                                    </p>
                                                    <button className="btn btn-sm btn-primary" onClick={() => setDeleteModal(index)}>Delete</button>
                                                </div>
                                                {isDeleteModalOpen === index && (
                                                    <DeleteModal
                                                        isOpen={isDeleteModalOpen === index}
                                                        machineId={machineId}
                                                        modalType={'Recipe'}
                                                        modalClose={() => setDeleteModal(-1)}
                                                        index={index}
                                                    />
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center w-full h-40 p-5 mt-2 text-center text-gray-500 bg-gray-700 rounded-md shadow-md">
                                            <p className="text-lg font-semibold mb-2">No recipes present.</p>
                                            <p className="">Create a new one.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="gap-1 flex-col h-60">
                                <span className="font-extrabold text-slate-400">Dispensers</span>
                                <div className="overflow-y-auto overscroll-y-auto max-h-52">
                                    {dispensers.length > 0 ? (
                                        dispensers.map((disp, index) => (
                                            <div key={index} className="bg-sky-900 m-2 p-1 rounded-md">
                                                <p className="font-mono font-bold break-words w-[70%]">{disp.ingredientName}</p>
                                                <div className="flex justify-center items-center gap-2">
                                                    <progress
                                                        className={`progress ${disp.quantity > 350 ? 'progress-success' : 'progress-error'} w-[80%] sm:w-full`}
                                                        value={disp.quantity}
                                                        max="1000">
                                                    </progress>
                                                    <p className="bg-slate-700 rounded-md p-1.5 min-w-[40px]">{disp.quantity}</p>
                                                    <button className="btn btn-sm rounded-md btn-primary" onClick={() => incrementDisps(index)}>+</button>
                                                    <button className="btn btn-sm rounded-md btn-secondary" onClick={() => decrementDisps(index)}>-</button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center w-full h-40 p-5 mt-2 text-center text-gray-500 bg-gray-700 rounded-md shadow-md">
                                            <p className="text-lg font-semibold mb-2">No dispensers present.</p>
                                            <p className="block sm:hidden">Create a new one from the Menubar.</p>
                                            <p className="hidden sm:block">Create a new one from the Sidebar.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-2 flex justify-center items-center">
                                <button onClick={closeModal} className="btn btn-sm btn-primary">Close</button>
                            </div>
                        </div>
                    </dialog>
                </div>
            )}
        </div>
    );
}

export default ViewMachine;
