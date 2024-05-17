import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import HeroModal from '../../components/Modals/HeroModal';
import { getToken } from '../../utils/common';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [iscardType, setIsCardType] = useState('');
    const token = getToken();

    const handleClose = () => setShow(false);
    const handleShow = (type) => {
        setIsCardType(type);
        setShow(true);
    };

    const handleClick = (type) => {
        if (token) {
            handleShow(type); // Set the iscardType state based on the card type
        } else {
            navigate('/signin');
            // window.location.href = '/signin';
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{ background: "linear-gradient(to bottom, #4e8cff, #0052d4)", color: "#fff", cursor: 'pointer' }} onClick={() => handleClick('Salaried')}>
                        <div className="card-body" style={{ background: "linear-gradient(to bottom, #4e8cff, #0052d4)" }}>
                            <div>
                                <h1 className=''>Salaried</h1>
                                <p className='fs-6 mt-3 mb-5'>where employees receive a fixed salary for their work, typically on a regular basis such as monthly or bi-weekly.</p>
                                <h5>AT RS. 699/- ONLY</h5>
                                <p title="">(50 % DISCOUNT <del>₹1400/ </del> &nbsp; ₹699/- )</p>
                            </div>
                            <div className='text-end'>
                                <Button variant=" " className="btn btn-outline-light mb-3" onClick={() => handleClick('Salaried')}> Get Start </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card" onClick={() => handleClick('Non Salaried')} style={{ cursor: "pointer" }}>
                        <div className="card-body">
                            <div>
                                <h1 className='text-primary'>Non Salaried</h1>
                                <p className='text-muted fs-6 mt-3 mb-5'>Where employees are compensated based on factors such as hours worked, output, or commission.</p>
                                <h5>AT RS. 799/- ONLY</h5>
                                <p >(50 % DISCOUNT <del>₹1600/ </del> &nbsp; ₹799/- )</p>
                            </div>
                            <div className='text-end'>
                                <Button variant=" " className="btn btn-outline-primary mb-3" onClick={() => handleClick('Non Salaried')}> Get Start </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeroModal show={show} handleClose={handleClose} cardType={iscardType} />
        </>
    );
};

export default Cards;
