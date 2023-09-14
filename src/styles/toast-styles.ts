import { DefaultToastOptions } from 'react-hot-toast';

export const toastStyles: DefaultToastOptions = {
    duration: 3000,
    style: {
        fontSize: '16px',
        color: '#ffffff',
        maxWidth: '500px',
        height: '48px',
    },
    success: {
        style: {
            backgroundColor: '#36D671',
        },
        iconTheme: {
            primary: '#ffffff',
            secondary: '#36D671',
        },
    },
    error: {
        style: {
            backgroundColor: '#ff4b4b',
        },
        iconTheme: {
            primary: '#ffffff',
            secondary: '#ff4b4b',
        },
    },
};
