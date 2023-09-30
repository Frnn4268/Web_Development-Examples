import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {FormularioReactivo} from './components/FormularioReactivo'
import { FormularioNoReactivo } from './components/FormularioNoReactivo'
import { dibujarTabla } from './components/dibujarTabla'

function App() {
  const [saludo, setSaludo] = useState("")

  const [dataForm, setDataForm] = useState({
    nombre: "",
    edad: 0
  })

  const datosFormularioReactivoHanCambiado = (datos)=> {
    console.log('Datos del formulario han cambiado', datos)
  }

  return (
    <>
      <button onClick={() => {
        setDataForm({
          nombre: "Fernando",
          edad: 21
        })
      }}>Enviar datos al Formulario no Reactivo</button>

      {saludo}

      <FormularioReactivo></FormularioReactivo>
      <br />
      <br />
      <FormularioNoReactivo dataFromParent={dataForm} formDataHasChanged={datosFormularioReactivoHanCambiado}></FormularioNoReactivo>

      <dibujarTabla cabeceras = {["Nombre", "Edad"]}
        datos = {
          [
            ["Fernando", 21],
            ["José", 21]
          ]
        } ></dibujarTabla>

    </>  
  )
}

export default App
