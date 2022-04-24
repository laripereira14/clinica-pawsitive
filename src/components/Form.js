import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const Form = () => {
    const options = [
        { id: 1, title: 'Consultas'},
        { id: 2, title: 'Exames'},
        { id: 3, title: 'Emergência 24h'},
        { id: 4, title: 'Vacinas'},
        { id: 5, title: 'Banho e Tosa'},
        { id: 6, title: 'Internação'}
    ];
    return (
        <form className="flex flex-col space-y-6 md:w-10/12 lg:w-5/12">
            <Input type="text" field="Nome"/>
            <Input type="text" field="Celular"/>
            <Input type="text" field="Assunto"/>
            <Input expand type="text" field="Mensagem"/>
            <Button href="#" classes="self-center"> Enviar </Button>
        </form>
    );
}

export default Form; 