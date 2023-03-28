import { Container, InfoBox } from './styles'

interface UserBookInfoProps {
  image: any
  title: string
  subtitle: string
}

export function UserBookInfo({ title, image, subtitle }: UserBookInfoProps) {
  return (
    <Container>
      {image}
      <InfoBox>
        <span>{title}</span>
        <span>{subtitle}</span>
      </InfoBox>
    </Container>
  )
}
