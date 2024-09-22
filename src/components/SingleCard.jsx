import { Link } from "react-router-dom";

function SingleCard({ user, onDelete, onSelect, isSelected }) {
    return (
        <div
            className={`relative bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                isSelected
                    ? "border-4 border-purple-500"
                    : "border border-gray-200"
            }`}
        >
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onSelect(user.id)}
                className="absolute top-4 right-4 form-checkbox h-5 w-5 text-purple-600"
            />

            <div className="flex flex-col items-center">
                <Link
                    to={`/user/${user.id}`}
                    className="w-full flex justify-center"
                >
                    <img
                        src={user.image}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300 shadow-md object-cover"
                    />
                </Link>

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {user.firstName} {user.lastName}
                </h2>

                <div className="text-sm text-gray-600 text-center">
                    <p>
                        <span className="font-medium text-purple-600">
                            University:{" "}
                        </span>
                        {user.university}
                    </p>
                    <p>
                        <span className="font-medium text-purple-600">
                            Role:{" "}
                        </span>
                        {user.role}
                    </p>
                    <p>
                        <span className="font-medium text-purple-600">
                            Age:{" "}
                        </span>
                        {user.age}
                    </p>
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                    <button
                        onClick={() => onDelete(user.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
                    >
                        Delete
                    </button>
                    <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-200 shadow-md">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleCard;
