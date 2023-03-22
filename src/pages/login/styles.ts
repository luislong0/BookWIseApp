import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  maxWidth: 1440,
  margin: '0 auto',
  display: 'flex',
  marginTop: '$5',
})

export const BannerContainer = styled('div', {
  img: {
    height: 892,
  },
})

export const LoginContainer = styled('div', {
  position: 'relative',
  width: '100%',
})

export const LoginBox = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  '-webkit-transform': 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
})

export const DescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginBottom: '$10',

  span: {
    '&:first-child': {
      fontSize: '$2xl',
      color: '$gray100',
      fontWeight: 700,

      marginBottom: 2,
    },
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
