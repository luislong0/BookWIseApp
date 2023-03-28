import { styled } from '@/src/styles/stiches.config'

export const UserCardContainer = styled('div', {
  borderLeft: '2px solid $gray700',
  padding: '0 3.5rem',
  width: 310,
  // backgroundColor: 'red',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const UserInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',

  marginTop: '$5',

  span: {
    '&:first-child': {
      fontSize: '$xl',
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
export const Separator = styled('div', {
  height: 4,
  background: '$gradient-horizontal',
  width: 32,
  borderRadius: '$full',
  margin: '2rem auto',
})
export const BooksInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5 0',
})
