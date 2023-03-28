import { styled } from '@/src/styles/stiches.config'

export const SidebarContainer = styled('div', {
  position: 'fixed',
  maxWidth: '14.5rem',
  width: '100%',
  height: 'calc(100vh - 40px)',
  background:
    'radial-gradient(circle, #0a3039, #0f2c36, #122732, #15232d, #161f28, #161f28, #161f28, #161f28, #15232d, #122732, #0f2c36, #0a3039);',
  borderRadius: '$md',

  ul: {
    maxWidth: '8.125rem',
    // backgroundColor: 'Red',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    margin: '4rem auto 0 3rem',

    gap: '$4',
  },
})

export const LogoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$10',

  gap: '$2',

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    background: '$gradient-horizontal',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
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

    color: '$gray300',
    fontSize: '$md',
    fontWeight: 'bold',

    fontFamily: '$default',
    transition: 'all 0.3s ease-in',
    cursor: 'pointer',

    '&:hover': {
      color: '$gray100',
    },

    svg: {
      color: '$green100',
    },
  },
})

export const UserInfoButtonBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  a: {
    textDecoration: 'none',
    fontSize: '$md',
    color: '$gray300',
    transition: 'all ease-out 0.2s',

    '&:hover': {
      color: '$gray100',
    },
  },

  button: {
    svg: {
      color: '$danger',
    },
  },
})
