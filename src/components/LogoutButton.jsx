'use client'


import { authClient } from "@/lib/auth-client";

export default function LogoutButton(){
    const handleLogout = async () => {
        await authClient.signOut()
        window.location.href = '/signin'
    }

    return(
    <button onClick={handleLogout}>
        Logout
    </button>
    );
}
