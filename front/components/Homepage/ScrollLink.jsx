import index from "../../public/assets/svg/index-svg";

const ScrollLink = () => {
    return (
        <div className="absolute right-[50px] bottom-[100px] md:right-[200px] md:bottom-[150px]">
            <div className="flex justify-end items-center p-2 gap-3 mt-12">
                {index.scrollLink}
                <a
                    href="#about"
                    className="scroll-smooth uppercase text-bglight font-extralight text-sm"
                >
                    Descendre
                </a>
            </div>
        </div>
    );
};

export default ScrollLink;
