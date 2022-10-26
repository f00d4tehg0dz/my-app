import Head from 'next/head'
import React, { useState } from 'react'
import Switch from 'react-ios-switch'
import Advanced from '../components/Advanced'
import Simple from '../components/Simple'

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Tinder Card React</title>
        <meta name="description" content="Tinder Card React Advanced Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='app'>
      {showAdvanced ? <Advanced /> : <Simple />}
      <div className='row'>
        <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div>
    </div>
    </div>
  )
}
