import BlurImage from '../../components/BlurImage'

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-row items-center mt-10">
        <div className="basis-1/2">
          <h1 className="font-bold text-4xl">Build all the things.</h1>
          <h2 className="text-gray-700">
            Why buy it when you can build a better one?
          </h2>
        </div>
        <div className="basis-1/2 max-w-[15%] mx-auto">
          <BlurImage imageUrl="https://res.cloudinary.com/bjg-photo/image/upload/v1661301699/sasha/201_web_txr8jf.jpg" />
        </div>
      </div>
      <hr className="my-6" />
    </div>
  )
}
