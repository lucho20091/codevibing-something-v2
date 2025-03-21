import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <div className="text-center">
                      <h1 className="text-3xl font-bold text-gray-900">
                        Welcome to ShopMini
                      </h1>
                      <p className="mt-4 text-gray-600 mb-8">
                        Your minimalist shopping experience
                      </p>
                    </div>
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                      <h2 className="text-xl font-medium text-gray-900 mb-6">
                        Browse Categories
                      </h2>
                      <ProductList />
                    </div>
                  </div>
                }
              />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ProductProvider>
    </Router>
  )
}

export default App

/*
Button Class Properties Explained:

rounded-md: Applies medium border radius (0.375rem / 6px) to all corners
bg-slate-800: Sets a dark slate background color
py-2: Adds padding on y-axis (top and bottom) of 0.5rem (8px)
px-4: Adds padding on x-axis (left and right) of 1rem (16px)
border: Adds a 1px border
border-transparent: Makes the border transparent
text-center: Centers the text content
text-sm: Sets font size to small (0.875rem / 14px)
text-white: Sets text color to white
transition-all: Enables smooth transitions for all properties
shadow-md: Adds a medium-sized drop shadow
hover:shadow-lg: Increases shadow size on hover
focus:bg-slate-700: Slightly lightens background on focus
focus:shadow-none: Removes shadow on focus
active:bg-slate-700: Slightly lightens background when button is clicked
hover:bg-slate-700: Slightly lightens background on hover
active:shadow-none: Removes shadow when button is clicked
disabled:pointer-events-none: Prevents pointer events when button is disabled
disabled:opacity-50: Reduces opacity to 50% when button is disabled
disabled:shadow-none: Removes shadow when button is disabled
*/
