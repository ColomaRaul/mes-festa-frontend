"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/header";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@/components/icons";
import {Snippet} from "@nextui-org/snippet";

export default function LoginPage() {
    const [errors, setErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("rau17cb@gmail.com");
    const [password, setPassword] = useState<string>("Abc123");
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);

        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (responseNextAuth?.error) {
            setErrors(responseNextAuth.error.split(","));
            return;
        }

        router.push("/organization");
    };

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <Header/>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        label="Email"
                        value={email}
                        className="form-control mb-2"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        placeholder="123123"
                        label="Contrasenya"
                        className="form-control mb-2"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                    />
                    <Button
                        type="submit"
                        className="btn btn-primary w-100 py-2"
                    >
                        Accedir
                    </Button>
                </form>

                {errors.length > 0 && (
                    <div className="mt-8">
                        {errors.map((error) => (
                            <Snippet key={error} hideSymbol hideCopyButton variant="flat" color={'danger'}>
                                <span>
                                    {error}
                                </span>
                            </Snippet>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
