import React, { useState } from 'react';
import UserDataTableModal from './UserDataTableModal';
import { MdOutlineRemoveRedEye } from "react-icons/md";


const AdminProfile = ({ isAdminData }) => {
    const [showModal, setShowModal] = useState(false);
    
    const [selectedUser, setSelectedUser] = useState('');

    const handleCloseUserModal = () => setShowModal(false);
    const handleShowUserModal = (user) => {
         setSelectedUser(user.userName);
        console.log(user.userName);
         setShowModal(true);
    };

    return (
        <>
            <table className="table mb-0 table-center">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-bottom p-3" style={{ maxWidth: "300px" }}>User ID</th>
                        <th scope="col" className="border-bottom p-3 " style={{ maxWidth: "150px" }}>User Name</th>
                        <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "150px" }}>Name</th>
                        <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Email</th>
                        <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Role</th>
                        <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {isAdminData.length > 0 ? isAdminData.map((item, index) => (
                        <tr key={index}>
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">
                                
                                <span role='button' className="text-primary" 
                                onClick={() => handleShowUserModal(item)}
                                >
                                    {item.userName } 
                                    {/* <MdOutlineRemoveRedEye/> */}
                                </span>
                            </td>
                            <td className="text-center small p-3 text-muted">{item.firstName + " " + item.lastName}</td>
                            <td className="text-center small p-3 text-muted">{item.emailId ?item.emailId : '--'}</td>
                            <td className="text-center small p-3 text-muted">{item.role}</td>
                            <td className="text-center small p-3 text-muted">{item.phoneNumber ?item.phoneNumber: '--'}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                <h5>Data not available...</h5>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {selectedUser&& 
            <UserDataTableModal
            showModal={showModal} handleCloseUserModal={handleCloseUserModal} user={selectedUser}/>
            }
            
        </>
    );
};

export default AdminProfile;
