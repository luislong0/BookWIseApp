import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  maxWidth: 1440,
  width: '100%',

  display: 'flex',
  // justifyContent: 'center',
  // backgroundColor: 'Red',
  margin: '0 auto',
})
export const SidebarSession = styled('div', {
  maxWidth: '14.5rem',
  position: 'relative',
})

export const ContentContainer = styled('div', {
  marginTop: '3.25rem',
  marginLeft: '20.5rem',
})

export const HomeTitle = styled('span', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$2xl',

  color: '$gray100',
  fontWeight: 'bold',

  gap: '$3',
  marginBottom: '$10',

  svg: {
    color: '$green100',
  },
})

export const MyBooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '38.125rem',

  span: {
    marginBottom: '$1',
    color: '$gray100',
    fontSize: '$sm',
  },
})
export const TrendingBooksContainer = styled('div', {})
