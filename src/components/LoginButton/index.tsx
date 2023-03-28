import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button } from './styles'

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
      signIn('google')
    } else if (option === 'github') {
      signIn('github')
    }
  }

  return (
    <Button color={colorVariant} onClick={() => handleLogin(loginType)}>
      {icon}
      {description}
    </Button>
  )
}
