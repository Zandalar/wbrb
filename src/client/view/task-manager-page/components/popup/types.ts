import { ReactNode } from 'react';

export type PopupProps = {
    content: ReactNode;
    isPopupOpen: boolean;
    onPopupClose: () => void;
};
