import catInCables from './cat-cables.png';
import {Container} from "@mui/material";
import {NavLink} from "react-router-dom";
import './ErrorPage.css';

function ErrorPage() {
    return (
        <Container className="error">
            <h1>Whoops!</h1>
            <p>An error occurred. Please try again later.</p>
            <p>Return to the <NavLink to={"/"}>home page</NavLink></p>
            <img src={catInCables} alt="cat-related error"/>
        </Container>
    )
}

export default ErrorPage;
