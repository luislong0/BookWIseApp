import { styled } from '@/src/styles/stiches.config'

export const Button = styled('button', {
  variants: {
    color: {
      gray: {
        svg: {
          color: '$gray100',
        },
      },

      purple: {
        svg: {
          color: '$purple100',
        },
      },
    },
  },

  display: 'flex',
  width: '23.25rem',
  padding: '$5 $6',
  gap: '$5',
  backgroundColor: '$gray600',
  fontFamily: '$default',

  alignItems: 'center',

  fontSize: '$md',
  color: '$gray200',
  fontWeight: 'bold',
  borderRadius: '$md',
  border: 'none',
  transition: 'all ease-in-out 0.2s',

  '&:hover': {
    backgroundColor: '$gray500',
    cursor: 'pointer',
  },

  '&:focus': {
    backgroundColor: '$gray500',
  },

  svg: {
    height: '2rem',
  },
})
