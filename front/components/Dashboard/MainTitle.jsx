const MainTitle = ({ title }) => {
    return (
        <h2 className="text-center mt-5 p-3 text-4xl md:text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
            {title}
        </h2>
    );
};

export default MainTitle;
