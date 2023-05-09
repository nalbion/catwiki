export default async function breedDetailsLoader({ params }) {
    const breed = { breedId: params.breedId } // await getBreedDetails(params.breedId);
    return { breed }
}
