import index from "../public/assets/svg/index-svg";

const ToTopButton = () => {
    return (
        <div className="top" onClick={() => window.scrollTo(0, 0)}>
            {index.toTop}
        </div>
    );
};

export default ToTopButton;
