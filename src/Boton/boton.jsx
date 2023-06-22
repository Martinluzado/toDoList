import React from 'react'
import './boton.css'
import { Button } from '@mantine/core';


export default function Boton({texto, onClick, clase}) {
  return (
    <Button className='Boton' onClick={onClick} clase={clase} color="dark" radius="xl" size="md"
    >{texto}</Button>
  )
}
