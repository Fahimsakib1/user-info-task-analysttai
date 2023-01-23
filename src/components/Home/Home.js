import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const loadUserData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            console.log(data);
            setUserInfo(data);
        }
        loadUserData();

    }, [])

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    


    return (
        <div>
            <div className="overflow-x-auto  mx-auto px-16 bg-gray-500">
                <table className="table w-full my-8 rounded-xl">

                    <thead>
                        <tr>
                            {/* <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th> */}
                        </tr>
                    </thead>
                    <tbody className='py-4 animation' data-aos="flip-left">
                        {
                            userInfo.map(user => <UserDetails user={user} key={user.id}></UserDetails>)
                        }
                    </tbody>

                </table>

                <div className="flex justify-center space-x-1 text-gray-100 mb-12">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-700 border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    
                    <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md hover:bg-rose-500 bg-gray-900 border-white ">1</button>
                    <button  type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md hover:bg-rose-500 bg-gray-900 border-white" title="Page 2">2</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md hover:bg-rose-500 bg-gray-900 border-white" title="Page 3">3</button>
                    <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md hover:bg-rose-500 bg-gray-900 border-white" title="Page 4">4</button>
                    
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-700 border-gray-800 ">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default Home;