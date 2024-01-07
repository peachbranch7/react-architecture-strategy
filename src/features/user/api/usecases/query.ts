import useSWR from 'swr'
import { useUserRepository } from '../repository'
import { User } from '../../type'

type Response = { users: User[] }

export const useUserListQuery = () => {
  const repository = useUserRepository()

  return useSWR<Response>('userList', () => repository.getList(), {
    suspense: true,
  })
}
