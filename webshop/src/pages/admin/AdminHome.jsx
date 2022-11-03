import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function AdminHome() {
    return ( 
     <div>
        <Link to= "/admin/add-product">
            <Button variant="success">Add Product</Button>
        </Link>
        <Link to= "/admin/maintain-products">
            <Button>Maintain Products</Button>
        </Link>
        <Link to= "/admin/maintain-categories">
            <Button>Maintain Categories</Button>
        </Link>
        <Link to= "/admin/maintain-shops">
            <Button>Maintain Shops</Button>
        </Link>


    </div> );
}

export default AdminHome;