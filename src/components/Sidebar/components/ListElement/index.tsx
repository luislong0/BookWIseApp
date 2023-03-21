import { useRouter } from 'next/router'
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
  const router = useRouter()

  async function handleGoToPage(pageName: string) {
    if (pageName === 'Início') {
      await router.push('/home')
    } else if (pageName === 'Explorar') {
      await router.push('/explore')
    } else if (pageName === 'Perfil') {
      await router.push('/profile')
    }
  }

  return (
    <Container>
      {activatedStatus === 'true' ? (
        <GradientBar color={'colored'} />
      ) : (
        <GradientBar color={'transparent'} />
      )}
      <ListButton
        activated={activatedStatus}
        onClick={() => handleGoToPage(description)}
      >
        {icon}
        {description}
      </ListButton>
    </Container>
  )
}
