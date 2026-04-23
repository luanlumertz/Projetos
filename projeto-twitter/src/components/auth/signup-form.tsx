"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const SignupForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

    return (
        <>
            <Input
                type="email"
                placeholder="Digite seu nome"
                value={nameField}
                onChange={t => setNameField(t)}
            />

            <Input
                type="email"
                placeholder="Digite seu email"
                value={emailField}
                onChange={t => setEmailField(t)}
            />

            <Input
                type="password"
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
            />

            <Button 
                label="Criar conta"
                onClick={handleEnterButton}
                size="large"
            />
        </>
    )
}