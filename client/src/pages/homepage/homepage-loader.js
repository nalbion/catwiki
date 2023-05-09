import {getTop10, searchBreeds} from '../../services/cat-api';

export default async function homepageLoader() {
    const [breeds, top10] = await Promise.all([
        searchBreeds(''),
        getTop10()
    ]);
    // const top10 = await getTop10();
    return {
        breeds,
        top10
    };
}
