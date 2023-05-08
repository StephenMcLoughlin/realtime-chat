'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
type Props = {}

const SignOutButton = (props: Props) => {
  return <button onClick={async () => signOut()}>SignOutButton</button>
}

export default SignOutButton
