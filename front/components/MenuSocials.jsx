import indexSvg from "../public/assets/svg/index-svg";

const MenuSocials = () => {
    return (
        <div className="mt-10 md:m-5 flex justify-center gap-8">
            {indexSvg.facebook("color-anim cursor-pointer")}{" "}
            {indexSvg.twitter("color-anim cursor-pointer")}
        </div>
    );
};

export default MenuSocials;
