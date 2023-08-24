const OpenSidebarMenuButton = ({ onClick, contentSvg, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 hover:shadow-xl transform transition-transform duration-1000 ease-in-out opacity-80 shadow-lg rounded-lg ${
                disabled
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:opacity-100 hover:scale-110"
            }`}
            disabled={disabled}
        >
            <span className="sr-only">Menu latéral</span>
            {contentSvg}
        </button>
    );
};

export default OpenSidebarMenuButton;
