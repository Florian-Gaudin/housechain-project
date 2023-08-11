export default function Button({ title, className, disabled }) {
    return (
        <>
            <button
                disabled={disabled}
                className={`h-full block disabled:bg-gray-300 ${
                    className ? className : ""
                }`}
            >
                {title}
            </button>
            <span className="sr-only">{title}</span>
        </>
    );
}
