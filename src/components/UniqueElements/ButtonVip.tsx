import React, { ReactNode } from 'react'

const ButtonVip = ({ stylish }: { stylish?: string }) => {
  return (
    <button className={`p-3 text-4xl font-bold Fire rounded-xl border-8 border-yellow-900 text-zinc-900 hover:scale-125 ${stylish}`}>
      <p className='drop-shadow-[0px_1px_0px_red]'>
        Agendamento Vip
      </p>
    </button>
  )
}

export default ButtonVip