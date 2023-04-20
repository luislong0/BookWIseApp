import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button } from './styles'
import { successNotification } from '../Notifiers/Success'
import { errorNotification } from '../Notifiers/Error'

interface LoginButtonProps {
  icon?: any
  description: string
  colorVariant?: 'gray' | 'purple'
  loginType: 'google' | 'github' | 'visitant'
}

export function LoginButton({
  icon,
  description,
  colorVariant,
  loginType,
}: LoginButtonProps) {
  const router = useRouter()

  async function handleLogin(option: string) {
    if (option === 'visitant') {
      await router.push('/home')
    } else if (option === 'google') {
      try {
        signIn('google')
        successNotification('Usuário logado com sucesso')
      } catch (error) {
        errorNotification('Erro ao realizar o login!')
      }
    } else if (option === 'github') {
      try {
        signIn('github')
        successNotification('Usuário logado com sucesso')
      } catch (error) {
        errorNotification('Erro ao realizar o login!')
      }
    }
  }

  return (
    <Button color={colorVariant} onClick={() => handleLogin(loginType)}>
      {icon}
      {description}
    </Button>
  )
}
