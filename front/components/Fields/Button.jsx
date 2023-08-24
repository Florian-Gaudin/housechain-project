export default function Button({ title, className, disabled, submitted }) {
    return (
        <>
            <button
                disabled={disabled}
                className={`h-full block ${className ? className : ""}${
                    disabled ? "cursor-not-allowed opacity-50" : ""
                }${submitted ? "cursor-not-allowed opacity-50" : ""}`}
            >
                {title}
            </button>
            <span className="sr-only">{title}</span>
        </>
    );
}
