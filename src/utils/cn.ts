type ClassValue =
  | string
  | null
  | undefined
  | false
  | ClassValue[]
  | Record<string, boolean>

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = []

  const process = (input: ClassValue): void => {
    if (!input) return

    if (typeof input === 'string') {
      classes.push(input)
    } else if (Array.isArray(input)) {
      input.forEach(process)
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key)
      }
    }
  }

  inputs.forEach(process)

  return classes.join(' ')
}
