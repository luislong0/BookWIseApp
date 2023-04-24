import { styled } from '@/src/styles/stiches.config'

export const LastReadingCommentBox = styled('div', {
  display: 'flex',
  gap: '$6',
  justifyContent: 'space-between',
  width: 610,

  padding: '$6',

  backgroundColor: '$gray600',
  borderRadius: '$md',

  img: {
    borderRadius: '$sm',
  },
})
export const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  p: {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
  },
})
export const LastReadingCommentHeader = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
export const InfoTitleBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$3 0 $6 0',

  span: {
    '&:first-child': {
      color: '$gray100',
      fontSize: '$lg',
      fontWeight: 'bold',
    },

    '&:last-child': {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})
