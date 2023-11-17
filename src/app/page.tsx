'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import HomePage from '../../components/Home';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
    <div className="p-8 w-full">
      <div>{session?.data?.user?.email }</div>
      <button onClick={() => signOut()}>Logout</button>
      <HomePage/>
    </div>
  )
}

Home.requireAuth = true