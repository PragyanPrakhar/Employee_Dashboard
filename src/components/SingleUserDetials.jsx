import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SingleUserDetails() {
    const [userDetails, setUserDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `https://dummyjson.com/users/${id}`
                );
                const data = await response.json();
                if (data.id) {
                    setUserDetails(data);
                } else {
                    throw new Error("Failed to fetch user details");
                }
            } catch (error) {
                console.log("Something wrong happened.");
            }
        };

        fetchUser();
    }, [id]);

    if (!userDetails)
        return <div className="text-center mt-12 text-2xl font-semibold text-gray-700 animate-pulse">Loading.....</div>;

    return (
        <div className="container mx-auto px-6 py-12">
            <Link
                to="/"
                className="text-blue-500 hover:text-blue-700 font-bold text-lg inline-block mb-6"
            >
                ← Back to Home
            </Link>

            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-xl shadow-xl ">
                <div className="text-center">
                    <img
                        src={userDetails.image}
                        alt={`${userDetails.firstName} ${userDetails.lastName}`}
                        className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg mb-6 transform transition duration-300 hover:scale-110"
                    />
                    <h1 className="text-4xl font-extrabold text-white mb-2">
                        {userDetails.firstName} {userDetails.lastName}
                    </h1>
                    <p className="text-lg text-gray-200">
                        <strong className="text-yellow-300">Username: </strong>
                        {userDetails.username}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-700 font-semibold">
                            <strong>Age: </strong> {userDetails.age}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-700 font-semibold">
                            <strong>Gender: </strong> {userDetails.gender}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-700 font-semibold">
                            <strong>Email: </strong> {userDetails.email}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-700 font-semibold">
                            <strong>Contact: </strong> {userDetails.phone}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-700 font-semibold">
                            <strong>Birth Date: </strong> {userDetails.birthDate}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 lg:col-span-2">
                        <p className="text-gray-700 font-semibold">
                            <strong>Address: </strong> {userDetails.address.state}, {userDetails.address.city},{" "}
                            {userDetails.address.address},{" "}
                            {userDetails.address.postalCode},{" "}
                            {userDetails.address.country}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-700 font-semibold">
                            <strong>Company: </strong> {userDetails.company.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleUserDetails;
