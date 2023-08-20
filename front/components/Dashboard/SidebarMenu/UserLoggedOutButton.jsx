import indexSvg from "@/public/assets/svg/index-svg";

const UserLoggedOutButton = () => {
    return (
        <div className="rounded-full p-5">
            <button className="transition-opacity rounded-lg opacity-80 hover:opacity-100 bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text font-bold uppercase text-4xl shadow-lg hover:scale-110 p-1">
                {indexSvg.usercircle}
                <span className="sr-only">
                    Bouton de connexion et d'inscription
                </span>
            </button>
        </div>
    );
};

export default UserLoggedOutButton;
