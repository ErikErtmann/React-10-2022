import WooCommereceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect } from "react"
// rfce -- dsznajder react snippets
function HomePage() {

  useEffect(() => {
    const api = new WooCommerceRestApi({
        url: "http://localhost/wordpress/",
        consumerKey: "ck_97c2a803e5619af5d14efcc4ff10200bf109f35b",
        consumerSecret: "cs_d3476c60d47f77036968bf73fa5de61575066756",
        version: "wc/v3"
      });
    api.get("products", {
        per_page: 20, // 20 products per page
      })
    then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
        console.log("Total of pages:", response.headers['x-wp-totalpages']);
        console.log("Total of items:", response.headers['x-wp-total']);
        })
  },[]);
  
  return (
  <div>HomePage</div>
  );
}

export default HomePage;