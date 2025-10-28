export function personalInfoValidator(values = {}){
        const errors = {};
        const name = values.name || "";
        const email = values.email || "";
        const phone = values.phone || "";

        if (!name.trim()) {errors.name = "Full name is requered";}
        if (!email.trim()) {errors.email = "Email is requried.";}
        else if (!/\S+@\S+\.\S+/.test(email)){
            errors.email = "Enter a valid email address." }
        if (!phone.trim()){ errors.phone = "Phone number is required.";}
        else if (!/^\d{10,15}$/.test(phone)){
            errors.phone = "Enter a valid phone number (10–15 digits).";}
        return errors
        }
