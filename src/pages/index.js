import Head from 'next/head'
import Image from 'next/image'
import { Inter, Roboto } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import  ChatContainer   from '@/components/ChatContainer'
import { TextField, Button } from '@mui/material';

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({weight:"400", subsets: ['latin'] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${roboto.className}`}
    >
       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          
          {/* <code className="font-mono font-bold">src/pages/index.js</code>
         
          test */}
        </p>

        <div className={roboto.className}>   

        <ChatContainer />
         </div>
         
      </div>

    </main>
  )
}