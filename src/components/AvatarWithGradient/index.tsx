import Image from 'next/image'
import { GradientContainer } from './styles'

interface AvatarWithGradientProps {
  url?: string | null
  imgWidth?: number
  imgHeight?: number
  imgSize?: 'sm' | 'md' | 'lg'
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
        src={url!}
        alt="User Photo"
        width={imgWidth}
        height={imgHeight}
        quality={100}
        referrerPolicy="no-referrer"
      />
    </GradientContainer>
  )
}
