import React from 'react';
import { ToastBar, Toaster } from 'react-hot-toast';
import { toastStyles } from 'styles/toast-styles';

export const Toast = () => {
    return (
        <Toaster position="top-right" toastOptions={toastStyles}>
            {(toast) => (
                <ToastBar toast={toast}>
                    {({ icon, message }) => (
                        <>
                            {icon}
                            <div>{message}</div>
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
