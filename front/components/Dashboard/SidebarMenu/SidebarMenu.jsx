const SidebarMenu = ({ isSidebarOpen, children }) => {
    return (
        <div
            className={`fixed inset-y-0 left-0 z-10 flex-shrink-0 w-64 bg-white border-r-2 border-indigo-100 shadow-lg sm:left-16 rounded-tr-3xl rounded-br-3xl sm:w-72 lg:static lg:w-64 ${
                isSidebarOpen ? "open" : "hidden"
            }`}
        >
            <nav className="flex flex-col h-full">
                <div className="flex-1 px-4 space-y-2 overflow-hidden hover:overflow-auto">
                    <a href="/" className="flex items-center w-full space-x-2">
                        <div className="text-center mt-5 p-4 lg:px-8">
                            <h1 className="text-xl md:text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                        </div>
                    </a>
                    <div>{children}</div>
                </div>
            </nav>
        </div>
    );
};

export default SidebarMenu;
