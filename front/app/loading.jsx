import styles from "@/styles/components/loader.module.scss";

const Loading = () => {
    return (
        <div className={`z-50 ${styles.wrapper}`}>
            <div className={styles.loader}>
                <p className="text-white font-title text-4xl">Chargement...</p>
                <img src="" alt="loader image" />
            </div>
        </div>
    );
};

export default Loading;
