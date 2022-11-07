import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC<PropsWithChildren> = ({ children}) => {
  return (
    <div style={{ 
        backgroundColor: 'rgba(200,170,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        {children}
    </div>
  )
}
