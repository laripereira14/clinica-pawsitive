import Button from "./Button";
import Input from "./Input";

const Form = () => {
    return (
        <form className="flex flex-col justify-start space-y-6">
            <Input type="text" field="Nome"/>
            <Input type="text" field="Celular"/>
            <Input type="text" field="Serviço"/>
            <Button classes="self-center"> Enviar </Button>
        </form>
    );
}

export default Form; 