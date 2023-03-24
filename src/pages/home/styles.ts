import { styled } from '@/src/styles/stiches.config'
import Link from 'next/link'

export const Container = styled('div', {
  maxWidth: 1440,
  width: '100%',

  display: 'flex',
  // justifyContent: 'center',
  // backgroundColor: 'Red',
  margin: '20px auto 0',
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
  gap: '$10',
  flexDirection: 'column',
})

export const RecentBooksContainer = styled('div', {
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

export const LastReadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '38.125rem',
})

export const TitleBox = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',

  span: {
    marginBottom: '$1',
    color: '$gray100',
    fontSize: '$sm',
  },

  button: {
    color: '$purple100',
    fontWeight: '$bold',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'all 0.2s ease-in-out',

    fontSize: '$sm',

    '&:hover': {
      color: '$green100',
    },
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

  button: {},
})

export const HeaderLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  fontSize: '$sm',
  fontWeight: 'bold',
  color: '$purple100',
  textDecoration: 'none',
  transition: 'all 0.2s ease-out',

  '&:hover': {
    color: '$green100',
  },
})
