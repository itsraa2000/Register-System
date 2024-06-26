'use client'

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';
import Button from '../Button/Button'

interface ModalProps {
    isOpen?: boolean;
    onClose:()=> void;
    onSubmit:()=> void;
    title?: string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect (() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if(disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled , onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction ) {
            return;
        }
    },[disabled, secondaryAction])

    if (!isOpen){
        return null;
    }

    return (
      <div className="flex w-full h-full justify-center items-center overflow-x-hidden overflow-y-hidden fixed inser-0 z-50 outline-none focus:outline-none bg-black/60">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                {/* Content */}
                <div 
                 className=
                 {`translate duration-300 h-full
                 ${showModal ? 'translate-y-0' : 'translate-y-full'}
                 ${showModal ? 'opacity-100' : 'opacity-0'}
                 `}>
                    <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button 
                                onClick={handleClose}
                                className="p1 border-0 hover:opacity-70 transition absolute right-9">
                                <IoMdClose size={18} />
                            </button>
                            <div className="text-lg absolute">
                                {title}
                            </div>
                        </div>
                            {/* Body */}
                            <div className="text-lg px-32 py-6 flex-auto">
                                {body}
                            </div>
                            {/* Footer */}
                            <div className="flex flex-col gap2 px-32 py-6 ">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    { secondaryAction && secondaryActionLabel && (
                                    <Button 
                                        outline
                                        disabled={disabled}
                                        onClick={handleSecondaryAction}
                                        label={secondaryActionLabel }/>
                                    )}
                                    <Button 
                                        disabled={disabled}
                                        onClick={handleSubmit}
                                        label={actionLabel}/>
                                </div>
                                {footer}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Modal