import React from 'react'
import './styles/card.css'
import Card from 'react-bootstrap/Card';
import fondo from '../images/fondoCard.svg'

const CardComponent = ({title, info}) => {
    return (
        <div className='card'>
            <Card>
                <div className='card-fondo'><img src={fondo}/></div>
                <Card.Body className='card-content'>
                    <Card.Title className='card-title'>{title}</Card.Title>
                    <Card.Text className='card-info'>{info}</Card.Text>
                </Card.Body>
            </Card>
        </div>
  )
}

export default CardComponent
