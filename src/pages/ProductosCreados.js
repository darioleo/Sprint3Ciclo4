import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ProductoCard } from "../components/ProductoCard"
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints"

const ProductosCreados= ()=>{

    const [productos, setProductos]= useState([])

    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setProductos(respuesta.data)
        })
        .catch(err=>{
            console.error(err)
        })
    })
    

    return(
        <Container className="mt-5 mb-5">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center mi-texto">Productos creados</h3>
                    <div className="row justify-content-center text-center">
                        {productos.map(producto=> <ProductoCard key={producto.idProducto} producto={producto}/> )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export {ProductosCreados}