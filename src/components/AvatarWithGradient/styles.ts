import { styled } from '@/src/styles/stiches.config'

export const GradientContainer = styled('div', {
  variants: {
    size: {
      sm: {
        width: 32,
        height: 32,
      },
      md: {
        width: 50,
        height: 50,
      },
      lg: {
        width: 74,
        height: 74,
      },
    },
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$gradient-vertical',
  width: 50,
  height: 50,
  borderRadius: '$full',

  img: {
    borderRadius: '$full',
  },
})
