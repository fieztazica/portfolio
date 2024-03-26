'use client';

import { signIn, signOut } from 'next-auth/react';

export function SignOut() {
  return (
    <button
      className="text-xs text-mine-shaft-700 dark:text-mine-shaft-300 mt-2 mb-6"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className="px-3 py-2 border border-mine-shaft-200 dark:border-mine-shaft-700 bg-mine-shaft-50 dark:bg-mine-shaft-800 rounded p-1 text-sm inline-flex items-center leading-4 text-mine-shaft-900 dark:text-mine-shaft-100 mb-8"
      onClick={() => signIn('github')}
    >
      <img alt="GitHub logo" src="/github-logo.svg" width="20" height="20" />
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  );
}
