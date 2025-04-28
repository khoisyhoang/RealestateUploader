"use client";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignUpForm() {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const dataFinal = {
            username: (form.elements.namedItem("username") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            password: (form.elements.namedItem("pass") as HTMLInputElement).value
        }
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`);
        try {
            // Send a POST request to the backend API
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataFinal),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }


    }

    return (
        <>
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-4 w-full mx-auto text-center max-w-[400px] border-2 p-4 shadow-2xl rounded-lg" onSubmit={handleSubmit}>
                <label htmlFor="username" className="text-left font-bold border-b-2 rounded-lg" >Username</label>
                <input type="text" placeholder="Username" id="username" className="outline-none" />
                <label htmlFor="email" className="text-left font-bold border-b-2 rounded-lg ">Email</label>
                <input type="email" placeholder="Email" id="email" className="outline-none" />
                <label htmlFor="pass" className="text-left font-bold border-b-2 rounded-lg">Password</label>
                <input type="password" placeholder="Password" id="pass" className="focus:outline-none and focus:ring-0 bg-transparent" />
                <button type="submit" className="btn">Sign Up</button>
            </form>
            <p className="text-center mt-4">Already have an account? <Link href="/login" className="text-blue-500">Sign In</Link></p>

        </>
    );
}