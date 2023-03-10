import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Typewriter from 'typewriter-effect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function getData() {
      const res = await fetch('/frontPageImages.json');
      const json = await res.json();
      setData(json.FrontPageImages);
    }
    getData();
    console.log('data:',data)
  }, []);
  return (
    <>
      <Head>
        <title>HistoryGuessr</title>
        <meta name="description" content="A historic picture guessing game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.Title}>HistoryGuessr</h1>
        <div className={styles.startGameTextContainer}>
          <Link href="/game">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Welcome')
                .pauseFor(2000)
                .deleteAll()
                typewriter.typeString('Press here to start a journey')
                .start();}}/>
          </Link>
        </div>
        {data !== null ? 
          <div className={styles.imagesContainer}>
            {console.log('her', Math.floor(Math.random()*data.length))}
            <img src={data[Math.floor(Math.random()*data.length)].url} alt="" />
            <img src={data[Math.floor(Math.random()*data.length)].url} alt="" />
            <img src={data[Math.floor(Math.random()*data.length)].url} alt="" />
          </div>
        : 
          <div>No Images found</div>
        }
        
      </main>
    </>
  )
}
