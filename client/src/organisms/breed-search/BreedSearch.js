import {Autocomplete, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';

function BreedSearch({ breeds }) {
    const navigate = useNavigate();

    // const search=- React.useMemo((() => debounce((req, callback) => {
    //     searchBreeds(req)
    // })))
    // filterOptions={(x) => x}
    // TODO: asynchronous or search as you type
    return (
        <Autocomplete
            disablePortal
            options={breeds}
            getOptionLabel={(option) => option.name}
            onChange={(event, breed) => {
                navigate(`/breeds/${breed.id}`)
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search breed" />}
        />
    )
}

export default BreedSearch;
