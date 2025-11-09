import { useState  } from "react";

export function AddOns ({billingCycle, onSelectAddOns , selectedAddOns}) {
  const [addons, _setAddons] = useState([
    {
      id: 1,
      title: "Online service",
      description: "Access to multiplayer games",
      monthly: 5,
      yearly: 10,
    },
    {
      id: 2,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthly: 2,
      yearly: 20,
    },
    {
      id: 3,
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthly: 2,
      yearly: 20,
    },
  ]);
   const toggleAddOn = (id) => {
    const updated = selectedAddOns.includes(id)
      ? selectedAddOns.filter((addId) => addId !== id)
      : [...selectedAddOns, id];
      onSelectAddOns(updated); 
  };
  const getPrice = (addon) =>
    billingCycle === "monthly"
      ? `+$${addon.monthly}/mo`
      : `+$${addon.yearly}/yr`;

    return (
        <div className="space-y-4">
        <h2 className="text-xl font-bold text-blue-950">Pick add-ons</h2>
        <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>

      {addons.map((addon) => (
        <label
          key={addon.id}
          className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
            selectedAddOns.includes(addon.id)
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectedAddOns.includes(addon.id)}
              onChange={() => toggleAddOn(addon.id)}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <div>
              <p className="font-semibold text-blue-950">{addon.title}</p>
              <p className="text-gray-500 text-sm">{addon.description}</p>
            </div>
          </div>
          <span className="text-blue-600 font-medium">{getPrice(addon)}</span>
        </label>
      ))}
    </div>
    );
}