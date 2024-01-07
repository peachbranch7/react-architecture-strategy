// 外から使われるのはこのhooks。

import { useMemo } from 'react'
import { User, UserVariables } from '../type'
import { apiClient } from '../../../libs/axios'

// 必要なhooksを呼び出してその値をfactory関数に渡しrepositoryを生成して返す。
export const useUserRepository = () => {
  return useMemo(() => generateUserRepository(), [])
}

// repository本体はfactory関数としてhooksから分離してある。
// テストが書きやすいのと、Reactに依存しないPureな関数として資産にするため。
export const generateUserRepository = () => ({
  // 一覧取得
  async getList() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const { data: users } = await apiClient.get<User[]>('/users')

    return {
      users,
    }
  },

  async createUser(variables: UserVariables) {
    const { data: user } = await apiClient.post<User>('/users', variables)

    return {
      user,
    }
  },
})
