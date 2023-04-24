import { styled } from '@/src/styles/stiches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$8 $6 $6 $6',

  svg: {
    color: '$gray600',
  },

  p: {
    color: '$gray600',
  },
})
