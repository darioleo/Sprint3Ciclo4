import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { EliminarProductoBoton } from "../components/EliminarProductoBoton"
import {PRODUCTODETALLE_GET_ENDPOINT } from "../connections/endpoints"

const ProductoDetalle= ()=>{

    const [producto, setProducto]= useState([])
    const {id}= useParams()

    useEffect(()=>{
        axios.get(`${PRODUCTODETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=>{
            setProducto(respuesta.data)
        })
        .catch(err=>{
            console.error(err)
        })
    })

    
    return(
        <Container className="mt-5 mb-5">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center mi-texto">Producto creados</h3>
                    <div className="row justify-content-center text-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.imagen} />
                        <Card.Body>
                            <Card.Title>{producto.titulo}</Card.Title>
                            <Card.Text>$ {producto.precio}</Card.Text>
                            <EliminarProductoBoton id={producto.idProducto} />
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export {ProductoDetalle} 

