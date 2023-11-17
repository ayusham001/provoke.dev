'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-fit">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to your account</h2>
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
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm">Remember me</label>
        </div>
        <button
          onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })}
          disabled={!email || !password}
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-400">
          Not a member?{' '}
          <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
