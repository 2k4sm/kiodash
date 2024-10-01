function Sidebar() {
    return (
        <div className="hidden sm:menu bg-base-300 w-full rounded-md gap-5 h-full">
            <div className="flex justify-center text-center">
                <svg className="bg-green-700 rounded-md" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M220-80q-23 0-41.5-18T160-140v-680q0-23 18.5-41.5T220-880h580v60H693v60q0 14-12.5 27T654-720H368q-14 0-26.5-13T329-760v-60H220v680h188q-38-26-58.5-63T329-293v-193h364v193q0 53-21 90t-59 63h187v60H220Zm290.5-86q51.5 0 87-37.04T633-293v-133H389v133q0 52.92 35 89.96Q459-166 510.5-166Zm-.5-394q16.58 0 27.79-11.21T549-599q0-16.58-11.21-27.79T510-638q-16.58 0-27.79 11.21T471-599q0 16.58 11.21 27.79T510-560Zm1 134Z" /></svg>                <h2 class="menu-title">Kiosk Management</h2>
            </div>

            <div className="side-nav-menu">
                <ul>
                    <li>
                        <details open>
                            <summary>Machines</summary>
                            <ul>
                                <li><a>Machine 1</a></li>
                                <li><a>Machine 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary>Recipes</summary>
                            <ul>
                                <li><a>Add</a></li>
                                <li><a>Edit</a></li>
                                <li><a>Delete</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Sidebar