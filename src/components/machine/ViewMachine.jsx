import { useDispenserStore } from "../../store/store"

function ViewMachine({ isOpen, machine, dispensers, closeModal }) {

    const incrementDisps = useDispenserStore((state) => state.incrementDispenser)
    const decrementDisps = useDispenserStore((state) => state.decrementDispenser)
    return (
        <div>
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle bg-slate-200">
                    <div className="modal-box">
                        <div className="card-title font-sans">{machine.machineName}</div>

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
    )
}


export default ViewMachine