import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  maxWidth: 1440,
  width: '100%',

  display: 'flex',
  // justifyContent: 'center',
  margin: '0 auto',
})

export const SidebarSession = styled('div', {
  maxWidth: '14.5rem',
  position: 'relative',
})

export const ContentContainer = styled('div', {
  maxWidth: 1000,
  width: '100%',
  marginLeft: 328,
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '2rem',

  form: {
    width: '27.18rem',
  },
})

export const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },

  span: {
    fontWeight: 'bold',
    fontSize: '$2xl',
  },
})

export const BookTypesContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  width: '100%',
  marginTop: '$10',
})

export const TypeButton = styled('button', {
  variants: {
    type: {
      regular: {
        backgroundColor: 'transparent',
        color: '$purple100',
      },
      fill: {
        backgroundColor: '$purple200',
        color: '$gray100',
      },
    },
  },

  padding: '$2 $4',
  borderRadius: '$full',
  border: '1px solid $purple100',
  fontSize: '$sm',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    transition: 'all 0.2 ease-in-out',
    backgroundColor: '$purple200',
    color: '$gray100',
  },
})

export const BooksContainer = styled('div', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$5',
  marginTop: '$10',
})
