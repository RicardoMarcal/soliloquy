/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'

const images = [
  "https://images.unsplash.com/photo-1655219435115-d9f0faccd7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1591866103793-7ec4eadcd7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80",
  "https://images.unsplash.com/photo-1641733697807-8645b68d4d85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1654714480262-28f8a5c208d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1652110770901-e4a4f279951c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1651600544627-56e075ef5309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1637247474589-e948ee383422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1653405001073-fb60feca4b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1498477386155-805b90bf61f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1254&q=80",
  "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1517911122989-a8bcd823bed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1655853477188-0beb05a9ec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  "https://images.unsplash.com/photo-1655219497332-80266ce998bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1346&q=80",
  "https://images.unsplash.com/photo-1656577028224-0660607d1de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1649184268598-a7edb03c4414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1657650976741-ee0cb25af5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
]


const Home: NextPage = () => {
  const [messages, setMessages] = useState([] as string[])
  const [input, setInput] = useState('')
  
  useEffect(() => {
    document.getElementById('messageInput')?.focus()
    randomBackground()
  }, [])
  
  const randomBackground = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)]
    document.body.style.backgroundImage = `url('${randomImage}')`;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const messageInput = document.getElementById('messageInput') as HTMLInputElement
    if(messageInput!.value.trim().length === 0) return
    setMessages([...messages, input])
    messageInput!.value = ''
    messageInput?.focus()
    setTimeout(() => {
      document.getElementById('chatMessages')?.scrollTo(0, document.getElementById('chatMessages')!.scrollHeight)
    }, 1)
    setInput('')
  }

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    setMessages([])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Soliloquy</title>
        <meta name="description" content="A place to chat alone. Tell yourself what you're feeling." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a className={styles.kofi} href='https://ko-fi.com/P5P35MXOQ' target='_blank' rel="noreferrer noopenner"><img src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Soliloquy</h1>
          <p>A place to chat alone. Tell yourself what you&apos;re feeling.</p>
        </header>

        <div className={styles.chat}>
          <section id="chatMessages" className={styles.messages}>
            {messages.map((message, key) => 
              <div key={key} className={styles.message}>{message}</div>
            )}
          </section>
          <form onSubmit={handleSend} className={styles.form}>
            <p title="Clear messages" onClick={handleClear}><i className="fa-solid fa-trash-can"></i></p>
            <input id="messageInput" type="text" autoComplete='off' onChange={handleChange} />
            <button title="Send message"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </form>
        </div>
      </main>
      <p className={styles.unsplash}>
        <i className="fas fa-redo" onClick={randomBackground}></i>
        Background image by <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </p>
    </div>
  )
}

export default Home
