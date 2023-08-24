export async function processError(childrenErrors, setError) {
    Object.keys(childrenErrors).forEach((field) => {
        if (childrenErrors[field][0]) {
            setError(field, {
                type: "custom",
                message: childrenErrors[field][0],
            });
        }
    });
}
