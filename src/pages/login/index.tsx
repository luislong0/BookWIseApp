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

export default function Login() {
  return (
    <>
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
