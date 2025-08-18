import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'assets-blog.pagseguro.uol.com.br',
      'www.meuvademecumonline.com.br',
      'media.licdn.com',
    ],
  },
};

export default withNextIntl(nextConfig);
