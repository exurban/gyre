import { redirect } from 'next/navigation'
import { authOptions } from 'src/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Sasha() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/sasha/baby-book')
  } else {
    redirect('/sasha/signin')
  }
}
