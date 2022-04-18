const Input = ({ type, field, ...props }) => {
    return (
        <label> {field}
            <input className="bg-[#f1f1f1] p-2 rounded-md ml-2" type={type} {...props} />
        </label>
    );
}

export default Input; 