import {useLoaderData} from "react-router-dom";


function BreedDetails() {
    const { breed } = useLoaderData()

    console.info('Breed:', breed)

    return (
        <div>BreedDetails { breed.breedId }</div>
    )
}

export default BreedDetails;
