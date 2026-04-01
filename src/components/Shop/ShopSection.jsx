import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import { toast } from 'react-toastify';

const ShopSection = ({ cart, setCart, activeTab, setActiveTab }) => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    if (products.length > 0) return;
    const res = await fetch('/productsData.json');
    const data = await res.json();
    setProducts(data);
  };

  // Loading Data
  loadData();

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      return toast.info("Already in cart");
    }
    setCart([...cart, product]);
    toast.success("Added to cart!",);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    setActiveTab('cart');
    toast.success("Order processed successfully!");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-extrabold text-[#1F2937] mb-4">Premium Digital Tools</h2>
      <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Choose from our curated collection of premium digital products  designed <br></br> to boost your productivity and creativity.</p>

      {/* Toggle Buttons */}
      <div className="inline-flex bg-gray-50 p-1 rounded-full border mb-16">
        <button 
          onClick={() => setActiveTab('products')}
          className={`px-10 py-3 rounded-full font-bold transition ${activeTab === 'products' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500'}`}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveTab('cart')}
          className={`px-10 py-3 rounded-full font-bold transition ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500'}`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {activeTab === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white border rounded-3xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-left mb-6">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="py-10 text-gray-400 italic">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cart.map(item => <CartItem key={item.id} item={item} onRemove={removeFromCart} />)}
              </div>
              <div className="flex justify-between items-center py-6 border-t font-bold text-2xl">
                <span>Total:</span>
                <span>${cart.reduce((sum, item) => sum + item.price, 0)}</span>
              </div>
              <button onClick={handleCheckout} className="btn w-full bg-[#7C3AED] hover:bg-[#632ecb] text-white border-none rounded-2xl h-16 text-lg">
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default ShopSection;