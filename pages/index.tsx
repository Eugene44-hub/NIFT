import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import nft1 from "../public/assets/images/nft1.jpg"
import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.testDiv1}>
      <Nav/>
      <Hero/>
      </div>
    </div>
  )
}
``