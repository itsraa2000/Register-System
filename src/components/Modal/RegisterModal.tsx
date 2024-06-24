'use client'

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback , useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

import useRgisterModal from '@/app/hooks/useRegisterModal'
import { log } from "console";
import Modal from "./Modal";
import Heading from "../Heading/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";

const RegisterModal = () => {
    const registerModal = useRgisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:'',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        try {
            localStorage.setItem('userData', JSON.stringify(data));
            registerModal.onClose();
        } catch (error) {
            toast.error('Something Went Wrong.');
        } finally {
            setIsLoading(false);
        }
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Heading
                title="Welcome"
                subtitle="To my website"
                center
             />
             <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
             />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)} 
            body={bodyContent}
        />
    );
}

export default RegisterModal;