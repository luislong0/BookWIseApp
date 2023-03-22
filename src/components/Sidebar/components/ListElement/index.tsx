import { Container, GradientBar, ListButton } from './styles'

interface ListElementProps {
  icon: any
  description: string
  activatedStatus: 'true' | 'false'
  href: string
}

export function ListElement({
  icon,
  description,
  activatedStatus,
  href,
}: ListElementProps) {
  return (
    <Container>
      {activatedStatus === 'true' ? (
        <GradientBar color={'colored'} />
      ) : (
        <GradientBar color={'transparent'} />
      )}
      <ListButton href={href} activated={activatedStatus}>
        {icon}
        {description}
      </ListButton>
    </Container>
  )
}
