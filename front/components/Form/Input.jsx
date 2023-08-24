export default function Input({
    label,
    labelClassName,
    name,
    register,
    errors,
    type,
    className,
    validation,
    placeholder,
}) {
    return (
        <div className="flex flex-col">
            <label className={labelClassName}>{`${label}${
                validation?.required ? " *" : ""
            }`}</label>
            <input
                placeholder={placeholder}
                type={type}
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
