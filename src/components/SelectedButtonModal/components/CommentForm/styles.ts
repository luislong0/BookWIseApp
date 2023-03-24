import { styled } from '@/src/styles/stiches.config'

export const CommentFormBox = styled('div', {
  backgroundColor: '$gray700',
  padding: '$6',
  borderRadius: '$md',
  marginBottom: '$3',
})
export const Header = styled('header', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
})
export const UserInfoBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  span: {
    fontSize: '$md',
    color: '$grau100',
    fontWeight: 'bold',
  },
})
export const Form = styled('form', {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  textarea: {
    width: '100%',
    height: '10rem',
    padding: '14px $5',
    borderRadius: '$sm',

    backgroundColor: '$gray800',
    border: '1px solid $gray500',

    fontSize: '$sm',
    color: '$gray100',
    resize: 'none',

    '&:focus': {
      outline: '1px solid $green100',
    },
  },
})
export const ButtonsBox = styled('div', {
  display: 'flex',
  marginTop: '$3',
  gap: '$2',

  button: {
    padding: '$2',
    backgroundColor: '$gray600',
    border: 'none',
    borderRadius: '$sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all ease-out 0.2s',

    '&:hover': {
      backgroundColor: '$gray500',
    },

    '&:first-child': {
      svg: {
        color: '$purple100',
      },
    },

    '&:last-child': {
      svg: {
        color: '$green100',
      },
    },
  },
})
