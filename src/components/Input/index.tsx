import { MagnifyingGlass } from 'phosphor-react'
import { InputBox } from './styles'

export function Input() {
  return (
    <InputBox>
      <input type="text" placeholder="Buscar livro ou autor" />
      <MagnifyingGlass size={20} weight="bold" />
    </InputBox>
  )
}
