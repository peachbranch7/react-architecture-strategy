import { FC } from 'react'
import { User } from '../../type'
import styles from './styles.module.scss'

type Props = {
  users: User[] | undefined
}
export const Presentation: FC<Props> = ({ users }) => {
  return (
    <ul className={styles.list}>
      {users?.map((user) => (
        <li className={styles.item} key={user.id}>
          {user.username}
        </li>
      ))}
    </ul>
  )
}
