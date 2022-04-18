import { useState } from "react";

const Input = ({ type, field, ...props }) => {
    const [value, setValue] = useState('');
    return (
        <label> {field}
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-[#f1f1f1] p-2 rounded-md ml-2 text-[#5e5e5e]" 
                type={type} 
                {...props} 
            />
        </label>
    );
}

export default Input; 