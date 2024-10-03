import CreateModel from "../common/CreateModal";
import DeleteModal from "../common/DeleteModal";
import { useState } from "react";
function Sidebar({ isOpen, toggleSidebar }) {
    const [machineCreateModal, setMachineCreateModal] = useState(false);
    const [machineDeleteModal, setMachineDeleteModal] = useState(false);


    const [dispenserCreateModal, setDispenserCreateModal] = useState(false);
    const [dispenserDeleteModal, setDispenserDeleteModal] = useState(false);


    const [recipeCreateModal, setRecipeCreateModal] = useState(false);
    const [recipeDeleteModal, setRecipeDeleteModal] = useState(false);


    return (
        <div
            className={`sm:menu bg-base-300 w-full rounded-md gap-5 h-full fixed sm:static z-50 sm:z-auto sm:flex ${isOpen ? 'block' : 'hidden'}`}
        >
            <div className="flex justify-evenly items-center mt-5">
                <svg className="bg-green-700 rounded-md" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed">
                    <path d="M220-80q-23 0-41.5-18T160-140v-680q0-23 18.5-41.5T220-880h580v60H693v60q0 14-12.5 27T654-720H368q-14 0-26.5-13T329-760v-60H220v680h188q-38-26-58.5-63T329-293v-193h364v193q0 53-21 90t-59 63h187v60H220Zm290.5-86q51.5 0 87-37.04T633-293v-133H389v133q0 52.92 35 89.96Q459-166 510.5-166Zm-.5-394q16.58 0 27.79-11.21T549-599q0-16.58-11.21-27.79T510-638q-16.58 0-27.79 11.21T471-599q0 16.58 11.21 27.79T510-560Zm1 134Z" />
                </svg>
                <h2 className="menu-title">Kiosk Management</h2>
                <button className="sm:hidden block" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="red"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>                </button>
            </div>

            <div className="side-nav-menu menu bg-base-300">
                <ul>
                    <li>
                        <details open>
                            <summary>Machines</summary>
                            <ul>
                                <li>
                                    <button onClick={() => setMachineCreateModal(true)}>
                                        Add
                                    </button>

                                    {machineCreateModal && (
                                        <CreateModel
                                            modalType="Machine"
                                            isOpen={machineCreateModal}
                                            closeModal={() => setMachineCreateModal(false)}
                                        />
                                    )}
                                </li>
                                <li>
                                    <a onClick={() => setMachineDeleteModal(true)}>Delete</a>
                                    {machineDeleteModal && (
                                        <DeleteModal
                                            isOpen={machineDeleteModal}
                                            modalType='Machine'
                                            modalClose={() => setMachineDeleteModal(false)}
                                        />
                                    )}
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary>Dispensers</summary>
                            <ul>
                                <li>
                                    <button onClick={() => setDispenserCreateModal(true)}>
                                        Add
                                    </button>

                                    {dispenserCreateModal && (
                                        <CreateModel
                                            modalType="Dispenser"
                                            isOpen={dispenserCreateModal}
                                            closeModal={() => setDispenserCreateModal(false)}
                                        />
                                    )}
                                </li>
                                <li>
                                    <a onClick={() => setDispenserDeleteModal(true)}>Delete</a>
                                    {dispenserDeleteModal && (
                                        <DeleteModal
                                            isOpen={dispenserDeleteModal}
                                            modalType='Dispenser'
                                            modalClose={() => setDispenserDeleteModal(false)}
                                        />
                                    )}
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary>Recipes</summary>
                            <ul>
                                <li>
                                    <button onClick={() => setRecipeCreateModal(true)}>
                                        Add
                                    </button>

                                    {recipeCreateModal && (
                                        <CreateModel
                                            modalType="Recipe"
                                            isOpen={recipeCreateModal}
                                            closeModal={() => setRecipeCreateModal(false)}
                                        />
                                    )}
                                </li>
                                <li>
                                    <a onClick={() => setRecipeDeleteModal(true)}>Delete</a>
                                    {recipeDeleteModal && (
                                        <DeleteModal
                                            isOpen={recipeDeleteModal}
                                            modalType='Recipe'
                                            modalClose={() => setRecipeDeleteModal(false)}
                                        />
                                    )}
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
