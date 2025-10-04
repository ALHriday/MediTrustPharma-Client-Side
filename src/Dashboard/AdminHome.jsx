import { FaCartPlus, FaDollarSign, FaHome, FaUsers } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Pie } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);



const AdminHome = () => {
    const { stats } = useContext(AuthContext);
    const { revenue, totalHistory, totalProducts, totalUsers } = stats || {};

    const data = {
        labels: ['Total Products', 'Total Users', 'Total History', 'Total Revenue'],
        datasets: [
            {
                label: ['Total Products', 'Total Users', 'Total History', 'Total Revenue'],
                data: [totalProducts, totalUsers, totalHistory, revenue],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'MediTrustPharma',
            },
        },
    };


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 gap-4">

                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaCartPlus className="w-10 h-10 font-bold text-white bg-secondary p-2 rounded-md shadow-md"></FaCartPlus>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Orders</h1>
                        <p>{totalHistory}</p>
                    </div>
                </div>
                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaHome className="w-10 h-10 font-bold text-white bg-slate-400 p-2 rounded-md shadow-md"></FaHome>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Products</h1>
                        <p>{totalProducts < 10 ? `0${totalProducts}` : totalProducts}</p>
                    </div>
                </div>
                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaUsers className="w-10 h-10 font-bold text-white bg-success p-2 rounded-md shadow-md"></FaUsers>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Users</h1>
                        <p>{totalUsers < 10 ? `0${totalUsers}` : totalUsers}</p>
                    </div>
                </div>
                <div className="bg-slate-100 shadow-md rounded-md flex gap-4 md:gap-2 p-4">
                    <div className="flex justify-center items-center">
                        <FaDollarSign className="w-10 h-10 font-bold text-white bg-accent p-2 rounded-md shadow-md"></FaDollarSign>
                    </div>
                    <div className="text-black text-xl">
                        <h1 className="font-bold">Revenue</h1>
                        <p>${revenue}</p>
                    </div>
                </div>
            </div>

            <div className="p-4 flex justify-center items-center mt-4 max-h-[500px]">
                <Pie
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default AdminHome;