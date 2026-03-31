import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 rounded-xl border">
            <img src={item.icon} className="w-10 h-10" alt="" />
        </div>
        <div className="text-left">
          <h4 className="font-bold text-[#1F2937]">{item.name}</h4>
          <p className="text-gray-500 text-sm">${item.price}</p>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-pink-500 font-bold hover:bg-pink-50 px-4 py-2 rounded-lg transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;