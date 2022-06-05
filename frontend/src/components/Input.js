import { useState } from "react";

const Input = ({ type, field, expand, ...props }) => {
    const [value, setValue] = useState('');
    return (
        <div className="flex items-center">
            <label className="w-5/6 md:w-3/6"> {field} </label>
            {expand ? (
                <textarea value={value} onChange={(e) => setValue(e.target.value)} className="bg-[#f1f1f1] p-2 rounded-md ml-2 text-[#5e5e5e] resize-none w-full md:w-10/12" rows="6" cols="30" {...props}/>
            ) : (
                <input 
                    className="bg-[#eeeeee] p-2 rounded-md ml-2 text-[#555555] md:w-10/12"
                    type={type} 
                    {...props} 
                />
            )}
        </div>
    );
}

export default Input; 