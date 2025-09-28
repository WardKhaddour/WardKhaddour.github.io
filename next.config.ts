import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  output: 'export',
  images: { loader: 'custom', loaderFile: './image-loader.ts' },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
