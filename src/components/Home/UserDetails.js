import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const UserDetails = ({ user }) => {

    const { id, name, email, phone, address, username, company, website } = user;

    const [userDetails, setUserDetails] = useState({})
    const [displayData, setDisplayData] = useState(false);
    const [activeButton, setActiveButton] = useState(false);



    const handleViewDetails = (id) => {
        console.log(id);
        const loadUserDetails = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            console.log(data);
            setUserDetails(data);
        }
        setActiveButton(!activeButton)
        setDisplayData(!displayData);
        loadUserDetails();
    }
    console.log("User Details", userDetails);

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (

        <>
            <tr className='table-row' >
                <td className='' >
                    <div className="font-bold ">Contact</div>
                    <div className=" font-semibold text-sm ">{name}</div>
                </td>

                <td className=''>
                    <div className="font-bold">Street</div>
                    <div className="text-sm font-semibold">{address.street}</div>
                </td>

                <td className=''>
                    <div className="font-bold">City</div>
                    <div className="text-sm font-semibold">{address.city}</div>
                </td>
                <td className=''>
                    <div className="font-bold">Email</div>
                    <div className="text-sm font-semibold">{email}</div>
                </td>
                <th className=''>
                    <button onClick={() => handleViewDetails(id)} className='text-white px-4 py-1 rounded-2xl' style={{ backgroundColor: !activeButton ? "#ee2361" :  "blue"}}>{displayData ? 'Hide Details' : 'View Details'}</button>
                </th>
            </tr>

            {
                displayData &&
                <div className='bg-white 
                flex justify-evenly items-center  my-2  gap-x-32 rounded-lg py-3 animation' data-aos="zoom-in">
                    
                    <div>
                        <h1 className='font-bold'>Contact Person</h1>
                        <p>{name}</p>
                        <h1 className='font-bold mb-1'>Username</h1>
                        <p>{username}</p>
                        <h1 className='font-bold mb-1'>Email</h1>
                        <p>{email}</p>
                        <h1 className='font-bold mb-1'>Phone</h1>
                        <p>{phone}</p>
                    </div>

                    <div className=''>
                        <h1 className='font-bold mb-1'>Address</h1>
                        <p>{address.suite} {address.street} {address.city} {address.zipcode}</p>
                        <h1 className='font-bold mb-1'>City</h1>
                        <p>{address.city} </p>
                        <h1 className='font-bold mb-1'>Company</h1>
                        <p>{company.name} </p>
                        <h1 className='font-bold mb-1'>Website</h1>
                        <p>{website} </p>
                    </div>
                </div>
            }
        </>



    );
};

export default UserDetails;