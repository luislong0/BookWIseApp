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
import { SimpleRatingComments } from './components/SimpleRatingComments'
import { LoginToRateModal } from '../LoginToRateModal'
import { useContext, useEffect, useState } from 'react'
import { CommentForm } from './components/CommentForm'
import { api } from '@/src/lib/axios'
import { BookContext } from '@/src/contexts/BookContext'

interface SelectedButtonModalProps {
  isLoggedIn: boolean
  bookId: string
}

interface BookAvaliationsProps {
  id: string
  userId: string
  bookId: string
  comment: string
  ratingNumber: number
  User: {
    name: string
    image: string
  }
}

const nunito = Nunito({
  subsets: ['latin'],
})
export function SelectedButtonModal({
  isLoggedIn,
  bookId,
}: SelectedButtonModalProps) {
  const [makeAComment, setMakeAComment] = useState(false)
  const [bookAvaliations, setBookAvaliations] = useState<
    BookAvaliationsProps[]
  >([] as BookAvaliationsProps[])

  const { updateCommentsToggle } = useContext(BookContext)

  function ToggleHideCommentForm() {
    if (makeAComment === false) {
      setMakeAComment(true)
    } else {
      setMakeAComment(false)
    }
  }

  async function getRatingComments(bookId: string) {
    const avaliationsResponse = await api.get(`/avaliation/bookid`, {
      params: { bookId },
    })
    setBookAvaliations(avaliationsResponse.data.avaliations)
  }

  useEffect(() => {
    getRatingComments(bookId)
  }, [bookId, updateCommentsToggle])

  return (
    <Dialog.Portal>
      <Overlay />
      <Content className={nunito.className}>
        <CloseBtn>
          <X size={24} weight="bold" />
        </CloseBtn>
        <SelectedButtonCard bookId={bookId} />
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
              <CommentForm
                handleHideCommentForm={ToggleHideCommentForm}
                bookId={bookId}
              />
            )}
            {Array.isArray(bookAvaliations) === true &&
              bookAvaliations!.map((bookAvaliation, i) => {
                return (
                  <SimpleRatingComments
                    key={bookAvaliation.id}
                    name={bookAvaliation.User.name}
                    imgUrl={bookAvaliation.User.image}
                    comment={bookAvaliation.comment}
                    commentRate={bookAvaliation.ratingNumber}
                  />
                )
              })}
          </RatingsContent>
        </RatingsContainer>
      </Content>
    </Dialog.Portal>
  )
}
