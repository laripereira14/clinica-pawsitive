const FeatureList = ({ data }) => {
    return <ul>
        { data.map(el => <li key={el} className="flex mb-2 before:content-[url('assets/icons/paw.svg')] before:block before:w-6 before:h-6 before:mr-4">{el}</li> )}
    </ul>
}

export default FeatureList;