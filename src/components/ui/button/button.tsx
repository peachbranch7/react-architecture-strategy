import { ComponentProps, FC, ReactNode } from 'react'

type Props = ComponentProps<'button'> & {
  children: ReactNode
}
export const Button: FC<Props> = ({ children = 'button', onClick }) => {
  return <button onClick={onClick}>{children}</button>
}
