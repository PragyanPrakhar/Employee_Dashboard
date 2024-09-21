import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `https://dummyjson.com/users/${id}`
                );
                const data = await response.json();
                if (data.id) {
                    setUser(data);
                } else {
                    throw new Error("Failed to fetch user details");
                }
            } catch (error) {
                setError(
                    "An error occurred while fetching user details. Please try again later."
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (isLoading) return <div className="text-center mt-8">Loading...</div>;
    if (error)
        return <div className="text-center mt-8 text-red-500">{error}</div>;
    if (!user) return <div className="text-center mt-8">User not found</div>;

    return (
        <div className="container mx-auto px-6 py-10 bg-gray-50">
            <Link
                to="/"
                className="text-blue-600 hover:underline mb-6 inline-block"
            >
                &larr; Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                User Details
            </h1>
            <div className="bg-gray-200 shadow-lg rounded-lg p-8 ">
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-32 h-32 rounded-full border-4 border-blue-400 mx-auto mb-6 shadow-md"
                />
                <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
                    {user.firstName} {user.lastName}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <p className="text-gray-700">
                        <strong>ID:</strong> {user.id}
                    </p>
                    <p className="text-gray-700">
                        <strong>Age:</strong> {user.age}
                    </p>
                    <p className="text-gray-700">
                        <strong>Gender:</strong> {user.gender}
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p className="text-gray-700">
                        <strong>Blood Group:</strong> {user.bloodGroup}
                    </p>
                    <p className="text-gray-700">
                        <strong>Hair:</strong> {user.hair.color},{" "}
                        {user.hair.type}
                    </p>
                    <p className="text-gray-700 col-span-2">
                        <strong>Address:</strong> {user.address.address},{" "}
                        {user.address.city}, {user.address.state}{" "}
                        {user.address.postalCode}, {user.address.country}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
