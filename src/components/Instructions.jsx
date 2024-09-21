function Instructions() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                User Dashboard Guide
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span>
                    Browse the list of users displayed below.
                </li>
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span>
                    Use the search bar to quickly find a user by their ID.
                </li>
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span>
                    Click on any card to view more details about the selected
                    user.
                </li>
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span>
                    Delete a user by clicking the "Delete" button on their card.
                </li>
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span>
                    The "Edit" button is non-functional and serves as a
                    placeholder.
                </li>
                <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span>
                    Select multiple users using the checkboxes and delete them
                    in bulk.
                </li>
            </ul>
        </div>
    );
}

export default Instructions;
