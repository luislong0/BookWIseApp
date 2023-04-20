import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputBox } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { BookContext } from '@/src/contexts/BookContext'
import { UserContext } from '@/src/contexts/UserContext'
import { errorNotification } from '../Notifiers/Error'

const searchFormSchema = z.object({
  searchData: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface InputProps {
  inputPage: 'explore' | 'user'
}

export function Input({ inputPage }: InputProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { getBookByTheName } = useContext(BookContext)
  const { handleSearchUserAvaliation, loggedUser } = useContext(UserContext)

  function handleSearchABook(data: SearchFormInputs) {
    if (inputPage === 'explore') {
      getBookByTheName(data.searchData)
      reset()
    } else {
      try {
        handleSearchUserAvaliation(data.searchData)
      } catch (error) {
        errorNotification(String(error))
      }

      reset()
    }
  }

  return (
    <InputBox>
      <form onSubmit={handleSubmit(handleSearchABook)}>
        <input
          type="text"
          placeholder="Buscar livro ou autor"
          {...register('searchData')}
        />
      </form>
      <MagnifyingGlass size={20} weight="bold" />
    </InputBox>
  )
}
