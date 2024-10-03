import React from 'react';

const Modal = React.memo(({ title, fields, onSubmit, onCancel }) => {
    return (
        <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <form onSubmit={onSubmit}>
                {fields.map((field, index) => (
                    <div className="form-control mt-4" key={field.id || index}>
                        <label className="label" htmlFor={field.id}>
                            <span className="label-text">{field.label}</span>
                        </label>
                        {field.type === 'text' && (
                            <input
                                id={field.id}
                                type="text"
                                placeholder={field.placeholder}
                                className="input input-bordered"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                        {field.type === 'select' && (
                            <select
                                id={field.id}
                                className="select select-bordered"
                                value={field.value}
                                onChange={field.onChange}
                            >
                                {field.options.map((option, idx) => (
                                    <option key={idx} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}
                        {field.type === 'textarea' && (
                            <textarea
                                id={field.id}
                                placeholder={field.placeholder}
                                className="textarea textarea-bordered"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    </div>
                ))}

                <div className="modal-action flex justify-between items-center">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button type="button" className="btn" onClick={onCancel}>
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
});

export default Modal;
