import Machine from "./Machine"
import { useMachineStore } from "../../store/store"
function MachineContainer() {

    const machines = useMachineStore((state) => state.machines)

    return (
        <div className="flex flex-col flex-wrap gap-2 md:flex-row justify-between items-center bg-base-300 w-full rounded-md mt-2 min-h-[86vh] sm:h-[86vh] p-5 sm:overflow-y-auto">
            {machines.map((machine, index) => (
                <Machine key={index} machineName={machine.machineName} machineId={index} />
            ))}
        </div>
    )
}

export default MachineContainer