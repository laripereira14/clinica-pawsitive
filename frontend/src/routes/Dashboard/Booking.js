import Form from "components/Form";
import { useOutletContext } from "react-router-dom";

const Booking = () => {
    const [ data ] = useOutletContext();
    return (
        <div className="flex flex-col justify-center items-center">
            <Form formData={data}/>
        </div>
    );
}

export default Booking;