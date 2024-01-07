import { useMemo } from 'react'
import { useUserRepository } from '../repository'
import { UserVariables } from '../../type'
import { useSWRConfig } from 'swr'

export const useUserMutation = () => {
  const repository = useUserRepository()
  const { mutate } = useSWRConfig()

  return useMemo(
    () => generateUserUsecase({ repository, mutate }),
    [repository, mutate],
  )
}

export const generateUserUsecase = ({
  repository,
  mutate,
}: {
  repository: ReturnType<typeof useUserRepository>
  mutate: ReturnType<typeof useSWRConfig>['mutate']
}) => ({
  async createUser(user: UserVariables) {
    try {
      const data = await mutate('/users', repository.createUser(user))
      return {
        user: data?.user,
      }
    } catch (error) {
      console.error(error)
    }
  },
})
