import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json"

function EditProduct() {
    // const { id } = useParams(); // console.log(id)
    const params = useParams();     // console.log(params.id)
    
    const productFound = productsFromFile.find(element => element.id === Number(params.id));
    const index = productsFromFile.indexOf(productFound);
    
    // const index2 = productsFromFile.findIndex(element => element.id === Number(params.id));
    // const productFound2 = productsFromFile[index2];
    
    
    
    //võib panna ka idKaka v mida iganes ise tahad panna
    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();

    const navigate = useNavigate()

    const update = () => {
        const updatedProduct = {
            "id":Number(idRef.current.value),
            "name":nameRef.current.value,
            "price":Number(priceRef.current.value),
            "image":imageRef.current.value,
            "category":categoryRef.current.value,
            "description":descriptionRef.current.value,
            "active":activeRef.current.checked,
        }
        productsFromFile[index] = updatedProduct
        navigate("/admin/maintain-products")
    }

    // onChange={} iga muutus hakkab otsima

    const [idUnique, setIdUnique] = useState(true);

    const checkIdUniqueness = () => {
      if (params.id === idRef.current.value) {
        setIdUnique(true);
        console.log("Same ID")
        return;
      }  
        
      const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
      if (found === undefined) {
        setIdUnique(true);
        console.log("ID not in use, it is unique");
      } else {
        setIdUnique(false);
        console.log("ID already in use");
      }
      
    }

    return ( 
    <div>
      { productFound !== undefined && 
      <div>
        { idUnique === false && <div> This ID is already in use </div>}
        <label>ID</label> <br />
        <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number"/> <br />
        <label>Name</label> <br />
        <input ref={nameRef} defaultValue={productFound.id} type="text"/> <br />
        <label>Price</label> <br />
        <input ref={priceRef} defaultValue={productFound.id} type="number"/> <br />
        <label>Image</label> <br />
        <input ref={imageRef} defaultValue={productFound.id} type="text"/> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} defaultValue={productFound.id} type="text"/> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} defaultValue={productFound.id} type="text"/> <br />
        <label>Active</label> <br />
        <input ref={activeRef} defaultChecked={productFound.id} type="checkbox"/> <br />
        <button disabled ={idUnique === false} onClick={update}>Update</button>
      </div>
      }
      { productFound === undefined && <div>Couldn't find the product </div>}
    </div> );
}

export default EditProduct;

// SINGLEPRODUCT --- HomePage seest sattumine
// 1. Teha võimekus App.js sisse URL parameetri vastuvõtmine
// 2. Saata toodete haldamise lehelt URLi parameeter
// 3. Võtta see parameeter muutujasse useParams abil
// 4. Võtame kõik tooted
// 5. Kõikide toodete seast otsime üles õige toote
// 6. Kuvame toote HTMLs
// 7. Teeme kontrollid, kui ei leitud toodet, 
//      siis leht ei jookseks kokku

// ADDPRODUCT
// 8. Teeme igale võtmele ref-i:
//     id, name, price, category, image, description, active
// 9. Teeme 7x label + input ja paneme inputi sisse ref-d
// 10. Teeme nupu ja temaga seoses funktsiooni
// 11. Funktsiooni sees seome kokku 7x ref.current.value
//      väärtused ühtseks objektiks
// 12. Editis muudame, Addis lisame

// 13. Editis meil on vaja leida ka järjekorranumber (et muuta)
// 14. Lisame defaultValue igale inputile
// 15. Pärast editimist suuname kasutaja Toodete haldamise lehele