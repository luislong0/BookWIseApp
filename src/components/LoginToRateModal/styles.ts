import { styled } from '@/src/styles/stiches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  maxWidth: '100vw',
  width: '100%',
  height: '100vh',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.60)',
  // backgroundColor: 'Red',
  zIndex: 2,
})

export const Content = styled(Dialog.Content, {
  fontFamily: 'Nunito',
  maxWidth: 462,
  width: '100%',
  padding: '4.5rem 3.5rem',
  borderRadius: '$md',
  backgroundColor: '$gray700',
  boxShadow: '-4px 1px 24px -6px rgba(0,0,0,0.86);',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
})

export const CloseBtn = styled(Dialog.Close, {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$gray400',
  width: 24,
  height: 24,
  marginLeft: 'auto',
  marginBottom: '1rem',

  top: 16,
  right: 16,

  position: 'absolute',

  cursor: 'pointer',

  '&:hover': {
    color: '$gray300',
  },
})

export const Trigger = styled(Dialog.Trigger, {
  button: {
    backgroundColor: 'transparent',
    color: '$purple100',
    fontWeight: 'bold',
    fontSize: '$md',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green100',
    },
  },
})

export const LoginButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray200',
    marginBottom: '$10',
  },
})
export const ButtonBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
