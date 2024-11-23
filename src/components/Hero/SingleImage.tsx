import { FC } from 'react'

interface SingleImageProps {
  href: string
  imgSrc: string
}

const SingleImage: FC<SingleImageProps> = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  )
}

export default SingleImage
