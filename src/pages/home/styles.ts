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

  display: 'flex',
  gap: '4rem',
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
export const TrendingBooksContainer = styled('div', {
  width: '20.32rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const TrendingBooksTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$2',

  span: {
    marginBottom: '$1',
    color: '$gray100',
    fontSize: '$sm',
  },

  button: {
    display: 'flex',
    alignItems: 'center',

    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$purple100',
    transition: 'all 0.2s ease-out',

    '&:hover': {
      color: '$gray200',
    },
  },
})
