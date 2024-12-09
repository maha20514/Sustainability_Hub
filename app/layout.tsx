/* eslint-disable camelcase */
import React from 'react'

import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';



const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})
 
export const metadata: Metadata ={
  title: 'Sustainability Hub',
  description: 'A platform to promote sustainable living in local communities.',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider>
          {children}
        </ClerkProvider>

        </body>
      </html>
  )
}