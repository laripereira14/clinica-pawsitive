import Card from "components/Card";
import SectionTitle from "components/SectionTitle";

const Specialities = () => {
    return (
        <section className="w-full py-8 px-16 space-y-5 text-center bg-primary-green bg-test bg-blend-multiply bg-cover md:mt-72 md:px-40 md:py-12">
            <SectionTitle color="white"> Especialidades </SectionTitle>
            <p> Clique no ícone da especialidade desejada pra saber mais.</p>
            <div className="mt-8 grid col-span-1 gap-5 justify-items-center md:grid-cols-4 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </section>
    )
}

export default Specialities;