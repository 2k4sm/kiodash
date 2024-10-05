import React, { useState } from 'react';
import Modal from './Modal';
import { useMachineStore, useDispenserStore, useRecipeStore } from '../../store/store';
const CustomModal = ({ modalType, inputData, handleChange, handleSubmit, closeModal }) => {
    const machineState = useMachineStore((state) => state.machines)

    switch (modalType) {
        case 'Machine':
            return (
                <Modal
                    title="Create Machine"
                    fields={[
                        {
                            label: 'Machine Name',
                            type: 'text',
                            id: 'machine-name',
                            placeholder: 'Enter machine name',
                            value: inputData['machineName'] || '',
                            onChange: (e) => handleChange(e, 'machineName'),
                        }
                    ]}
                    onSubmit={(e) => handleSubmit(e, 'machines')}
                    onCancel={closeModal}
                />
            );

        case 'Dispenser':
            return (
                <Modal
                    title="Create Dispenser"
                    fields={[
                        {
                            label: 'Machine ID',
                            type: 'select',
                            id: 'machine-id',
                            options: machineState.map((_, index) => index),
                            value: inputData['machineId'] || '',
                            onChange: (e) => handleChange(e, 'machineId'),
                        },
                        {
                            label: 'Dispenser ID',
                            type: 'number',
                            id: 'dispenser-id',
                            placeholder: 'Enter dispenser ID',
                            value: inputData['dispenserId'] || '',
                            onChange: (e) => handleChange(e, 'dispenserId'),
                        },
                        {
                            label: 'Ingredient Name',
                            type: 'text',
                            id: 'ingredient-name',
                            placeholder: 'Enter ingredient name',
                            value: inputData['ingredientName'] || '',
                            onChange: (e) => handleChange(e, 'ingredientName'),
                        },
                        {
                            label: 'Ingredient Type',
                            type: 'select',
                            id: 'ingredient-type',
                            options: ['Powder', 'Liquid'],
                            value: inputData['ingredientType'] || '',
                            onChange: (e) => handleChange(e, 'ingredientType'),
                        },
                        {
                            label: 'Quantity',
                            type: 'number',
                            id: 'quantity',
                            max: 1000,
                            placeholder: 'Enter quantity (e.g., 500g)',
                            value: inputData['quantity'] || '',
                            onChange: (e) => handleChange(e, 'quantity'),
                        }
                    ]}
                    onSubmit={(e) => handleSubmit(e, 'dispensers')}
                    onCancel={closeModal}
                />
            );

        case 'Recipe':
            return (
                <Modal
                    title="Create Recipe"
                    fields={[
                        {
                            label: 'Recipe Name',
                            type: 'text',
                            id: 'recipe-name',
                            placeholder: 'Enter recipe name',
                            value: inputData['recipeName'] || '',
                            onChange: (e) => handleChange(e, 'recipeName'),
                        },

                        {
                            label: 'Recipe Details',
                            type: 'textarea',
                            id: 'recipe-details',
                            placeholder: 'Enter recipe details (e.g., Powder 1 - 20g, Liquid 1 - 150g)',
                            value: inputData['recipeDetails'] || '',
                            onChange: (e) => handleChange(e, 'recipeDetails'),
                        }
                    ]}
                    onSubmit={(e) => handleSubmit(e, 'recipes')}
                    onCancel={closeModal}
                />
            );

        default:
            return <h1>Error Creating Modal.</h1>;
    }
};

function CreateModal({ modalType, isOpen, closeModal, machineId }) {
    const addMachine = useMachineStore((state) => state.addMachine)

    const addRecipe = useRecipeStore((state) => state.addRecipe)


    const addDispenser = useDispenserStore((state) => state.addDispenser)

    const [inputData, setInputData] = useState({});

    const handleChange = (e, field) => {
        setInputData({
            ...inputData,
            [field]: e.target.value,
        });
    };

    const handleSubmit = (e, formtype) => {
        e.preventDefault();
        switch (formtype) {
            case 'recipes':
                addRecipe(machineId, inputData)
                break;
            case 'machines':
                addMachine(inputData)
                break;
            case 'dispensers':
                addDispenser(inputData)
                break;
        }

        closeModal()
    };

    return (
        <div>
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle bg-slate-200">
                    <div className="modal-box">
                        <CustomModal
                            modalType={modalType}
                            inputData={inputData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            closeModal={closeModal}
                        />

                    </div>
                </dialog>
            )}
        </div>
    );
}

export default CreateModal;
