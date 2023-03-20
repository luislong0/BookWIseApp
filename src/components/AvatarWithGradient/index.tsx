import Image from 'next/image'
import { GradientContainer } from './styles'

interface AvatarWithGradientProps {
  url?: string
  imgWidth?: number
  imgHeight?: number
  imgSize?: 'sm' | 'md'
}

export function AvatarWithGradient({
  url,
  imgHeight,
  imgWidth,
  imgSize,
}: AvatarWithGradientProps) {
  return (
    <GradientContainer size={imgSize}>
      <Image
        src={'https://avatars.githubusercontent.com/u/100600769?v=4'}
        alt="User Photo"
        width={imgWidth}
        height={imgHeight}
        quality={100}
      />
    </GradientContainer>
  )
}
