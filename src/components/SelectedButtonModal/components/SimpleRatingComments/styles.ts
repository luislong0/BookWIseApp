import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  padding: '$6',

  backgroundColor: '$gray700',
  borderRadius: '$md',

  marginBottom: '$3',

  p: {
    lineHeight: '$base',
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const Header = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})

export const UserBox = styled('div', {
  display: 'flex',
  gap: '$4',

  alignItems: 'center',
})

export const UserInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$md',
      color: '$gray200',
      fontWeight: 'bold',
    },
    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
      fontWeight: 'regular',
    },
  },
})
