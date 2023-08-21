const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 30,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 20,
    };

    const fillerStyles = {
        width: `${completed}%`,
        borderRadius: "inherit",
        textAlign: "right",
    };

    return (
        <div className="" style={containerStyles}>
            <div
                className="flex items-center justify-end h-full bg-move bg-gradient-to-r from-purple via-red to-purple"
                style={fillerStyles}
            >
                <span className="text-bold p-5 text-white">{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
