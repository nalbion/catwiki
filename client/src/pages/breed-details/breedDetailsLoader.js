import {getBreedDetails} from '../../services/cat-api';

export default function breedDetailsLoader({ params }) {
    return getBreedDetails(params.breedId);
}
