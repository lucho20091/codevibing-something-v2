import { useProducts } from '../context/ProductContext';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { products } = useProducts();
  
  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-slate-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 