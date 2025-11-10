export function SummaryPage({
  selectedPlan,
  billingCycle,
  selectedAddOns,
  addons,
  plans,
  goToStep
}) {
  const plan = plans.find((p) => p.name === selectedPlan);

  const planPrice =
    billingCycle === "monthly" ? plan.price : plan.price * 10;

  const selectedAddOnDetails = addons.filter((a) =>
    selectedAddOns.includes(a.id)
  );

  const addOnsTotal = selectedAddOnDetails.reduce((total, addon) => {
    return (
      total +
      (billingCycle === "monthly" ? addon.monthly : addon.yearly)
    );
  }, 0);

  const total = planPrice + addOnsTotal;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-blue-950">Finishing up</h1>
      <p className="text-gray-500">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-blue-950">
              {selectedPlan} ({billingCycle === "monthly" ? "Monthly" : "Yearly"})
            </p>
            <button
              className="underline text-blue-600"
              onClick={() => goToStep(2)}
            >
              Change
            </button>
          </div>

          <p className="font-semibold text-blue-950">
            ${planPrice}/{billingCycle === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        <hr className="my-3" />

        {selectedAddOnDetails.map((addon) => (
          <div key={addon.id} className="flex justify-between text-sm mb-2">
            <p className="text-gray-500">{addon.title}</p>
            <p className="text-blue-600">
              +$
              {billingCycle === "monthly" ? addon.monthly : addon.yearly}/
              {billingCycle === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        ))}
      </div>


      <div className="flex justify-between px-4">
        <p className="text-gray-500">
          Total (per {billingCycle === "monthly" ? "month" : "year"})
        </p>
        <p className="font-bold text-blue-700">
          +${total}/{billingCycle === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
}
