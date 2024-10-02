import React, { useState } from 'react';
import Modal from './Modal';

function CreateModel({ modalType }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log("Submitted data: ", formData);
        setIsOpen(false); // Close modal after submission
    };

    const CustomModal = ({ modalType }) => {
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
                                value: formData['machineName'] || '', // Handle form data from state
                                onChange: (e) => handleChange(e, 'machineName')
                            }
                        ]}
                        onSubmit={handleSubmit}
                        onCancel={() => setIsOpen(false)}
                    />
                );

            case 'Dispenser':
                return (
                    <Modal
                        title="Create Dispenser"
                        fields={[
                            {
                                label: 'Machine ID',
                                type: 'text',
                                id: 'machine-id',
                                placeholder: 'Enter machine ID',
                                value: formData['machineId'] || '',
                                onChange: (e) => handleChange(e, 'machineId')
                            },
                            {
                                label: 'Dispenser ID',
                                type: 'text',
                                id: 'dispenser-id',
                                placeholder: 'Enter dispenser ID',
                                value: formData['dispenserId'] || '',
                                onChange: (e) => handleChange(e, 'dispenserId')
                            },
                            {
                                label: 'Ingredient Name',
                                type: 'text',
                                id: 'ingredient-name',
                                placeholder: 'Enter ingredient name',
                                value: formData['ingredientName'] || '',
                                onChange: (e) => handleChange(e, 'ingredientName')
                            },
                            {
                                label: 'Ingredient Type',
                                type: 'select',
                                id: 'ingredient-type',
                                options: ['Powder', 'Liquid'],
                                value: formData['ingredientType'] || '',
                                onChange: (e) => handleChange(e, 'ingredientType')
                            },
                            {
                                label: 'Quantity',
                                type: 'text',
                                id: 'quantity',
                                placeholder: 'Enter quantity (e.g., 500g)',
                                value: formData['quantity'] || '',
                                onChange: (e) => handleChange(e, 'quantity')
                            }
                        ]}
                        onSubmit={handleSubmit}
                        onCancel={() => setIsOpen(false)}
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
                                value: formData['recipeName'] || '',
                                onChange: (e) => handleChange(e, 'recipeName')
                            },
                            {
                                label: 'Machine IDs',
                                type: 'text',
                                id: 'machine-ids',
                                placeholder: 'Enter machine IDs (comma-separated)',
                                value: formData['machineIds'] || '',
                                onChange: (e) => handleChange(e, 'machineIds')
                            },
                            {
                                label: 'Recipe Details',
                                type: 'textarea',
                                id: 'recipe-details',
                                placeholder: 'Enter recipe details (e.g., Powder 1 - 20g, Liquid 1 - 150g)',
                                value: formData['recipeDetails'] || '',
                                onChange: (e) => handleChange(e, 'recipeDetails')
                            }
                        ]}
                        onSubmit={handleSubmit}
                        onCancel={() => setIsOpen(false)}
                    />
                );

            default:
                return <h1>Error Creating Modal.</h1>;
        }
    };

    return (
        <div>
            <button className="btn" onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <CustomModal modalType={modalType} />
                    </div>
                </dialog>
            )}
        </div>
    );
}

export default CreateModel;
