import BlurImage from '../components/BlurImage'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-row items-center mt-10">
        <div className="basis-1/2">
          <h1 className="font-bold text-4xl">Brad Gibbs</h1>
          <h2 className="text-stone-700 dark:text-stone-300">
            Product Manager, Founder & Builder.
          </h2>
        </div>
        <div className="basis-1/2 max-w-[15%] mx-auto">
          <BlurImage imageUrl="https://res.cloudinary.com/bjg-photo/image/upload/v1661300616/sasha/IMG_0117_cfp5m2.jpg" />
        </div>
      </div>
      <hr className="my-6" />
    </div>
  )
}
