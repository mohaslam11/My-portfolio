import type { Metadata } from 'next';
import './globals.css';
import { Inter, Manrope, IBM_Plex_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const plex = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400','500'] });

export const metadata: Metadata = {
  title: 'Mohammed Aslam — Software Developer',
  description: 'Full-stack web and mobile developer building practical products across web, mobile and AI integration.',
  metadataBase: new URL('https://mohammed-aslam-personal-portfolio-r.vercel.app'),
  openGraph: {
    title: 'Mohammed Aslam — Software Developer',
    description: 'Web · Mobile · AI Integration · Product Development',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable} ${plex.variable}`}>{children}</body></html>;
}
