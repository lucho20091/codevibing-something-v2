import { createContext, useContext, useState, useEffect } from 'react';

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    description: "Essential white t-shirt made from premium cotton.",
    category: "clothing"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
    description: "Elegant minimalist watch with leather strap.",
    category: "accessories"
  },
  {
    id: 3,
    name: "Black Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format",
    description: "Slim leather wallet with multiple card slots.",
    category: "accessories"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format",
    description: "High-quality wireless earbuds with noise cancellation.",
    category: "electronics"
  },
  {
    id: 5,
    name: "Denim Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format",
    description: "Classic fit denim jeans in dark blue wash.",
    category: "clothing"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format",
    description: "Stylish sunglasses with UV protection.",
    category: "accessories"
  }
];

// Create the context
const ProductContext = createContext();

// Custom hook to use the product context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      try {
        // Try to get products from localStorage
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        } else {
          // If no products in localStorage, use initial data
          setProducts(initialProducts);
          localStorage.setItem('products', JSON.stringify(initialProducts));
        }
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts(initialProducts);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Function to get products by category
  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  // Function to get a single product by ID
  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  const value = {
    products,
    loading,
    getProductsByCategory,
    getProductById
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext; 