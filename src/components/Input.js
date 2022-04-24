import { useState } from "react";

const Input = ({ type, field, expand, ...props }) => {
    const [value, setValue] = useState('');
    return (
        <div className="flex items-center">
            <label className="flex-1"> {field} </label>
            {expand ? (
                <textarea value={value} onChange={(e) => setValue(e.target.value)} className="bg-[#f1f1f1] p-2 rounded-md ml-2 text-[#5e5e5e] w-4/5 resize-none" rows="6" cols="30">

                </textarea>
            ) : (
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-[#f1f1f1] p-2 rounded-md ml-2 text-[#5e5e5e] w-4/5"
                    type={type} 
                    {...props} 
                />
            )}
        </div>
    );
}

export default Input; 