import React from 'react';

const Cart = ({ cartItems, onRemove, onCheckout, setView }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
      <h3 className="text-2xl font-bold text-left mb-8 text-[#1F2937]">Your Cart</h3>
      
      {cartItems.length === 0 ? (
        <div className="py-10 text-gray-400">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-10">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-5 bg-[#F9FAFB] rounded-3xl border border-gray-50">
                <div className="flex items-center gap-5">
                  <img src={item.icon} className="w-14 h-14" alt="" />
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-[#1F2937]">{item.name}</h4>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-500 font-bold hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t pt-8 mb-10">
            <span className="text-gray-500 text-lg">Total:</span>
            <span className="text-3xl font-extrabold text-[#1F2937]">${total}</span>
          </div>

          <button 
            onClick={onCheckout}
            className="btn w-full bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white rounded-full font-bold py-4 h-auto text-lg shadow-lg shadow-purple-200"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;