import { styled } from '@/src/styles/stiches.config'

export const LastReadingCommentBox = styled('div', {
  display: 'flex',
  gap: '$6',
  // alignItems: 'center',
  justifyContent: 'space-between',
  width: 610,

  padding: '$6',

  backgroundColor: '$gray600',
  borderRadius: '$md',
})
export const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

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
