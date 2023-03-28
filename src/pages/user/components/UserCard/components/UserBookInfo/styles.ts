import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },
})

export const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  span: {
    '&:first-child': {
      fontSize: '$md',
      color: '$gray200',
      fontWeight: 'bold',
    },

    '&:last-child': {
      fontSize: '$sm',
      color: '$gray300',
      fontWeight: 'regular',
    },
  },
})
