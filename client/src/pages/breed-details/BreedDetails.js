import {NavLink, useLoaderData} from 'react-router-dom';
import {Container} from '@mui/material';
import CategoryRating from '../../molecules/category-rating';


function BreedDetails() {
    const breed = useLoaderData()

    return (
        <Container>
            <NavLink to={"/"}>Home</NavLink>
            <h1>{ breed.name }</h1>

            {breed.image && <img src={breed.image.url} height={200} />}

            <p>{ breed.description }</p>

            <div>
                <h2>Temperament</h2>
                <p>{ breed.temperament }</p>
            </div>

            <div>
                <h2>Origin</h2>
                <p>{ breed.origin }</p>
            </div>

            <div>
                <h2>Life Span</h2>
                <p>{ breed.life_span } years</p>
            </div>

            <div>
                <h2>Ratings</h2>
                <dl>
                    <CategoryRating name="Adaptability" rating={breed.adaptability} />
                    <CategoryRating name="Affection" rating={breed.affection_level} />
                    <CategoryRating name="Child Friendly" rating={breed.child_friendly} />
                    <CategoryRating name="Stranger Friendly" rating={breed.stranger_friendly} />
                    <CategoryRating name="Grooming" rating={breed.grooming} />
                    <CategoryRating name="Health Issues" rating={breed.health_issues} />
                    <CategoryRating name="Social Needs" rating={breed.social_needs} />
                    <CategoryRating name="Adaptability" rating={breed.adaptability} />
                </dl>
            </div>
        </Container>
    )
}

export default BreedDetails;
