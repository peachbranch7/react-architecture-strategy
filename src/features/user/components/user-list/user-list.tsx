import { FC, Suspense } from 'react'
import { Container } from './container'
import { Skeleton } from '../skelton/skelton'

export const UserList: FC = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Container />
    </Suspense>
  )
}
