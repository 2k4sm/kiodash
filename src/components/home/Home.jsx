import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import MachineContainer from "../machine/MachineContainer";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex gap-2 justify-center">
            <div className={`fixed sm:relative w-full sm:w-[30vw] lg:w-[20vw] z-50 sm:z-auto ${isSidebarOpen ? 'block' : 'hidden sm:block'}`}>
                <Sidebar></Sidebar>
            </div>

            <div className="w-full sm:w-[80vw] relative">
                <Topbar toggleSidebar={toggleSidebar}></Topbar>
                <MachineContainer></MachineContainer>
            </div>

            {isSidebarOpen && <div className="fixed inset-0 bg-slate-500 sm:hidden"><Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}></Sidebar></div>}
        </div>
    );
}

export default Home;
