export default function Textarea({
    label,
    labelClassName,
    name,
    register,
    errors,
    rows,
    className,
    validation,
    placeholder,
}) {
    console.log("Textarea component received:", errors, errors[name]?.message);
    return (
        <div className="flex flex-col">
            <label className={labelClassName}>{`${label}${
                validation?.required ? " *" : ""
            }`}</label>
            <textarea
                placeholder={placeholder}
                rows={rows}
                className={`${className} ${
                    errors[name] ? "border-red" : "border-bg"
                }`}
                {...register(name, {
                    ...validation,
                    required: validation?.required
                        ? "Ce champ est requis."
                        : false,
                })}
            />
            {errors[name] && (
                <p
                    role="alert"
                    className="block mt-1 text-xs text-red font-semibold"
                >
                    {errors[name]?.message}
                </p>
            )}
        </div>
    );
}
