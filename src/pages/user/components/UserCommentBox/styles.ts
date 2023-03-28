import { styled } from '@/src/styles/stiches.config'

export const UserCommentBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const Box = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '$md',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  p: {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
  },
})

export const BookHeader = styled('div', {
  display: 'flex',
  gap: '$6',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  span: {
    '&:first-child': {
      fontSize: '$lg',
      color: '$gray100',
    },
    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const TitleBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
})
