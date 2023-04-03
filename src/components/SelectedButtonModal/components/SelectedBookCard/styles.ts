import { styled } from '@/src/styles/stiches.config'

export const SelectedButtonCardContainer = styled('div', {
  backgroundColor: '$gray700',
  padding: '$6 $8',
  borderRadius: '$md',
})
export const BookInfo = styled('div', {
  display: 'flex',
  gap: '$8',

  img: {
    borderRadius: '$md',
  },
})
export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const TitleContainer = styled('div', {
  display: 'flex',
  gap: '$2',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$gray100',
    },
    '&:last-child': {
      fontSize: '$md',
      fontWeight: 'regular',
      color: '$gray300',
    },
  },
})
export const RatingContainer = styled('div', {
  span: {
    display: 'flex',
    fontSize: '$sm',
    color: '$gray400',
    marginTop: '$2',
  },
})

export const BookCategoryAndPageContainer = styled('div', {
  borderTop: '1px solid $gray600',
  display: 'flex',
  gap: '3.5rem',
  marginTop: '$10',

  padding: '$6 0 0',
})

export const CategoryBox = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  svg: {
    color: '$green100',
  },
})
export const CategoryInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$sm',
      color: '$gray300',
      fontWeight: 'regular',
    },
    '&:last-child': {
      fontSize: '$md',
      color: '$gray200',
      fontWeight: 'bold',
    },
  },
})

export const PageCountBox = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  svg: {
    color: '$green100',
  },
})
export const PageCountInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    '&:first-child': {
      fontSize: '$sm',
      color: '$gray300',
      fontWeight: 'regular',
    },
    '&:last-child': {
      fontSize: '$md',
      color: '$gray200',
      fontWeight: 'bold',
    },
  },
})
