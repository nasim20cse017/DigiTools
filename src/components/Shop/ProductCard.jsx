import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProductCard = ({ product, onAdd }) => {
  const tagColors = {
    "best-seller": "bg-orange-100 text-orange-600",
    "popular": "bg-blue-100 text-blue-600",
    "new": "bg-green-100 text-green-600"
  };

  return (
    <div className="card bg-white border border-gray-100 p-8 rounded-3xl text-left hover:shadow-xl transition-all relative">
      <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tagColors[product.tagType]}`}>
        {product.tag}
      </div>
      <img src={product.icon} className="w-16 h-16 mb-6" alt="" />
      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-3xl font-extrabold text-[#1F2937]">${product.price}</span>
        <span className="text-gray-400 capitalize">/{product.period}</span>
      </div>

      <div className="space-y-3 mb-10 flex-grow">
        {product.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-600 text-sm">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            {f}
          </div>
        ))}
      </div>

      <button onClick={() => onAdd(product)} className="btn w-full bg-[#7C3AED] hover:bg-[#632ecb] border-none text-white rounded-2xl h-14 font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;