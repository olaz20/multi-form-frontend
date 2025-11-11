import React, { useState, useRef } from "react";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

import { PersonalDetails } from "./personalInfo";
import { SelectPlan } from "./selectPlan";
import { AddOns } from "./addOns";

import { SummaryPage } from "./Summary";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg"

export function BackgroundPage() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [1, 2, 3, 4];

  const formRef = useRef();
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const addons = [
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
  ];

  const plans = [
    { name: "Arcade", price: 9, icon: arcadeIcon },
    { name: "Advanced", price: 12, icon: advancedIcon },
    { name: "Pro", price: 15, icon: proIcon },
  ];
  const handleNext = () => {
    if (formRef.current && formRef.current.validateForm) {
      const isValid = formRef.current.validateForm();
      if (isValid) {
        setActiveStep((prev) => Math.min(prev + 1, steps.length));
        console.log(" Proceeding to next step");
      } else {
        console.log(" Validation failed");
      }
    } else {
      setActiveStep((prev) => Math.min(prev + 1, steps.length));
    }
  };
  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };
  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <PersonalDetails ref={formRef} />;
      case 2:
        return (
          <SelectPlan
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            plans={plans}
          />
        );
      case 3:
        return (
          <AddOns
            billingCycle={billingCycle}
            selectedAddOns={selectedAddOns}
            onSelectAddOns={setSelectedAddOns}
            addons={addons}
          />
        );
      case 4:
        return (
          <SummaryPage
            selectedPlan={selectedPlan}
            billingCycle={billingCycle}
            selectedAddOns={selectedAddOns}
            addons={addons}
            plans={plans}
            goToStep={setActiveStep}
          />
        );
      default:
        return <PersonalDetails ref={formRef} />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 md:flex-row md:justify-center">
      <div className="relative m-0 top-0 left-0 md:w-1/3">
        <img
          src={bgSidebarMobile}
          alt="top background"
          className="w-full h-1/4 object-cover md:hidden"
        />
        <img src={bgSidebarDesktop} alt="Sidebar background desktop"  className="hidden md:block w-full h-full  object-cover"/>

      </div>
        <div className="absolute top-15 left-1/2 -translate-x-1/2 flex items-center gap-4  md:hidden">
          {steps.map((step) => (
            <div
              key={step}
              className={`w-6 h-6 sm:w-7 sm:h-7  md:w-8 md:h-8  flex items-center justify-center rounded-full border text-sm font-medium ${
                step === activeStep
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-white text-white/70"
              }`}
            >
              {step}
            </div>
          ))}
      </div>
      <div className="hidden md:flex flex-col gap-6 absolute top-16 left-10 text-white">
           {[ 
            { step: 1, label: "YOUR INFO" },
            { step: 2, label: "SELECT PLAN" },
            { step: 3, label: "ADD-ONS" },
            { step: 4, label: "SUMMARY" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-4">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border font-semibold ${
                  activeStep === item.step
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-white"
                }`}
              >
                {item.step}
              </div>
              <div className="flex flex-col">
                <span className="text-xs opacity-70">{`STEP ${item.step}`}</span>
                <span className="text-sm font-bold">{item.label}</span>
              </div>
            </div>
          ))}
      </div>
      <div
          className="absolute top-[100px] sm:top-[130px] md:top-[150px]  w-[90%] 
        bg-gray-100  rounded-2xl p-6 z-10 left-1/2 -translate-x-1/2 shadow-lg"
        >
          {renderStep()}
      </div>
        <div>
          <div className="fixed bottom-4 left-4">
            {activeStep > 1 ? (
              <button
                onClick={handleBack}
                className="text-gray-500 hover:text-gray-800 px-4 py-1 "
              >
                Go Back
              </button>
            ) : (
              <div></div>
            )}
          </div>
          <div className="fixed bottom-4 right-4">
            <button
              onClick={handleNext}
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
              {activeStep === steps.length ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
  );
}
