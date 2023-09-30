import { useState } from 'react'
import '../css/Formulario.css'

export const FormularioReactivo = ()=>{

    const [formValues, setFormValues] = useState({
        nombre: "",
        edad: 0
    })

    const valueHasChanged = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form>
            <label className='label' htmlFor="nombre">Nombre</label>
            <input className='input' 
            type="text" 
            name="nombre" 
            value={formValues.nombre}
            onChange={valueHasChanged}/>

            <label className='label' htmlFor="edad">Edad</label>
            <input className='input' 
            type="text" 
            name="edad" 
            value={formValues.edad}
            onChange={valueHasChanged}/>

            <input type="submit" value="Guardar"/>

            <br />
            <br />

            Nombre: {formValues.nombre} <br />
            Edad: {formValues.edad}

        </form>
    )
}