import PawPatternBackground from "components/PawPatternBackground";
import SectionTitle from "components/SectionTitle";
import Form from "components/Form";

const Booking = () => {
    return (
        <PawPatternBackground id="booking" classes="flex flex-col justify-center space-y-5 px-12 pb-16 items-center text-center text-black font-medium md:px-40">
            <SectionTitle color="primary-pink" classes="pt-12 text-primary-pink"> Agendamento </SectionTitle>
            <p> Use o formulário abaixo e entraremos em contato com você o mais rápido possível. </p>
            <Form/>
        </PawPatternBackground>
    )
}

export default Booking;
