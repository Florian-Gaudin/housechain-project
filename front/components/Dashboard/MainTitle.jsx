const MainTitle = ({ title }) => {
    return (
        <h2 className="text-center m-5 p-5 text-4xl md:text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
            {title}
        </h2>
    );
};

export default MainTitle;
