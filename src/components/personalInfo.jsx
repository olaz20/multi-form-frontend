export function PersonalDetails(){
    const inputStyle = "w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
    const LabelStyle="block text-blue-900 font-medium text-sm mb-1"
    return (
        <form className="space-y-4">
            <h2 className="text-xl font-bold text-blue-950">Personal Details</h2>
             <p className="text-gray-500 leading-tight">Please provide your Name, Email Adress and Phone Number </p>
            <div>
                <label className={LabelStyle}>Full Name</label>
                <input type="text" placeholder="Enter your name" className={inputStyle}/>
            </div>
            <div>
                <label className={LabelStyle}>Email Address</label>
                <input type="email" placeholder="you@example.com" className={inputStyle}/>
            </div>
            <div>
                <label className={LabelStyle}>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className={inputStyle}/>
            </div>
        </form>

    );
}