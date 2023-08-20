import { actionTypes } from "@/services/reducer/sidebar.reducer";

const OpenSidebarMenuButton = ({ onClick, content }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl opacity-80 hover:opacity-100"
        >
            <span className="sr-only">Menu latéral</span>
            {content}
        </button>
    );
};

export default OpenSidebarMenuButton;
