import { styled } from '@/src/styles/stiches.config'

export const GradientContainer = styled('div', {
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
