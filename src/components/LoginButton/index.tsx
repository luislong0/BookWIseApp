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
    }
  }

  return (
    <Button color={colorVariant} onClick={() => handleLogin(loginType)}>
      {icon}
      {description}
    </Button>
  )
}
