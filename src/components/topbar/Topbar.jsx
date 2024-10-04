function Topbar({ toggleSidebar }) {
    return (
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center bg-base-300 w-full rounded-md p-5 h-fit">
            <div className="w-fit sm:w-[40%]">
                <div className="font-sans font-extrabold text-4xl text-green-400">KioDash</div>
            </div>
            <div className="flex justify-between w-full">
                <div className="sm:w-[60%] w-full sm:block flex justify-evenly items-center">
                    <button
                        className="block sm:hidden text-green-500 hover:text-green-700 rounded-md p-3 bg-slate-800"
                        onClick={toggleSidebar}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
