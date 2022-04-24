import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Select = ({ field, options, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(selectedOption);

    const toggleList = () => setIsOpen(prevState => !prevState);

    const handleSelect = (selected) => {
        setIsOpen(false);
        setValue(selected);
    }

    return (
       <div className="flex items-center"> 
           <label className="flex-1"> {field} </label>
           <select className="w-full appearance-none ml-2 p-2 bg-[#f1f1f1] text-[#5e5e5e] rounded-md cursor-pointer" onChange={handleSelect}>
            <option selected className="cursor-pointer">Escolha uma opção</option>
            {options.map(el => <option value={el.id} className="cursor-pointer">{el.title}</option>)}
            </select>
       </div>

    );
}

export default Select;

/**<label className="flex-1"> {field}
            <select className="w-full appearance-none ml-2 p-2 bg-[#f1f1f1] text-[#5e5e5e] rounded-md cursor-pointer">
            <option selected className="cursor-pointer">Escolha uma opção</option>
                {options.map(el => <option value={el} className="cursor-pointer">{el}</option>)}
            </select>
       </label> 

        <div className="flex items-center"> 
           <label className="flex-1"> {field} </label>
           <div className="flex w-4/5 items-center p-2 bg-[#f1f1f1] text-[#5e5e5e] rounded-md cursor-pointer" onClick={toggleList}>
                <span className="mr-auto"> {value} </span>
                { isOpen ? <ChevronUpIcon className="h-7 w-7"/> : <ChevronDownIcon className="h-7 w-7"/>  }
           </div>
                { isOpen && (
                    <ul className="absolute bg-[#f1f1f1] text-[#5e5e5e] cursor-pointer rounded-b-md overflow-hidden">
                        {options.map(el => <li key={el.id} className="p-2 hover:bg-primary-pink hover:text-white" onClick={() => handleSelect(el.title)}> {el.title} </li>)}
                    </ul>
            )}
       </div>
       
       
       
       <div className="p-2 bg-[#f1f1f1] text-[#5e5e5e] rounded-md cursor-pointer" onClick={toggleList}>
                <span className="mr-auto"> {value} </span>
                { isOpen ? <ChevronUpIcon className="h-7 w-7"/> : <ChevronDownIcon className="h-7 w-7"/>  }
                { isOpen && (
                    <ul className="absolute ml-2 bg-[#f1f1f1] text-[#5e5e5e] cursor-pointer rounded-b-md -mt-1 overflow-hidden">
                        {options.map(el => <li key={el.id} className="p-2 hover:bg-primary-pink hover:text-white" onClick={() => handleSelect(el.title)}> {el.title} </li>)}
                    </ul>
                )}
            </div>
       
       
       
       
       
       
       
       */