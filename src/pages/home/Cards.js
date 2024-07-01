import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import HeroModal from '../../components/Modals/HeroModal';
import { getToken } from '../../utils/common';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cards = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [iscardType, setIsCardType] = useState('');
    const [isFee, setFee] = useState([]);
    const [selectedFee, setSelectedFee] = useState(null); // State to store the selected fee data
    const token = getToken();
console.log('selectedFeeselectedFee',selectedFee);
    const handleClose = () => setShow(false);
    const handleShow = (type, fee) => {
        setIsCardType(type);
        setSelectedFee(fee); // Set the selected fee data
        setShow(true);
    };

    const handleClick = (type, fee) => {
        if (token) {
            handleShow(type, fee); // Pass the fee data to handleShow
        } else {
            navigate('/signin');
        }
    };

    useEffect(() => {
        getFee();
    }, []);

    const getFee = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE}fee/findservicefee/ITR_1`);
            console.log('response', response.data);
            setFee(response.data);
        } catch (error) {
            console.error('Error fetching the fee:', error);
        }
    };

    return (
        <>
            <div className="row">
                {isFee.map((item) => (
                    <div className="col-md-6" key={item.categoryId}>
                        <div
                            className="card mb-4"
                            style={{
                                background: item.categoryId === 1 ? "linear-gradient(to bottom, #4e8cff, #0052d4)" : "#ffffff",
                                color: item.categoryId === 1 ? "#fff" : "#000",
                                cursor: 'pointer'
                            }}
                            onClick={() => handleClick(item.categoryId === 1 ? 'Salaried' : 'Non-Salaried', item)} // Pass the fee data to handleClick
                        >
                            <div className="card-body">
                                <div>
                                    <h1>{item.categoryId === 1 ? 'Salaried' : 'Non-Salaried'}</h1>
                                    <p className='fs-6 mt-3 mb-5'>{item.categoryDescription}</p>
                                    <h5>AT RS. {item.serviceFee}/- ONLY</h5>
                                    <p title="">
                                        (50% DISCOUNT <del>₹{item.serviceFee * 2}/</del> &nbsp; ₹{item.serviceFee}/- )
                                    </p>
                                </div>
                                {/* Uncomment the following section if you want to include the button */}
                                {/* <div className='text-end'>
                                    <Button variant=" " className="btn btn-outline-light mb-3" onClick={() => handleClick(item.categoryId === 1 ? 'Salaried' : 'Non-Salaried')}> Get Start </Button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <HeroModal show={show} handleClose={handleClose} cardType={iscardType} selectedFee={selectedFee} /> {/* Pass the selected fee data to HeroModal */}
        </>
    );
};

export default Cards;
