import { styled } from '@/src/styles/stiches.config'

export const InputBox = styled('div', {
  position: 'relative',
  display: 'flex',
  // backgroundColor: 'Red',
  alignItems: 'center',
  padding: '0px 20px',
  border: '2px solid $gray500',
  borderRadius: '$sm',
  width: '100%',

  '&:has(input:focus)': {
    border: '2px solid $purple100',

    svg: {
      color: '$purple100',
    },
  },

  svg: {
    color: '$gray500',
  },

  form: {
    width: '100%',
  },

  input: {
    width: '100%',
    padding: '14px 20px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '$gray100',

    '&:focus': {
      outline: 'none',
    },

    '&::placeholder': {
      color: '$gray400',
    },
  },
})
