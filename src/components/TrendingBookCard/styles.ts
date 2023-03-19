import { styled } from '@/src/styles/stiches.config'

export const TrendingBookCardContainer = styled('div', {
  display: 'flex',
  // alignItems: 'center',
  gap: '$5',

  padding: '18px $5',
  backgroundColor: '$gray700',
  borderRadius: '$md',
})
export const TrendingBookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold',
    },
    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})
