<header class="relative flex items-center justify-between flex-shrink-0 p-4">
    {/* <!-- Mobile sub header button --> */}
    <button
        onClick="@click=isSubHeaderOpen = !isSubHeaderOpen"
        class="p-2 text-gray-400 bg-white rounded-lg shadow-md sm:hidden hover:text-gray-600 focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4"
    >
        <span class="sr-only">More</span>

        <svg
            aria-hidden="true"
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
        </svg>
    </button>

    {/* <!-- Mobile sub header --> */}
    <div
        // x-transition:enter="transform transition-transform"
        // x-transition:enter-start="translate-y-full opacity-0"
        // x-transition:enter-end="translate-y-0 opacity-100"
        // x-transition:leave="transform transition-transform"
        // x-transition:leave-start="translate-y-0 opacity-100"
        // x-transition:leave-end="translate-y-full opacity-0"
        // x-show="isSubHeaderOpen"
        onClick="@click.away=isSubHeaderOpen = false"
        class="absolute flex items-center justify-between p-2 bg-white rounded-md shadow-lg sm:hidden top-16 left-5 right-5"
    >
        {/* <!-- Settings button --> */}
        <button
            onClick="@click=isSettingsPanelOpen = true; isSubHeaderOpen = false"
            class="p-2 text-gray-400 bg-white rounded-lg shadow-md hover:text-gray-600 focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4"
        >
            <span class="sr-only">Settings</span>
            <svg
                aria-hidden="true"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </button>
        {/* <!-- Messages button --> */}
        <button
            onClick="@click=isSidebarOpen = true; currentSidebarTab = 'messagesTab'; isSubHeaderOpen = false"
            class="p-2 text-gray-400 bg-white rounded-lg shadow-md hover:text-gray-600 focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4"
        >
            <span class="sr-only">Toggle message panel</span>
            <svg
                aria-hidden="true"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
            </svg>
        </button>
        {/* <!-- Notifications button --> */}
        <button
            onClick="@click=isSidebarOpen = true; currentSidebarTab = 'notificationsTab'; isSubHeaderOpen = false"
            class="p-2 text-gray-400 bg-white rounded-lg shadow-md hover:text-gray-600 focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4"
        >
            <span class="sr-only">Toggle notifications panel</span>
            <svg
                aria-hidden="true"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
            </svg>
        </button>
    </div>
</header>;

{
    /* <!-- Mobile bottom bar --> */
}
<nav
    aria-label="Options"
    class="fixed inset-x-0 bottom-0 flex flex-row-reverse items-center justify-between px-4 py-2 bg-white border-t border-indigo-100 sm:hidden shadow-t rounded-t-3xl"
>
    {/* <!-- Menu button --> */}
    <button
        onClick={toggleSidebar}
        // onClick="@click=(isSidebarOpen && currentSidebarTab == 'linksTab') ? isSidebarOpen = false : isSidebarOpen = true; currentSidebarTab = 'linksTab'"
        class="p-2 transition-colors rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"
        // :class=(isSidebarOpen && currentSidebarTab == 'linksTab') ? 'text-white bg-indigo-600' : 'text-gray-500 bg-white'"
    >
        <span class="sr-only">Toggle sidebar</span>
        <svg
            aria-hidden="true"
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
            />
        </svg>
    </button>

    {/* <!-- Logo --> */}
    <a href="#">
        <img
            class="w-10 h-auto"
            src="https://raw.githubusercontent.com/kamona-ui/dashboard-alpine/main/public/assets/images/logo.png"
            alt="K-UI"
        />
    </a>

    {/* <!-- User avatar button --> */}
    <div
        class="relative flex items-center flex-shrink-0 p-2"
        // x-data="{ isOpen: false }"
    >
        <button
            onClick="@click=isOpen = !isOpen; $nextTick(() => {isOpen ? $refs.userMenu.focus() : null})"
            class="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"
        >
            <img
                class="w-8 h-8 rounded-lg shadow-md"
                src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                alt="Ahmed Kamel"
            />
            <span class="sr-only">User menu</span>
        </button>
        <div
            x-show="isOpen"
            // onClick="@click.away=isOpen = false"
            // onClick="@keydown.escape=isOpen = false"
            // x-ref="userMenu"
            // tabindex="-1"
            // class="absolute w-48 py-1 mt-2 origin-bottom-left bg-white rounded-md shadow-lg left-10 bottom-14 focus:outline-none"
            // role="menu"
            // aria-orientation="vertical"
            // aria-label="user menu"
        >
            <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                Your Profile
            </a>

            <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                Settings
            </a>

            <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                Sign out
            </a>
        </div>
    </div>
</nav>;
