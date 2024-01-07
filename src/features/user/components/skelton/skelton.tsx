import { FC } from 'react'
import styles from './styles.module.scss'

export const Skeleton: FC = () => {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 10 }).map((_, i) => (
        <li className={styles.item} key={i} />
      ))}
    </ul>
  )
}
