import { CloseIcon } from '../../icons/close.tsx';
import { PopupProps } from './types.ts';

import styles from './styles.module.scss';

export const Popup = ({ content, isPopupOpen, onPopupClose }: PopupProps) => {
    const onClose = () => {
        onPopupClose();
    };

    if (!isPopupOpen) {
        return null;
    }

    return (
        <div className={styles.popup}>
            <div className={styles.content}>
                <button
                    className={styles.button}
                    type="button"
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>
                {content}
            </div>
        </div>
    );
};
