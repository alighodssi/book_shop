import { useEffect, useState } from "react";
import { Getnaval, Getproduct } from "../api/api";
import { Cartitem } from "../components/cartitem";
import type { Article } from "../servers/types";
import { Link } from "react-router-dom";


export function Naval() {
  const [products, setProducts] = useState<Article[]>([]);
  const [itemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Getnaval().then((data) => {
      setProducts(data);
    });
  }, []);


  

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="container">
      <nav className="pagination">
        {currentItems.map((article) => (
          <Link  className="cart-link" key={article.id} to={`/naval/${article.id}`}>
            <Cartitem {...article} />
          </Link>
        ))}
      </nav>

      <div className="btns">
        {pages.map((page) => (
          <button className="btn"
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              fontWeight: page === currentPage ? "bold" : "normal",
              backgroundColor: page === currentPage ? "#ddd" : "white",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
