import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './styles/acordion.css'

const Acordion = () => {
  return (
    <Accordion className='acordion'>
        <Accordion.Item eventKey="8" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Medicamentos #1</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Se entregó una gran cantidad de medicamentos al centro de salud "Ramón Carrillo" de Arroyo Seco, destinados a su utilización en diferentes salas de la ciudad.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Juguetes</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Jornada "Día de la niñez", campaña solidaria con el objetivo de celebrar con los niños más carenciados de nuestra localidad. Se colaboró con juguetes, dulces, alimentos para la merienda, ropa de niños y bebés.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Alimentos #1</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Merendero "Estrellita Virgen del Luján", entregamos una bolsa de zanahoria, una bolsa de harina y un bidón de aceite.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Vestimenta #1</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Campaña solidaria "Boca te abriga", colecta de ropa de abrigo, bufandas, calzados, frazada, con el fin de que las personas mas necesitadas puedan combatir el frío. Todas las donaciones fueron destinadas al merendero "Estrellita Virgen del Luján", donde además se colaboró con alimentos para el almuerzo.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Varias #1</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Jornada solidaria donde se hizo entrega de artículos, útiles escolares y diferentes libros a la escuela 6194 Almafuerte del Paraje el Ombú, zona rural de Arroyo Seco.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Medicamentos #2</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Entrega de medicamentos al centro de salud "Eva Perón" (SAMCO) de la localidad de Fighiera, y al centro de salud del barrio Costa del Paraná.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Alimentos #2</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Entrega de cajones de pollo con el fin de ayudar a Fabián Damelio quien padece de una enfermedad neurodegenerativa (ELA).
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Varias #2</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Campaña de donación de tapitas plásticas. La peña es sede oficial del hospital Garrahan para poder depositar tapitas para su utilización. Estas se derriten y se convierten en kit de elementos de limpieza y demás elementos necesarios.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7" className='acordion-item'>
            <Accordion.Header className='acordion-title'>Medicamentos #3</Accordion.Header>
            <Accordion.Body className='acordion-info'>
                Se entregaron medicamentos al centro de salud "Ramón Carrillo" de Arroyo Seco, donde algunos se llevaron al hospital SAMCO N° 50.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}

export default Acordion
