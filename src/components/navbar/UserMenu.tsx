'use client'

import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div 
                    onClick={loginModal.onOpen}
                    className="text-blue outline outline-blue md:block font-semibold py-3 px-8 rounded-full hover:bg-blue hover:text-white transition cursor-pointer text-sm">
                        Login
                </div>
                <div 
                    onClick={registerModal.onOpen}
                    className="text-blue outline outline-blue md:block font-semibold py-3 px-6 rounded-full hover:bg-blue hover:text-white transition cursor-pointer text-sm">
                        Register
                </div>
            </div>
        </div>
    )
}

export default UserMenu