import { useDispenserStore, useRecipeStore } from "../../store/store"
import { useState } from "react";
import CreateModal from "../common/CreateModal";
import DeleteModal from "../common/DeleteModal";

function ViewMachine({ isOpen, machine, dispensers, closeModal }) {
    const incrementDisps = useDispenserStore((state) => state.incrementDispenser);
    const decrementDisps = useDispenserStore((state) => state.decrementDispenser);

    const [isAddModalOpen, setAddModal] = useState(false);
    const [isDeleteModalOpen, setDeleteModal] = useState(false);

    const getRecipesByMachineId = useRecipeStore((state) => state.getRecipesByMachineId);
    const recipes = getRecipesByMachineId(machine.machineId);

    return (
        <div>
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle bg-slate-200">
                    <div className="modal-box">
                        <div className="card-title font-sans">{machine.machineName}</div>

                        {/* Recipe Section */}
                        <div className="gap-1 flex-col h-60 bg-slate-800 rounded-md p-2 mb-5">
                            <div className="flex justify-between">
                                <span className="font-extrabold text-slate-400">Recipes</span>
                                <button className="btn btn-xs rounded-md btn-primary" onClick={() => setAddModal(true)}>Create Recipe</button>
                            </div>
                            {isAddModalOpen && (
                                <CreateModal
                                    isOpen={isAddModalOpen}
                                    closeModal={() => setAddModal(false)}
                                    machine={machine}
                                    modalType={'Recipe'}
                                />
                            )}

                            <div className="overflow-y-auto overscroll-y-auto max-h-52">
                                {recipes.map((resp, index) => (
                                    <div key={index}>
                                        <p className="font-mono font-bold">{resp.recipeName}</p>
                                        <div className="flex justify-center items-center gap-2">
                                            <p className="bg-slate-700 rounded-md p-1.5">{resp.recipeDetails}</p>
                                            <button className="btn btn-sm btn-primary" onClick={() => setDeleteModal(true)}>Delete</button>
                                        </div>
                                        {isDeleteModalOpen && (
                                            <DeleteModal
                                                isOpen={isDeleteModalOpen}
                                                machine={machine}
                                                modalType={'Recipe'}
                                                modalClose={() => setDeleteModal(false)}
                                                index={index}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ingredient Section */}
                        <div className="gap-1 flex-col h-60 bg-slate-800 rounded-md p-2">
                            <span className="font-extrabold text-slate-400">Ingredients</span>
                            <div className="overflow-y-auto overscroll-y-auto max-h-52">
                                {dispensers.map((disp, index) => (
                                    <div key={index}>
                                        <p className="font-mono font-bold">{disp.ingredientName}</p>
                                        <div className="flex justify-center items-center gap-2">
                                            <progress className={`progress ${disp.quantity > 350 ? 'progress-success' : 'progress-error'} w-[80%] sm:w-full`} value={disp.quantity} max="1000"></progress>
                                            <p className="bg-slate-700 rounded-md p-1.5">{disp.quantity}</p>
                                            <button className="btn btn-sm rounded-md btn-primary" onClick={() => incrementDisps(index)}>+</button>
                                            <button className="btn btn-sm rounded-md btn-secondary" onClick={() => decrementDisps(index)}>-</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-2 flex justify-center items-center">
                            <button onClick={closeModal} className="btn btn-sm btn-primary">Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}

export default ViewMachine;
