'use client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {NextUIProvider} from '@nextui-org/react'


import {useRouter} from 'next/navigation'


export function Providers({children}) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  )
}