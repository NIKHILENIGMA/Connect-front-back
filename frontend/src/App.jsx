import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/v1/products?search=" + search);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [search]);
  // if (error) {
  //   return <h1>Something went wrong </h1>;
  // }
  // if (loading) {
  //   return (
  //     <h3> </h3>
  //   )
  // }
  return (
    <>
      {error && <h3>Something went wrong</h3>}
      {loading ? (
        <h3>Loading 😅 </h3>
      ) : (
        <div>
          <h1>Products</h1>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <h3>Number of Products are: {products.length}</h3>
        </div>
      )}
    </>
  );
}

export default App;
