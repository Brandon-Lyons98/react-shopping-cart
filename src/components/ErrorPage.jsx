import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>This page does not exist.</h1>
            <Link to='/'>Back to Homepage</Link>
        </div>
    )
}

export default ErrorPage;