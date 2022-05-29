import { useNavigate } from "react-router-dom";

import SpecialtyLink from "components/SpecialtyLink";
import SectionTitle from "components/SectionTitle";

const Specialities = () => {
    const navigate = useNavigate();

    return (
        <section id="specialities" className="w-full px-16 py-12 text-center text-white bg-primary-green md:px-40 md:py-12 lg:px-[15%]">
            <SectionTitle classes="mb-8"> Especialidades </SectionTitle>
            <p className="font-medium my-6 md:my-10 text-lg lg:text-xl"> Clique na especialidade desejada para saber mais. </p>
            <div className="my-8 grid col-span-1 gap-y-16 justify-items-center md:grid-cols-3 lg:mt-20">
                <SpecialtyLink icon="stethoscope" title="Consultas" onClick={() => navigate("/consultas", { state: { id: 1 }})} />
                <SpecialtyLink icon="exams" title="Exames" onClick={() => navigate("/exames", { state: { id: 2 }})}/>
                <SpecialtyLink icon="ambulance" title="Emergência 24h" onClick={() => navigate("/emergencia", { state: { id: 3 }})}/>
                <SpecialtyLink icon="vaccines" title="Vacinas" onClick={() => navigate("/vacinas", { state: { id: 4 }})}/>
                <SpecialtyLink icon="grooming" title="Banho e Tosa" onClick={() => navigate("/banho-e-tosa", { state: { id: 5 }})}/>
                <SpecialtyLink icon="uti" title="Internação" onClick={() => navigate("/internacao", { state: { id: 6 }})}/>
            </div>
        </section>
    )
}

export default Specialities;