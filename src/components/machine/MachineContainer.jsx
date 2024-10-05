import Machine from "./Machine"
import { useMachineStore } from "../../store/store"
function MachineContainer() {

    const machines = useMachineStore((state) => state.machines)

    return (
        <div className="flex flex-col flex-wrap gap-2 md:flex-row justify-between items-center bg-base-300 w-full rounded-md mt-2 min-h-[86vh] sm:h-[86vh] p-5 sm:overflow-y-auto">
            {machines.length > 0 ? (
                machines.map((machine, index) => (
                    <Machine key={index} machine={machine} machineId={index} />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full p-5 mt-2 text-center text-gray-500 bg-gray-700 rounded-md shadow-md">
                    <p className="text-lg font-semibold mb-2">No machines present.</p>
                    <p className="block sm:hidden">Create a new one from the Menubar.</p>
                    <p className="hidden sm:block">Create a new one from the Sidebar.</p>
                </div>
            )}
        </div>
    )
}

export default MachineContainer