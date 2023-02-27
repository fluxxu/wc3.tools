import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function LauncherE() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Warcraft III Tools</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    W3C 新客户端下载
                </h1>

                <div className={styles.grid}>
                    <div >
                    <p>
                        目前提供的为预览版，绝大部分功能不可用，仅供测试使用。
                        <br />
                        <span style={{fontSize: 24, color: 'red'}}>注意，如果你新旧客户端一起使用，必须使用不同的战网账号，或者在旧版客户端退出登录，否则旧版客户端会不断的把新版踢下线。</span>
                    </p>

                    <p>
                        第一次进入后，请点击下方的【设置】按钮，再点击【网络】，然后点击【优化网络】，这将会自动优化你的线路并保存（保存的优化结果对旧客户端也有效）。
                    </p>
                    <p>
                        请等待客户端在后台启动魔兽，然后右下角的【寻找对手】按钮会变为绿色可用状态。
                    </p>
                    <p>
                        然后请点击右下角【寻找对手】左边的按钮，选择你想要的模式和种族，第一次进入会自动下载地图。
                    </p>
                    <p>
                        最后，请点击【寻找对手】来进行天梯游戏。
                    </p>
                    </div>

                    <p className={styles.description}>
                        <a href="http://w3c.cnwar3.com/launcher-e/W3Champions_0.0.1.msi">下载0.0.1 预览版</a>
                    </p>
                </div>
            </main>
        </div>
    )
}