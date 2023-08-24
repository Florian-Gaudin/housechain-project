export async function processError(childrenErrors, setError) {
    Object.keys(childrenErrors).forEach((field) => {
        console.log(field, childrenErrors[field][0]);
        if (childrenErrors[field][0]) {
            setError(field, {
                type: "custom",
                message: childrenErrors[field][0],
            });
        }
    });
    console.log("Processed errors:", childrenErrors);
}

const stringifyErrors = (arrayError) => {
    let errors = "";
    arrayError.forEach((error, index) => {
        errors += error + (index === arrayError.length - 1 ? "" : " ");
    });
    console.log(errors);
    return errors;
};
