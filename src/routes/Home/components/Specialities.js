import Card from "components/Card";
import SectionTitle from "components/SectionTitle";

const Specialities = () => {
    return (
        <section id="specialities" className="w-full px-16 py-12 text-center text-white bg-primary-green md:px-40 md:py-12 lg:px-[15%]">
            <SectionTitle classes="mb-8"> Especialidades </SectionTitle>
            <p className="font-medium my-6 md:my-10 text-lg lg:text-xl"> Clique na especialidade desejada para saber mais. </p>
            <div className="my-8 grid col-span-1 gap-y-16 justify-items-center md:grid-cols-3 lg:mt-20">
                <Card icon="stethoscope" title="Consultas"/>
                <Card icon="exams" title="Exames"/>
                <Card icon="ambulance" title="Emergência 24h"/>
                <Card icon="vaccines" title="Vacinas"/>
                <Card icon="grooming" title="Banho e Tosa"/>
                <Card icon="uti" title="Internação"/>
            </div>
        </section>
    )
}

export default Specialities;