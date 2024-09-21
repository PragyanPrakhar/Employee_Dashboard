import { Link } from "react-router-dom";

function UserCard({ user, onDelete, onSelect, isSelected }) {
    return (
        <div
            className={`relative bg-gray-300 shadow-lg rounded-lg p-6 mb-4 transition-transform duration-300 hover:scale-105 ${
                isSelected
                    ? "border-2 border-blue-500"
                    : "border border-gray-200"
            }`}
        >
            <Link to={`/user/${user.id}`}>
                <div className="text-center mb-4">
                    <img
                        src={user.image}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-28 h-28 rounded-full mx-auto border-4 border-blue-200"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-gray-600">
                        <span className="font-medium text-blue-600">ID:</span>{" "}
                        {user.id}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium text-blue-600">Age:</span>{" "}
                        {user.age}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium text-blue-600">
                            Email:
                        </span>{" "}
                        {user.email}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium text-blue-600">Role:</span>{" "}
                        {user.role}
                    </p>
                </div>
            </Link>

            {/* Action buttons */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent the click from triggering card navigation
                        onDelete(user.id);
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                >
                    Delete
                </button>
                <button
                    onClick={(e) => e.stopPropagation()} // Prevent triggering navigation
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                    Edit
                </button>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => {
                        e.stopPropagation(); // Prevent triggering navigation
                        onSelect(user.id);
                    }}
                    className="form-checkbox h-5 w-5 text-blue-600 self-center"
                />
            </div>
        </div>
    );
}

export default UserCard;
