'use client'

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'


interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    required,
    register,
    errors,
}) => {
    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiDollar
                    size={24}
                    className="text-blue absolute top-5 left-2"
                />
            )}
            <input 
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-black
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disbled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-blue' : 'border-blue'}
                    ${errors[id] ? 'focus:border-blue' : 'focus:border-blue'}
                    `}
            />
            <label className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    ${formatPrice ? 'left-9' : 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-ficus:-translate-y-4
                    ${errors[id] ? 'text-blue' : 'text-blue'}
                `}>
                {label}
            </label>
        </div>
    )
}

export default Input;