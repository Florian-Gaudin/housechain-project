import { actionTypes } from "@/services/reducer/sidebar.reducer";

const OpenSidebarMenuButton = ({ onClick, content }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 hover:shadow-xl transform transition-transform duration-1000 ease-in-out opacity-80 hover:opacity-100 hover:scale-110 shadow-lg rounded-lg cursor-pointer"
        >
            <span className="sr-only">Menu latéral</span>
            {content}
        </button>
    );
};

export default OpenSidebarMenuButton;
