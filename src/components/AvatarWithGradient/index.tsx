import Image from 'next/image'
import { GradientContainer } from './styles'

interface AvatarWithGradientProps {
  url?: string
}

export function AvatarWithGradient({ url }: AvatarWithGradientProps) {
  return (
    <GradientContainer>
      <Image
        src={'https://avatars.githubusercontent.com/u/100600769?v=4'}
        alt="User Photo"
        width={45}
        height={45}
        quality={100}
      />
    </GradientContainer>
  )
}
