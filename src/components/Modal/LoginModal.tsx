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
import { useRouter  } from "next/navigation";
import { signIn } from "next-auth/react";


import useLoginModal from '@/app/hooks/useLoginModal';
import useRgisterModal from '@/app/hooks/useRegisterModal';

import Modal from "./Modal";
import Heading from "../Heading/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button/Button";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:'',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);

            if(callback?.ok){
                toast.success('Logged In');
                router.refresh();
                loginModal.onClose();
                router.push("/dashboard")
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {}}
            />
            <div className="text-gray-500 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        I don't have an account?
                    </div>
                    <div onClick={loginModal.onClose} className="text-blue cursor-pointer hover:underline">
                        Register
                    </div>
                </div>
            </div>
        </div>
    )

    const bodyContent = (
        <div className="flex flex-col items-center gap-4 w-full">
             <Heading
                title="Welcome Back !!"
                subtitle="Login to your account"
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
            <Input 
                id="password"
                label="Password"
                type="password"
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
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)} 
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;