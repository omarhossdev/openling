import vocabs from "@data/vocab.json";
import styles from "@styles/vocabs.module.scss";
import { Link } from 'wouter-preact';

export default function Vocabs() {
  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>الكلمة</th>
            <th>الترجمة</th>
            <th>النوع</th>
          </tr>
        </thead>
        <tbody>
          {vocabs.map(vocab => (
            <tr>
              <td className={styles.tdata}>{vocab["word"]}</td>
              <td className={styles.tdata}>{vocab["translation"]}</td>
              <td className={styles.types}>

                {vocab["types"].map(type => (
                  <span className={styles.type}>{type}</span>
                ))}

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/vocabs/learn" className={styles.startBtn}>ابدأ التعلم</Link>
    </main>
  )
}