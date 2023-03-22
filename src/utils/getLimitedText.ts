interface getLimitedTextProps {
  text: string
  letterLimit?: number
}

export function getLimitedText({ text, letterLimit }: getLimitedTextProps) {
  if (text.length > letterLimit!) {
    const limitedText = text.slice(0, letterLimit) + '...'
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
