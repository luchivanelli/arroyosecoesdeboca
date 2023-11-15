import React from 'react'
import './styles/socio.css'
import { useFormik } from 'formik'

const Socio = () => {
    const enviarMensaje = (values)=> {
        const {nombre, dni, direccion, localidad, telefono, pago} = values
        const mensaje = `Nombre:%20${nombre}, %20DNI:%20${dni}, %20Dirección:%20${direccion}, %20Localidad:%20${localidad}, %20Teléfono:%20${telefono}, %20Medio de pago:%20${pago}`
        window.location.href = `https://api.whatsapp.com/send?phone=543400537393&text=Hola,%20quiero%20hacerme%20socio%20de%20la%20peña.%20Estos%20son%20mis%20datos%20${mensaje}`
    }
  
    const formik = useFormik({
        initialValues: {
          nombre: '',
          dni: '',
          direccion: '',
          localidad: '',
          telefono: '',
          pago: 'Efectivo'
        },
        onSubmit: (values)=> enviarMensaje(values)
    })

  return (
    <div className='socio' id='socio'>
      <h3 className='socio-title'>¿Cómo hacerme socio?</h3>
      <div className='socio-adherente'>
        <h4>Socio adherente</h4>
        <p>Para ser socio adherente se deberán seguir los siguientes pasos:</p>
        <ul className='socio-adherente-pasos'>
            <li><b>1-</b> Entrar a la página <a href='https://soysocio.bocajuniors.com.ar/' target='_blank'>Soy Socio</a></li>
            <li><b>2-</b> Seguir los pasos indicados en la web</li>
            <li><b>3-</b> Una vez realizado, revisá tu email para obtener tu número de socio</li>
            <li><b>4-</b> Si deseas obtener el carnet, la peña gestiona el trámite para que puedas tenerlo en mano</li>
        </ul>
        <p className='socio-adherente-ayuda'>¿Necesitas ayuda? <a href="https://api.whatsapp.com/send?phone=543402658558" target='_blank'>Comunicate con nosotros</a></p>
      </div>
      <div className='socio-peña'>
        <h4>Socio de la peña</h4>
        <p>Para formar parte de la asociación, se deberá completar el siguiente formulario:</p>
        <form className='socio-peña-formulario' onSubmit={formik.handleSubmit}>
            <div className='socio-peña-formulario-div'>
              <label>Nombre completo:</label>
              <input type='text' {...formik.getFieldProps('nombre')} required></input>
            </div>
            <div className='socio-peña-formulario-div'>
              <label>DNI:</label>
              <input type='number' {...formik.getFieldProps('dni')} required></input>
            </div>
            <div className='socio-peña-formulario-div'>
              <label>Dirección:</label>
              <input type='text' {...formik.getFieldProps('direccion')} required></input>
            </div>
            <div className='socio-peña-formulario-div'>
              <label>Localidad:</label>
              <input type='text' {...formik.getFieldProps('localidad')} required></input>
            </div>
            <div className='socio-peña-formulario-div'>
              <label>Teléfono:</label>
              <input type='number' {...formik.getFieldProps('telefono')} required></input>
            </div>
            <div className='socio-peña-formulario-div'>
              <label>Medio de pago:</label>
              <select type='select' {...formik.getFieldProps('pago')}>
                <option>Efectivo</option>
                <option>Transferencia bancaria</option>
                <option>Débito automático</option>
              </select>
            </div>
            <button type='submit'>Enviar</button>
          </form>
        </div>
    </div>
  )
}

export default Socio
