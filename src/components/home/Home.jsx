import Sidebar from "../sidebar/Sidebar"
import Topbar from "../topbar/Topbar"

function Home() {
    return (
        <div className="flex gap-2 justify-center">
            <div className="w-0 sm:w-[30vw] lg:w-[20vw]">
                <Sidebar></Sidebar>
            </div>
            <div className="w-full sm:w-[80vw]">
                <Topbar></Topbar>
            </div>
        </div>
    )
}

export default Home