import SingleCard from "./SingleCard";
function CardList({ users, onDelete, onSelect, selectedUsers }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
                <SingleCard
                    key={user.id}
                    user={user}
                    onDelete={onDelete}
                    onSelect={onSelect}
                    isSelected={selectedUsers?.includes(user.id)}
                />
            ))}
        </div>
    );
}

export default CardList;
