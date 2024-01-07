import { FC } from 'react'
import { Presentation } from './presentation'
import { useUserListQuery } from '../../api/usecases/query'

export const Container: FC = () => {
  const { data } = useUserListQuery()

  return <Presentation users={data?.users} />
}
