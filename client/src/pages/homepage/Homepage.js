import {useLoaderData} from 'react-router-dom';
import {Container} from '@mui/material';
import TopTen from '../../organisms/top-ten/TopTen';
import BreedSearch from '../../organisms/breed-search/BreedSearch';

function Homepage() {
    const { breeds, top10 } = useLoaderData()

    return (
        <Container>
            <h1>CatWiki</h1>
            <BreedSearch breeds={breeds} />

            <h2>Top 10 Breeds</h2>
            <TopTen breeds={top10} />
        </Container>
    )
}

export default Homepage;
