import { useState, useCallback } from "react";

export const fetchData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const callFetch = useCallback((options) => {
        setLoading(true);

        fetch(options.url, {
            method: options.method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            ...(options.body
                ? {
                      body: JSON.stringify(options.body),
                  }
                : {}),
        })
            .then((res) => {
                if (res.status && res.status == 500) {
                    return setError({
                        name: "error",
                        message: "Une erreur est survenue",
                        status: res.status,
                    });
                }
                return res.json();
            })
            .catch((err) => {
                setError(err);
            })
            .then((data) => {
                setData(data), setLoading(false);
            }),
            (error) => {
                setError(error), setLoading(false);
            };
    }, []);

    return { data, error, loading, callFetch };
};

// Pour l'utiliser:
// const { data, error, loading, callFetch } = fetchData
