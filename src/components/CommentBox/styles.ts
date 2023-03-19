import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 610,

  padding: '$6',

  backgroundColor: '$gray700',
  borderRadius: '$md',
})
export const Header = styled('header', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})

export const UserInfoBox = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
})

export const UserDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$md',
      color: '$gray100',
    },

    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})
export const BookComment = styled('div', {
  display: 'flex',
  gap: '$5',

  alignItems: 'flex-start',
})

export const BookInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$4',
})

export const BookTitleBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  span: {
    '&:first-child': {
      fontSize: '$xl',
      color: '$gray100',
    },
    '&:last-child': {
      fontSize: '$md',
      color: '$gray400',
    },
  },
})

export const TextBox = styled('div', {
  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '$sm',
    color: '$purple100',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})
