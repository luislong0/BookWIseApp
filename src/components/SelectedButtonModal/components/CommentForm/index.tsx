import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { RatingButton } from '@/src/components/RatingButton'
import { Nunito } from '@next/font/google'
import { Check, X } from 'phosphor-react'
import { ButtonsBox, CommentFormBox, Form, Header, UserInfoBox } from './styles'

const nunito = Nunito({
  subsets: ['latin'],
})

interface CommentFormProps {
  handleHideCommentForm: () => void
}

export function CommentForm({ handleHideCommentForm }: CommentFormProps) {
  return (
    <CommentFormBox>
      <Header>
        <UserInfoBox>
          <AvatarWithGradient imgHeight={45} imgWidth={45} imgSize={'md'} />
          <span>Cristofer Rosser</span>
        </UserInfoBox>
        <RatingButton />
      </Header>
      <Form>
        <textarea
          className={nunito.className}
          placeholder="escreva sua avaliação"
          maxLength={450}
        />
        <ButtonsBox>
          <button onClick={handleHideCommentForm}>
            <X size={24} />
          </button>
          <button>
            <Check size={24} />
          </button>
        </ButtonsBox>
      </Form>
    </CommentFormBox>
  )
}
