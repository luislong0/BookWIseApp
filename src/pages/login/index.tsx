import Image from 'next/image'
import {
  BannerContainer,
  ButtonsContainer,
  Container,
  DescriptionContainer,
  LoginBox,
  LoginContainer,
} from './styles'

import loginBanner from '../../assets/image.svg'
import googleIcon from '../../assets/logos_google-icon.svg'

import { LoginButton } from '@/src/components/LoginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { RocketLaunch } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function Login() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.data) {
      router.push('/home')
    }
  }, [router, session])

  return (
    <>
      <NextSeo
        title="Login | Book Wise "
        description="Visualize e faça avaliações sobre seus livros preferidos!!"
      />

      <Container>
        <BannerContainer>
          <Image src={loginBanner} alt="BookWise Login Banner" />
        </BannerContainer>
        <LoginContainer>
          <LoginBox>
            <DescriptionContainer>
              <span>Boas vindas!</span>
              <span>Faça seu login ou acesse como visitante</span>
            </DescriptionContainer>

            <ButtonsContainer>
              <LoginButton
                icon={<Image src={googleIcon} alt="google img" />}
                description="Entrar com Google"
                loginType="google"
              />

              <LoginButton
                icon={<FontAwesomeIcon icon={faGithub} />}
                description="Entrar com GitHub"
                colorVariant="gray"
                loginType="github"
              />

              <LoginButton
                icon={<RocketLaunch weight="bold" size={32} />}
                description="Acessar como visitante"
                colorVariant="purple"
                loginType="visitant"
              />
            </ButtonsContainer>
          </LoginBox>
        </LoginContainer>
      </Container>
    </>
  )
}
