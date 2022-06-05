import Input from "./Input";

import { formatPhone } from "utils/functions";

const ClientForm = ({ data, showPasswordField, border, handleOnChange }) => {
    return (
        <>
            <fieldset className={`space-y-4 ${border && 'border-2'} md:border-2 border-primary-pink p-3 w-5/6 md:w-full mb-5 font-medium`}>
                <legend className="font-semibold text-lg"> Sobre você </legend>
                <Input type="text" field="Nome" placeholder="Seu nome" value={data.nome} name="nome" onChange={(e) => handleOnChange(e)}/>
                <Input type="text" field="Celular" name="celular" maxLength="11" placeholder="(00) 00000-0000" value={formatPhone(data.celular)} onChange={handleOnChange} />
                <Input type="email" field="E-mail" name="email" placeholder="Seu e-mail. A gente não manda spam :)" value={data.email} onChange={handleOnChange}/>
                { showPasswordField && <Input type="password" field="Senha" name="senha" minLength="8" maxLength="20" placeholder="Entre 8-20 caracteres" value={data.senha} onChange={handleOnChange}/> }
            </fieldset>

            <fieldset className={`space-y-4 ${border && 'border-2'} md:border-2 border-primary-pink p-3 w-5/6 md:w-full mb-5 font-medium`}>
                <legend className="font-semibold text-lg"> Sobre o seu pet </legend>
                <Input type="text" field="Nome" placeholder="Nome do seu pet" name="nome_pet" value={data.nome_pet} onChange={handleOnChange}/>
                <Input type="text" field="Espécie" placeholder="Cachorro, gato..." name="especie_pet" value={data.especie_pet} onChange={handleOnChange}/>
                <Input type="date" field="Data de nascimento" value={data.data_nasc} name="data_nasc" onChange={handleOnChange}/>
            </fieldset>  
        </>
    );

}

export default ClientForm;