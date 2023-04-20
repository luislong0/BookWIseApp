import { Book } from 'phosphor-react'
import { Container } from './styles'

export function EmptyUserAvaliation() {
  return (
    <>
      <Container>
        <Book size={32} />
        <p>Você ainda não realizou nenhuma avaliação!</p>
      </Container>
    </>
  )
}
