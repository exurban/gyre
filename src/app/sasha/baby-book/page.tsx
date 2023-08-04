import { authOptions } from 'src/lib/auth'
import { getServerSession } from 'next-auth/next'
import { SignOutButton } from '@/components/SignOutButton'

export default async function Gallery() {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (!session) {
    return (
      <div>
        {JSON.stringify(session)}
        <p>Access Denied!</p>
      </div>
    )
  }
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-row mt-4">
        <div className="basis-2/3 mt-10">
          <h1 className="font-bold text-4xl">
            Hi! I am Sasha and this is my life (so far)
          </h1>
          <hr className="my-6" />

          <section id="birth">
            <h2 className="font-bold text-2xl">Birth</h2>
            <div className="h-96 bg-red-500"></div>
          </section>
          <section id="halloween">
            <h2 className="font-bold text-2xl">Halloween</h2>
            <div className="h-96 bg-orange-500"></div>
          </section>
          <section id="christmas">
            <h2 className="font-bold text-2xl">Christmas</h2>
            <div className="h-96 bg-green-500"></div>
          </section>
          <section id="cart-racing">
            <h2 className="font-bold text-2xl">Cart Racing</h2>
            <div></div>
          </section>
        </div>
        <div className="basis-1/3">
          <div className="fixed top-30 flex flex-col ml-8">
            <div>
              {JSON.stringify(session)}
              <SignOutButton />
            </div>
            <a href="#birth">Birth</a>
            <a href="#halloween">Halloween</a>
            <a href="#christmas">Christmas</a>
            <a href="#cart-racing">Cart Racing</a>
          </div>
        </div>
      </div>
    </div>
  )
}
