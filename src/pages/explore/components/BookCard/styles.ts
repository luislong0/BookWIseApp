import { styled } from '@/src/styles/stiches.config'

export const BookCardContainer = styled('div', {
  width: '19.87rem',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  display: 'flex',
  gap: '$5',
  padding: '$6 $5 $4',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',

  img: {
    borderRadius: '$sm',
  },

  '&:hover': {
    backgroundColor: '$gray600',
  },
})
export const BookInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const TitleBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'start',

  span: {
    '&:first-child': {
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold',
    },

    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
      fontWeight: 'regular',
    },
  },
})

export const ReadingTag = styled('div', {
  backgroundColor: '$green300',
  padding: '$1 $3',
  fontSize: '$xs',
  color: '$green100',
  position: 'absolute',
  top: 0,
  right: 0,

  borderTopRightRadius: '$md',
  borderBottomLeftRadius: '$sm',
})
