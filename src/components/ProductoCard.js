import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductoCard({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>
        <Link to={`/producto/${producto.idProducto}`}>
           {producto.titulo}
        </Link> 
        </Card.Title>
        <Card.Text>$ {producto.precio}</Card.Text>
        </Card.Body>
    </Card>
  );
}

export {ProductoCard}