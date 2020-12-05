// import { Link } from "react-router-dom";
//styles

const ItemNoteBook = ({ noteBook }) => {
  return (
    <div>
      {/* <Link to={`/products/${product.slug}`}>
        <ItemImg src={product.img} alt={product.name} />
      </Link> */}

      <h1>{noteBook.name}</h1>
      <h1>{noteBook.description}</h1>
    </div>
  );
};

export default ItemNoteBook;
