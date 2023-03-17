import { globalCss } from './stiches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    // fontFamily: 'Lobster',
  },

  body: {
    backgroundColor: '$gray800',
    padding: '$5',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Nunito',
  },
})
