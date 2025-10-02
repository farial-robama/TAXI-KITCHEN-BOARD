const CookingCard = ({cookingItem}) => {
  
  return (
    <div
      className="rounded-xl p-5 shadow hover:shadow-lg"
      style={{
        background: "linear-gradient(#ffffff90, #FCB700), url('/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2">
        {cookingItem.order_title}
      </h3>

      {/* Quantity */}
      <p className="text-lg font-semibold">
        Quantity: <span className="text-gray-700">{cookingItem.quantity}</span>
      </p>

      {/* Special Instruction */}
      <p className="text-xs text-gray-600 mt-2 italic">
        {cookingItem.special_instruction}
      </p>

      {/* Static Button */}
      <button className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl">
        Cooked?
      </button>
    </div>
  );
};

export default CookingCard;