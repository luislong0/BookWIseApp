import { styled } from '@/src/styles/stiches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  maxWidth: '100vw',
  width: '100%',
  height: '100vh',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.60)',
})

export const Content = styled(Dialog.Content, {
  fontFamily: 'Nunito',
  maxWidth: 660,
  width: '100%',
  height: '100vh',
  padding: '$6 3rem',
  backgroundColor: '$gray800',
  boxShadow: '-4px 1px 24px -6px rgba(0,0,0,0.86);',

  position: 'fixed',
  top: '0',
  right: '0',
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

  cursor: 'pointer',

  '&:hover': {
    color: '$gray300',
  },
})

export const RatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$10',
})
export const RatingsContent = styled('div', {})
export const RatingsContentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },

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
