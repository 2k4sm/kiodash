import Machine from "./Machine"

function MachineContainer() {
    return (
        <div className="flex flex-col flex-wrap gap-2 md:flex-row justify-between items-center bg-base-300 w-full rounded-md mt-2 min-h-[86vh] sm:h-[86vh] p-5 sm:overflow-y-auto">
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
            <Machine></Machine>
        </div>
    )
}

export default MachineContainer