import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { store } from '../services/oss'

interface File {
  name: string
  url: string
  lastModified: string
}

export default function Home({files}: { files: Array<File> }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warcraft III Tools</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to wc3.tools!
        </h1>
        <h2>W3C客户端中国加速下载地址</h2>
        <ul>
          {files.map(f => {
            return <li key={f.url}>
              <dl>
                <dt>文件</dt>
                <dd>
                  <a href={f.url}>{f.name}</a>
                </dd>
                <dt>修改日期</dt>
                <dd>{new Date(f.lastModified).toDateString()}</dd>
              </dl>
            </li>
          })}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const r = await store.list({
    prefix: "release/",
    'max-keys': '10'
  }, null)
  const files = r.objects.filter(o => o.size > 0).map(o => {
    return {
      name: o.name.slice('release/'.length),
      url: o.url,
      lastModified: o.lastModified
    }
  })

  return {
    props: {
      files
    }
  }
}