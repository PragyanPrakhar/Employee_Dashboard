import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchInput from "./components/SearchBar";
import { Link } from "react-router-dom";

function EmployeeDashboard() {
    const [employeeData, setEmployeeData] = useState([]);
    const [visibleEmployees, setVisibleEmployees] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    const fetchEmployeeData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const result = await response.json();
            console.log(result);
            if (result.users) {
                setEmployeeData(result.users);
                setVisibleEmployees(result.users);
            } else {
                throw new Error("Failed to fetch employee data");
            }
        } catch (error) {
            setError(
                "An error occurred while fetching employee data. Please try again later."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchEmployee = (employeeId) => {
        const filteredEmployees = employeeData.filter(
            (employee) => employee.id.toString() === employeeId
        );
        setVisibleEmployees(filteredEmployees);
    };

    const handleRemoveEmployee = (employeeId) => {
        const updatedEmployeeData = employeeData.filter(
            (employee) => employee.id !== employeeId
        );
        setEmployeeData(updatedEmployeeData);
        setVisibleEmployees(updatedEmployeeData);
    };

    const handleEmployeeSelection = (employeeId) => {
        setSelectedEmployees((prevSelected) =>
            prevSelected.includes(employeeId)
                ? prevSelected.filter((id) => id !== employeeId)
                : [...prevSelected, employeeId]
        );
    };

    const handleDeleteSelectedEmployees = () => {
        const updatedEmployeeData = employeeData.filter(
            (employee) => !selectedEmployees.includes(employee.id)
        );
        setEmployeeData(updatedEmployeeData);
        setVisibleEmployees(updatedEmployeeData);
        setSelectedEmployees([]);
    };

    if (isLoading)
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></span>
            </div>
        );

    if (error)
        return (
            <div className="text-center mt-8 text-red-500 text-lg font-semibold">
                {error}
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
                <SearchInput onSearch={handleSearchEmployee} />
            </div>

            {selectedEmployees.length > 0 && (
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleDeleteSelectedEmployees}
                        className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-3 px-6 rounded-full shadow-xl transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out ring-4 ring-red-300 focus:outline-none"
                    >
                        {selectedEmployees.length > 1
                            ? `Delete Selected Employees (${selectedEmployees.length})`
                            : `Delete Selected Employee (${selectedEmployees.length})`}
                    </button>
                </div>
            )}

            <div className="mt-8">
                <CardList
                    users={visibleEmployees}
                    onDelete={handleRemoveEmployee}
                    onSelect={handleEmployeeSelection}
                    selectedUsers={selectedEmployees}
                />
            </div>
        </div>
    );
}

export default EmployeeDashboard;
