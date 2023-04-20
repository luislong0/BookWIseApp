import { Books } from 'phosphor-react'
import { Container } from './styles'

export function EmptyAvaliations() {
  return (
    <>
      <Container>
        <Books size={32} />
        <p>Ainda nenhum livro foi avaliado!</p>
      </Container>
    </>
  )
}
