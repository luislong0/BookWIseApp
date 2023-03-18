export function getLimitedText(text: string) {
  if (text.length > 220) {
    const limitedText = text.slice(0, 220) + '...'
    return {
      text: limitedText,
      type: 'limited',
      hideText: true,
    }
  } else {
    return {
      text,
      type: 'full',
      hideText: true,
    }
  }
}
