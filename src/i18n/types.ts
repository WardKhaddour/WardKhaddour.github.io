import { getTranslations } from 'next-intl/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function extractTranslationType() {
  const t = await getTranslations()
  return t
}

export type TranslationFunction = Awaited<
  ReturnType<typeof extractTranslationType>
>
