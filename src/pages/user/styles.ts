import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  maxWidth: 1425,
  width: '100%',

  display: 'flex',
  // justifyContent: 'center',
  // backgroundColor: 'Red',
  margin: '20px auto 0',
})

export const SidebarSession = styled('div', {
  maxWidth: '11.5rem',
  position: 'relative',
})

export const HomeTitle = styled('span', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$2xl',
  marginLeft: '20.5rem',
  marginTop: '3.25rem',

  color: '$gray100',
  fontWeight: 'bold',

  gap: '$3',
  marginBottom: '$10',

  svg: {
    color: '$green100',
  },
})

export const ContentContainer = styled('div', {
  marginTop: '3.25rem',
  marginLeft: '20.5rem',
  width: '39.06rem',

  display: 'flex',
  gap: '4rem',
})

export const MyBooksContainer = styled('div', {
  display: 'flex',
  gap: '$10',
  flexDirection: 'column',
  width: '100%',
})

export const BookFormContainer = styled('div', {
  width: '39.06rem',
})

export const BookBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const UserInfoContainer = styled('div', {})
