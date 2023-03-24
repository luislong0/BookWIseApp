import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nunito } from '@next/font/google'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { LoginButton } from '../LoginButton'
import googleIcon from '../../assets/logos_google-icon.svg'

import {
  ButtonBox,
  CloseBtn,
  Content,
  LoginButtonsContainer,
  Overlay,
  Trigger,
} from './styles'

const nunito = Nunito({
  subsets: ['latin'],
})

export function LoginToRateModal() {
  return (
    <Dialog.Root>
      <Trigger>
        <button className={nunito.className}>Avaliar</button>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content className={nunito.className}>
          <CloseBtn>
            <X size={24} weight="bold" />
          </CloseBtn>

          <LoginButtonsContainer>
            <span>Faça login para deixar sua avaliação</span>
            <ButtonBox>
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
            </ButtonBox>
          </LoginButtonsContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
