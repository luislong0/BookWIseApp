import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { InputBox } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { BookContext } from '@/src/contexts/BookContext'

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

  function handleSearchABook(data: SearchFormInputs) {
    if (inputPage === 'explore') {
      console.log('in explore')
      console.log(data.searchData)
      getBookByTheName(data.searchData)
      reset()
    } else if (inputPage === 'user') {
      console.log('in user')
      console.log(data.searchData)
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
