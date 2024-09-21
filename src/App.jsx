import React, { useState, useEffect } from "react";
import UserList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import { Link } from "react-router-dom";
function App() {
    const [userData, setUserData] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [checkedUsers, setCheckedUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const result = await response.json();
            if (result.users) {
                setUserData(result.users);
                setDisplayedUsers(result.users);
            } else {
                throw new Error("Failed to fetch user data");
            }
        } catch (error) {
            setFetchError(
                "An error occurred while fetching user data. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (id) => {
        const filteredUsers = userData.filter(
            (user) => user.id.toString() === id
        );
        setDisplayedUsers(filteredUsers);
    };

    const handleDeleteUser = (id) => {
        const updatedUserData = userData.filter((user) => user.id !== id);
        setUserData(updatedUserData);
        setDisplayedUsers(updatedUserData);
    };

    const handleUserSelect = (id) => {
        setCheckedUsers((prev) =>
            prev.includes(id)
                ? prev.filter((userId) => userId !== id)
                : [...prev, id]
        );
    };

    const handleDeleteSelectedUsers = () => {
        const updatedUserData = userData.filter(
            (user) => !checkedUsers.includes(user.id)
        );
        setUserData(updatedUserData);
        setDisplayedUsers(updatedUserData);
        setCheckedUsers([]);
    };

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></span>
            </div>
        );

    if (fetchError)
        return (
            <div className="text-center mt-8 text-red-500 text-lg font-semibold">
                {fetchError}
            </div>
        );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-extrabold text-center text-gray-400 mb-10 bg-gradient-to-r  p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Employee Dashboard
            </h1>

            

            <div className="bg-gray-100 flex items-center  p-4 rounded-lg mb-4">
                <Link to="/instructions">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Go to Instructions
                    </button>
                </Link>
                <SearchBar onSearch={handleSearch} />
            </div>

            {checkedUsers.length > 0 && (
                <div className="text-center">
                    <button
                        onClick={handleDeleteSelectedUsers}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        {checkedUsers.length > 1
                            ? `Delete Selected Users (${checkedUsers.length})`
                            : `Delete Selected User (${checkedUsers.length})`}
                    </button>
                </div>
            )}

            <div className="mt-8">
                <UserList
                    users={displayedUsers}
                    onDelete={handleDeleteUser}
                    onSelect={handleUserSelect}
                    selectedUsers={checkedUsers}
                />
            </div>
        </div>
    );
}

export default App;
