"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/header";

export default function LoginPage() {
    const [errors, setErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("rau17cb@gmail.com");
    const [password, setPassword] = useState<string>("Abc123");
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
        <div className="form-signin w-100 m-auto">
            <Header/>
            <form onSubmit={handleSubmit}>
                <div className={'form-floating'}>
                    <input
                        type="email"
                        placeholder="test@test.com"
                        name="email"
                        className="form-control mb-2"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className={'form-floating'}>
                    <input
                        type="password"
                        placeholder="123123"
                        name="password"
                        className="form-control mb-2"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <label htmlFor='floatingPassword'>Contrassenya</label>
                </div>
                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                >
                    Accedir
                </button>
            </form>

            {errors.length > 0 && (
                <div className="alert alert-danger mt-2">
                    <ul className="mb-0">
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
