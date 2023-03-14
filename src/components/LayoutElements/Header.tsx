import React from 'react'
import ButtonVip from '../UniqueElements/ButtonVip'

const Header = () => {
  return (
    <header className='w-full h-[800px] bg-cover flex flex-col justify-center items-center gap-20'
      style={{
        backgroundImage: 'url(/fundo.png)'
      }}>
      <div className='bg-white/20 rounded-full px-6 w-[90%] md:w-[600px] md:h-[600px] flex flex-col justify-center items-center gap-8 Glass'>

        <img src="/Logo.png" className='w-[220px]' />
        <h1 className='w-[70%] sm:w-[400px] text-center text-3xl font-bold drop-shadow-[0px_0.2px_1px_red]'>
          Sabor e qualidade que você merece - Bois Clinton, a churrascaria perfeita para seu paladar.
        </h1>

        <p className='w-[80%] text-center text-xl'>
          Bem-vindo à Bois Clinton, onde você encontra os melhores cortes de carne e um atendimento excepcional. Uma experiência única e de qualidade para o seu paladar.
        </p>
      </div>

      <ButtonVip />
    </header>
  )
}

export default Header