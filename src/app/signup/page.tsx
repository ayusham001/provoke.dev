'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../firebase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const router = useRouter();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-72">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign up</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium leading-6">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="passwordAgain" className="block text-sm font-medium leading-6">
            Password Again
          </label>
          <input
            id="passwordAgain"
            name="passwordAgain"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
            className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
          onClick={() => signup()}
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already a member?{' '}
          <button onClick={() => router.push('signin')} className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
