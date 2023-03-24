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
import { SimpleRatingBox } from './components/SimpleRatingComment'
import { LoginToRateModal } from '../LoginToRateModal'
import { useState } from 'react'
import { CommentForm } from './components/CommentForm'

interface SelectedButtonModalProps {
  isLoggedIn: boolean
}

const nunito = Nunito({
  subsets: ['latin'],
})
export function SelectedButtonModal({ isLoggedIn }: SelectedButtonModalProps) {
  const [makeAComment, setMakeAComment] = useState(false)

  function ToggleHideCommentForm() {
    if (makeAComment === false) {
      setMakeAComment(true)
    } else {
      setMakeAComment(false)
    }
  }

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
              {isLoggedIn === true && makeAComment === false ? (
                <button
                  className={nunito.className}
                  onClick={ToggleHideCommentForm}
                >
                  Avaliar
                </button>
              ) : (
                <></>
              )}

              {isLoggedIn === false && makeAComment === false && (
                <LoginToRateModal />
              )}
            </RatingsContentHeader>
            {makeAComment === true && (
              <CommentForm handleHideCommentForm={ToggleHideCommentForm} />
            )}
            <SimpleRatingBox />
          </RatingsContent>
        </RatingsContainer>
      </Content>
    </Dialog.Portal>
  )
}
