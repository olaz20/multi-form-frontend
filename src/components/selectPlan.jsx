import { useState } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import  proIcon from "../assets/images/icon-pro.svg"

export function SelectPlan(){
    const [billingType, setBellingType] = useState("monthly");
    const [selectedPlan, setSelectedPlan] = useState("Arcade");

    const plans = [
         { name: "Arcade", price: 9, icon: arcadeIcon },
         { name: "Advanced", price: 12, icon: advancedIcon },
         { name: "Pro", price: 15, icon: proIcon },
    ]
    return (
        <div className="space-y-6">
            <h1 className="text-blue-950 text-xl font-bold mb-2"> Select Your Plan </h1>
            <p className="text-gray-500 mb-2">You have the option of monthly or yearly billing.</p>
            <div className=" grid grid-cols-1 gap-4">
                {plans.map((plan) => (
                    <div 
                      key={plan.name}
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`flex items-center p-3 border rounded-lg border-blue-900 cursor-pointer ${selectedPlan === plan.name  ? "border-blue-600 bg-blue-50"
                     : "border-gray-300 hover:border-blue-400" }`}>
                        <img src={plan.icon} alt={plan.name} className="w-8 h-8 mr-4"></img>
                        <div>
                        <p className="text-blue-900 font-semibold">{plan.name}</p>
                        <p className="text-gray-500">${plan.price}/{billingType === "monthly" ? "mo" : "yr"}
                        </p>
                        </div>
                      </div>
                ))}
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-md py-2 mt-4">
                <span
                className={`mx-4 font-medium ${
                billingType === "monthly" ? "text-blue-900" : "text-gray-500"
                }`}>Monthly</span>
                <label
                 className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"
                value=""
                className="sr-only peer"
                onChange={()  =>
                setBellingType(billingType === "monthly" ? "yearly" : "monthly")} />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer
                peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute
                after:top-0.5
                after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full
                after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                ></div>
                </label>

                <span className={`mx-4 font-medium ${
                billingType === "yearly" ? "text-blue-900" : "text-gray-500"
                }`}>Yearly</span>
                </div>
        </div>
    )
}