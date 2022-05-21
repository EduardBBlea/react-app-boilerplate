import { useState, useEffect } from "react";

const useFetch = ({fetchFn, immediate = false}) => {
    const [response, setResponse] = useState(null);

    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const load = () => {
        setIsLoading(true);
        fetchFn().then(($response) => {
            setResponse($response);
        }).catch(($error) => {
            setError($error);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        if (immediate) {
            load();
        }
    }, []);

    return {
        response,
        error,
        isLoading,
        load
    };
};

export default useFetch;