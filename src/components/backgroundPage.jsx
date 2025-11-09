import React, {useState,  useRef } from "react";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

import { PersonalDetails } from "./personalInfo";
import { SelectPlan }  from "./selectPlan";
export function BackgroundPage() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [1, 2, 3, 4];

  
   const formRef = useRef();
  const handleNext = () => {
     if (formRef.current && formRef.current.validateForm){
      const isValid = formRef.current.validateForm();
      if (isValid) {
        setActiveStep((prev) => Math.min(prev + 1, steps.length));
        console.log(" Proceeding to next step");
      } else {
        console.log(" Validation failed");
      }
    } else {
      setActiveStep((prev) => Math.min(prev +1, steps.length))
    }
  };
 const handleBack = () => {
     setActiveStep((prev) => Math.max(prev -1,  1))
 }
 const renderStep = () => {
  switch (activeStep) {
    case 1:
      return <PersonalDetails ref={formRef} />
    case 2:
      return <SelectPlan ref={formRef} />
    default:
      return <PersonalDetails ref={formRef} />
  }
 };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-1/4 m-0 top-0 left-0">
        <img
          src={bgSidebarMobile}
          alt="top background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-15 left-1/2 -translate-x-1/2 flex items-center gap-4">
            {steps.map((step) => (
                <div 
                   key={step}
                   className={`w-6 h-6 sm:w-7 sm:h-7  md:w-8 md:h-8  flex items-center justify-center rounded-full border text-sm font-medium ${step === activeStep
                     ? "bg-blue-500 border-blue-500 text-white"
                  : "border-white text-white/70"
              }`}>
                {step}
               </div>
                 ))}
        </div>
        <div className="absolute top-[100px] sm:top-[130px] md:top-[150px]  w-[90%] 
        bg-gray-100  rounded-2xl p-6 z-10 left-1/2 -translate-x-1/2 shadow-lg">
         {renderStep()}
        </div>
        <div >
          <div className="fixed bottom-4 left-4">
          {
            activeStep > 1 ? (
              <button 
              onClick={handleBack}
              className="text-gray-500 hover:text-gray-800 px-4 py-1 ">
                Go Back
              </button>

            ): (
              <div></div>
            )
          }
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
    </div>
  );
}
