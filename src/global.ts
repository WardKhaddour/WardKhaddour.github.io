import { routing } from './i18n/routing'
import locales from './i18n/locales/en.json'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof locales
  }
}
