function Machine() {
    return (
        <div className="card card-compact bg-base-100 w-full md:w-[30vw] lg:w-[24vw] shadow-xl min-w-[5vw]">
            <div className="flex flex-col p-2 justify-center sm:p-4 md:p-6 lg:p-8 gap-2">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" stroke="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="12" x2="2" y2="12"></line>
                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                </svg>

                <div className="gap-1">
                    <span className="font-extrabold text-slate-400">Ingredients</span>
                    <div>
                        <p>Ing1</p>
                        <progress className="progress progress-success w-full" value={30} max="100"></progress>
                    </div>
                    <div>
                        <p>Ing1</p>
                        <progress className="progress progress-success w-full" value={30} max="100"></progress>
                    </div><div>
                        <p>Ing1</p>
                        <progress className="progress progress-success w-full" value={30} max="100"></progress>
                    </div><div>
                        <p>Ing1</p>
                        <progress className="progress progress-success w-full" value={30} max="100"></progress>
                    </div>
                </div>


            </div>

            <div className="card-body flex flex-row justify-between items-center w-full">
                <div className="card-title">Machine</div>
                <div className="card-actions">
                    <button className="btn btn-primary rounded-lg h-6">View</button>
                </div>
            </div>

        </div>
    )
}


export default Machine