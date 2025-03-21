import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="text-center py-12 px-4">
        <p className="text-gray-500">Product not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-slate-800 hover:text-slate-600 inline-flex items-center"
        >
          <span className="mr-2">←</span> Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 sm:mb-8 text-slate-800 hover:text-slate-600 inline-flex items-center"
      >
        <span className="mr-2">←</span> Back to products
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {/* Product Image */}
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 sm:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="pt-4 sm:pt-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 sm:mt-4 text-lg sm:text-xl text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="mt-4">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">{product.description}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-sm font-medium text-gray-900">Category</h2>
            <p className="mt-2 text-gray-600 capitalize text-sm sm:text-base">{product.category}</p>
          </div>

          <button
            onClick={() => {
              addToCart(product);
              // Optional: Show some feedback that item was added
            }}
            className="mt-6 sm:mt-8 w-full bg-slate-800 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 