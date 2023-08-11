"use client";

import { useState } from "react";
import Logo from "../Homepage/Logo";
import MenuButton from "../MenuButton";
import "../../styles/components/_homepageHeader.scss";
import styles from "@/styles/components/auth.module.scss";

const Header = () => {
    //ouverture navbar au survol
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    //gestion des modales
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);
    // ouverture modales au clic
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };
    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };
    const openResetModal = () => {
        setIsResetModalOpen(true);
    };
    // fermeture modale bouton
    const closeModal = () => {
        setIsLoginModalOpen(false);
        setIsRegisterModalOpen(false);
        setIsResetModalOpen(false);
    };
    // fermeture modale au clic à l'extérieur
    const closeOnOverlayClick = (event) => {
        if (event.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };
    // changement de modales
    const switchLogin = () => {
        setIsRegisterModalOpen(false);
        setIsResetModalOpen(false);
        setIsLoginModalOpen(true);
    };
    const switchRegister = () => {
        setIsLoginModalOpen(false);
        setIsResetModalOpen(false);
        setIsRegisterModalOpen(true);
    };
    const switchReset = () => {
        setIsLoginModalOpen(false);
        setIsRegisterModalOpen(false);
        setIsResetModalOpen(true);
    };

    // Login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const login = (e) => {
        e.preventDefault();
        console.log(loginEmail, loginPassword);
    };
    // Register the user
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");
    const registerUser = (e) => {
        e.preventDefault();
        console.log(registerEmail, registerPassword, confirmRegisterPassword);
    };

    return (
        <header className="inset-x-0 top-0 z-50 fixed">
            <nav
                className={
                    isButtonHovered
                        ? "z-20 bg-white/80 flex items-center justify-between transition-all duration-2000"
                        : "flex items-center justify-between transition-all duration-2000"
                }
                aria-label="Global"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
            >
                {isButtonHovered && (
                    <div>
                        <div className="flex flex-around">
                            <a
                                href="/"
                                className="transition-all duration-2000"
                            >
                                <Logo />
                            </a>
                            <button
                                onClick={openLoginModal}
                                className="-mx-3 block rounded-lg py-5 px-16 text-sm md:text-lg font-bold leading-7 uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text text-center group-hover:scale-150 transition-all duration-1000"
                            >
                                Mon compte
                            </button>
                            <button
                                onClick={openRegisterModal}
                                className="-mx-3 block rounded-lg py-5 px-16 text-sm md:text-lg font-bold leading-7 uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text text-center group-hover:scale-150 transition-all duration-1000"
                            >
                                Inscription
                            </button>
                        </div>
                    </div>
                )}
                <div className="flex items-center fixed right-8 top-8">
                    <MenuButton />
                </div>
            </nav>
            <div
                className="h-[200px] z-10"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
            ></div>
            {isLoginModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-bg/50 z-50 flex justify-center items-center modal-overlay"
                    onClick={closeOnOverlayClick}
                >
                    <div className="">
                        <button className="text-white" onClick={closeModal}>
                            Fermer
                        </button>
                        <div className={`bg-white ${styles.auth}`}>
                            <div className={`bg-white ${styles.img}`}>
                                <img src="" alt="login" />
                            </div>
                            <div className={styles.form}>
                                <h2>Se connecter</h2>
                                <form action="" onSubmit={login}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        required
                                        value={loginEmail}
                                        onChange={(e) =>
                                            setLoginEmail(e.target.value)
                                        }
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mot de passe"
                                        required
                                        value={loginPassword}
                                        onChange={(e) =>
                                            setLoginPassword(e.target.value)
                                        }
                                    />
                                    <button type="submit" className="">
                                        Se connecter
                                    </button>
                                    <div className={styles.links}>
                                        <button onClick={switchReset}>
                                            Mot de passe oublié ?
                                        </button>
                                    </div>
                                    <p>-- ou continuer avec --</p>
                                </form>
                                <button>G ICONE Google</button>
                                <span className={styles.register}>
                                    <p>Vous n'avez pas de compte ?</p>
                                    <button onClick={switchRegister}>
                                        S'inscrire
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isRegisterModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-bg/50 z-50 flex justify-center items-center modal-overlay"
                    onClick={closeOnOverlayClick}
                >
                    <div className="">
                        <button className="text-white" onClick={closeModal}>
                            Fermer
                        </button>
                        <div className={`bg-white ${styles.auth}`}>
                            <div className={`bg-white ${styles.img}`}>
                                <img src="" alt="register" />
                            </div>
                            <div className={styles.form}>
                                <h2>S'inscrire</h2>
                                <form action="" onSubmit={registerUser}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        required
                                        value={registerEmail}
                                        onChange={(e) =>
                                            setRegisterEmail(e.target.value)
                                        }
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mot de passe"
                                        required
                                        value={registerPassword}
                                        onChange={(e) =>
                                            setRegisterPassword(e.target.value)
                                        }
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirmer le mot de passe"
                                        required
                                        value={confirmRegisterPassword}
                                        onChange={(e) =>
                                            setConfirmRegisterPassword(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button type="submit" className="">
                                        Valider
                                    </button>
                                    <p>-- ou continuer avec --</p>
                                </form>
                                <button>G ICONE Google</button>
                                <span className={styles.register}>
                                    <p>Vous avez déjà un compte ?</p>
                                    <button onClick={switchLogin}>
                                        Se connecter
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isResetModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-bg/50 z-50 flex justify-center items-center modal-overlay"
                    onClick={closeOnOverlayClick}
                >
                    <div className="">
                        <button className="text-white" onClick={closeModal}>
                            Fermer
                        </button>
                        <div className={`bg-white ${styles.auth}`}>
                            <div className={`bg-white ${styles.img}`}>
                                <img src="" alt="login" />
                            </div>
                            <div className={styles.form}>
                                <h2>Réinitialiser le mot de passe</h2>
                                <form action="">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        required
                                    />
                                    <button className="">Valider</button>
                                </form>
                                <span className={styles.register}>
                                    <p>Annuler et revenir à la connexion</p>
                                    <button onClick={switchLogin}>
                                        Se connecter
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
