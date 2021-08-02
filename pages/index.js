import { Flex, Link } from '@chakra-ui/react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/resources/header';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter()

  router.push('singup')

  return (

    <div className={styles.container}>
      <Head>
        <title>Poli - Collaboration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <Link href='/signup'>
        s
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
