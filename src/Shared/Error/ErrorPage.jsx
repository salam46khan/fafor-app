import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen w-full bg-[#FF8FB5] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl text-white">Sorry, Page not found</h1>
                <Link className="mt-4 inline-block py-2 px-8 text-white rounded-md bg-[#03BAFC]" to={-1}>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;