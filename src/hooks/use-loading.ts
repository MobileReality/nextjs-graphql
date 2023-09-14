import { useState } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const loadingStart = () => {
        setIsLoading(true);
    };

    const loadingStop = () => {
        setIsLoading(false);
    };

    return { loadingStart, loadingStop, isLoading };
};
