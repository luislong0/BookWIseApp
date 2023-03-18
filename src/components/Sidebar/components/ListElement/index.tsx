import { Container, GradientBar, ListButton } from './styles'

interface ListElementProps {
  icon: any
  description: string
  activatedStatus: 'true' | 'false'
}

export function ListElement({
  icon,
  description,
  activatedStatus,
}: ListElementProps) {
  return (
    <Container>
      {activatedStatus === 'true' ? (
        <GradientBar color={'colored'} />
      ) : (
        <GradientBar color={'transparent'} />
      )}
      <ListButton activated={activatedStatus}>
        {icon}
        {description}
      </ListButton>
    </Container>
  )
}
