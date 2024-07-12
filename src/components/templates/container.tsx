// Modules
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <main className={`w-full min-h-screen flex-1 flex flex-col items-center justify-col overflow-x-hidden overflow-y-hidden ${className}`}>
      {children}
    </main>
  )
}

export default Container;