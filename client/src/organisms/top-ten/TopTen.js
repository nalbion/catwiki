import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material';

/**
 * @param {Array<Breed>} top10breeds
 * @returns {JSX.Element}
 * @constructor
 */
function TopTen({ breeds, ...attributes }) {
    // const classes = useStyles();

    // TODO: Add a NavLink to each item - but changes the way the images are displayed.
    return (
        <ImageList cols={5} {...attributes}>
            {breeds.map(breed => (
                <ImageListItem key={breed.id}>
                    {breed.image && <img src={breed.image.url}
                         alt={breed.name}
                         loading="lazy"
                    />}
                    <ImageListItemBar title={breed.name} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default TopTen;
