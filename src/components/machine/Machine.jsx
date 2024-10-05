import { useDispenserStore, useRecipeStore } from "../../store/store";
import { useMemo, useState, useEffect } from "react";
import ViewMachine from "./ViewMachine";

function Machine({ machine, machineId }) {
    const machineName = machine.machineName;
    const dispensers = useDispenserStore((state) => state.dispensers);

    const filteredDisps = useMemo(
        () => dispensers.filter((dispenser) => dispenser.machineId == machineId),
        [dispensers, machineId]
    );

    const [isMachineOpen, setMachine] = useState(false)

    const [strokeColor, setStrokeColor] = useState("green");

    useEffect(() => {
        const getRandomColor = (data) => {
            const colors = ["green", "red", "yellow"];
            return colors[Math.floor(Math.random() * data % colors.length)];
        };

        const ws = new WebSocket("wss://ws.postman-echo.com/raw");

        ws.onopen = () => {
            console.log("Connected to Postman Echo WebSocket server");

            const intervalId = setInterval(() => {
                const randomNumber = Math.floor(Math.random() * 100);
                ws.send(randomNumber.toString());
            }, 1000);

            return () => clearInterval(intervalId);
        };

        ws.onmessage = (event) => {
            console.log("Received from server:", event.data);
            setStrokeColor(getRandomColor(event.data));
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = (event) => {
            console.log("WebSocket connection closed:", event);
        };

        return () => {
            ws.close();
        };
    }, []);



    return (
        <div className="card card-compact bg-base-100 w-full md:w-[30vw] lg:w-[24vw] shadow-xl min-w-[5vw]">
            <div className="flex flex-col p-2 justify-center sm:p-4 md:p-6 lg:p-8 gap-2">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" stroke={strokeColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="12" x2="2" y2="12"></line>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                </svg>

                <div className="gap-1 flex-col h-60">
                    <span className="font-extrabold text-slate-400">Dispensers</span>
                    <div className="overflow-y-auto overscroll-y-auto max-h-56">
                        {filteredDisps.length > 0 ? (
                            filteredDisps.map((disp, index) => (
                                <div key={index} className="bg-sky-900 m-2 p-1 rounded-md">
                                    <p className="font-mono font-bold break-words w-[99%]">{disp.ingredientName}</p>
                                    <progress className={`progress ${disp.quantity > 350 ? 'progress-success' : 'progress-error'} w-full`} value={disp.quantity} max="1000"></progress>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center w-full h-52 p-5 mt-2 text-center text-gray-500 bg-gray-700 rounded-md shadow-md">
                                <p className="text-lg font-semibold mb-2">No dispensers present.</p>
                                <p className="block sm:hidden">Create a new one from the Menubar.</p>
                                <p className="hidden sm:block">Create a new one from the Sidebar.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <div className="card-body flex flex-row justify-between items-center w-full">
                <div className="card-title font-sans">{machineName}</div>
                <div className="card-actions">
                    <button className="btn btn-sm btn-primary rounded-md" onClick={() => setMachine(true)}>View</button>
                    {isMachineOpen && (
                        <ViewMachine
                            isOpen={isMachineOpen}
                            machine={machine}
                            machineId={machineId}
                            dispensers={filteredDisps}
                            closeModal={() => { setMachine(false) }}
                        />
                    )}
                </div>
            </div>
        </div >
    );
}

export default Machine;
