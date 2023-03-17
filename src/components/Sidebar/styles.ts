import { styled } from '@/src/styles/stiches.config'

export const SidebarContainer = styled('div', {
  position: 'fixed',
  maxWidth: '14.5rem',
  width: '100%',
  height: 'calc(100vh - 40px)',
  background:
    'radial-gradient(circle, #0a3039, #0f2c36, #122732, #15232d, #161f28, #161f28, #161f28, #161f28, #15232d, #122732, #0f2c36, #0a3039);',
  borderRadius: '$md',
})

export const UserContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
  marginBottom: '$6',

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',
    backgroundColor: 'transparent',
    border: 'none',

    color: '$gray200',
    fontSize: '$md',
    fontWeight: 'bold',

    fontFamily: '$default',
  },
})
