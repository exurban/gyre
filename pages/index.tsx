import Image from "next/image"
import { useState } from "react"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Gallery() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="font-bold mt-12 mx-auto text-4xl text-center ">Sacha's Gallery • La galerie de Sacha • Галерея Саши</h1>
      <hr className="my-6"/>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage />
      </div>
    </div>
  )
}

function BlurImage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
    <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image 
          alt=""
          src="https://res.cloudinary.com/bjg-photo/image/upload/v1655316749/sasha/D26EF5AB-5FA9-4ED3-B3BE-950CEF47B8E4_m2idw0.webp"
          layout="fill"
          objectFit="cover"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-off blur-0 scale-100'
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-800">[Title]</h3>
      <p className="mt-1 text-sm text-gray-600">[description]</p>
    </a>
    </>
  )
}