import Image from 'next/image'

type Props = {
  imageUrl: string
}

const BlurImage = ({ imageUrl }: Props) => {
  return (
    <>
      <a href="#" className="group">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image alt="" src={imageUrl} fill={true} sizes="33vw" />
        </div>
      </a>
    </>
  )
}

export default BlurImage
