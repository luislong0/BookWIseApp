import { X } from 'phosphor-react'
import {
  CloseBtn,
  Content,
  Overlay,
  RatingsContainer,
  RatingsContent,
  RatingsContentHeader,
} from './styles'
import { SelectedButtonCard } from './components/SelectedBookCard'
import * as Dialog from '@radix-ui/react-dialog'
import { Nunito } from '@next/font/google'
import { SimpleRatingBox } from './components/SimpleRatingBox'

const nunito = Nunito({
  subsets: ['latin'],
})
export function SelectedButtonModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content className={nunito.className}>
        <CloseBtn>
          <X size={24} weight="bold" />
        </CloseBtn>
        <SelectedButtonCard />
        <RatingsContainer>
          <RatingsContent>
            <RatingsContentHeader>
              <span>Avaliações</span>
              <button className={nunito.className}>Avaliar</button>
            </RatingsContentHeader>
            <SimpleRatingBox />
          </RatingsContent>
        </RatingsContainer>
      </Content>
    </Dialog.Portal>
  )
}
