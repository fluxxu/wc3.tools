import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { store } from '../services/oss'
import Link from 'next/link'

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
            if (f.name.endsWith('.exe')) return null;
            return <li key={f.url}>
              <dl>
                <dt>文件</dt>
                <dd>
                  <a href={f.url.replace('http://w3champions.oss-cn-shanghai.aliyuncs.com/', 'http://w3c.cnwar3.com/')}>{f.name}</a>
                </dd>
                <dt>修改日期</dt>
                <dd>{new Date(f.lastModified).toDateString()}</dd>
              </dl>
            </li>
          })}
        </ul>
        <h2><Link href="/launcher-e">实验版新客户端</Link></h2>
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