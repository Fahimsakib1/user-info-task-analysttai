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
            </div>

        </div>
    );
};

export default Home;