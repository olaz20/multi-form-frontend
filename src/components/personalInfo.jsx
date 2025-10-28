import {useFormValidation} from "../hooks/useFormValidation"
import {personalInfoValidator} from "../hooks/personalInfoValidation"
import { forwardRef, useImperativeHandle } from "react";

export const PersonalDetails= forwardRef((props, ref) => {
    const { values, errors, handleChange, handleSubmit } = useFormValidation(
    { name: "", email: "", phone: "" },
     personalInfoValidator
    );
    useImperativeHandle(ref, () => ({
    validateForm: () => {
      const fakeEvent = { preventDefault: () => {} };
      const validationErrors = personalInfoValidator(values);
      if (Object.keys(validationErrors).length === 0) {
        return true;
      } else {
        handleSubmit(() => {})(fakeEvent);
        return false;
      }
    },
  }));

    const inputStyle = "w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    const LabelStyle="block text-blue-900 font-medium text-sm mb-1"
    return (
        <form className="space-y-4" onSubmit={handleSubmit()}>
            <h2 className="text-xl font-bold text-blue-950">Personal Details</h2>
             <p className="text-gray-500 leading-tight">Please provide your Name, Email Adress and Phone Number </p>
            <div>
                <label className={LabelStyle}>Full Name</label>
                <input type="text" placeholder="Enter your name" name="name" value={values.name} onChange={handleChange}
                className={inputStyle}/>
                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
                <label className={LabelStyle}>Email Address</label>
                <input type="email" name="email" 
                value={values.email} onChange={handleChange} placeholder="you@example.com" className={inputStyle}/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
                <label className={LabelStyle}>Phone Number</label>
                <input type="tel" name="phone" value={values.phone} onChange={handleChange} placeholder="Enter your phone number" className={inputStyle}/>
                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
        </form>

    );
}
);