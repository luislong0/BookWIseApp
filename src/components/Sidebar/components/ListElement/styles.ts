import { styled } from '@/src/styles/stiches.config'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})
export const ListButton = styled(Link, {
  variants: {
    activated: {
      true: {
        fontWeight: 'bold',
        color: '$gray100',
      },
      false: {
        color: '$gray400',
      },
    },
  },

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  background: 'transparent',
  border: 'none',

  cursor: 'pointer',
  fontSize: '$md',
  textDecoration: 'none',

  '&:hover': {
    color: '$gray100',
  },
})

export const GradientBar = styled('div', {
  variants: {
    color: {
      colored: {
        background: '$gradient-vertical',
      },
      transparent: {
        background: 'transparent',
      },
    },
  },

  width: 4,
  height: 24,

  borderRadius: '$full',
})
