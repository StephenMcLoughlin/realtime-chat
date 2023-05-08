import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { FC } from 'react'

import SignOutButton from '@/components/SignOutButton'

type Props = {}
{
  /* <button onClick={() => signOut()}></button> */
}
const page: FC<Props> = async ({}) => {
  const session = await getServerSession(authOptions)
  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
      <SignOutButton />
    </>
  )
}

export default page
