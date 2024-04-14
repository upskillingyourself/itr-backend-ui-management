import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import HeroModal from '../../components/Modals/HeroModal';

const Cards = () => {
    const [show, setShow] = useState(false);
    const [iscardType, setIsCardType] = useState('');
    // console.log(iscardType);

    const handleClose = () => setShow(false);
    const handleShow = (type) => {
        setIsCardType(type);
        setShow(true);
    };

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{ background: "linear-gradient(to bottom, #4e8cff, #0052d4)", color: "#fff" }}>
                        <div className="card-body" style={{ background: "linear-gradient(to bottom, #4e8cff, #0052d4)" }}>
                            <div>
                                <h1 className=''>Salaried</h1>
                                <p className='fs-6 mt-3 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <h5>AT RS. 699/- ONLY</h5>
                                <p title="">(50 % DISCOUNT RS. 1400/-)</p>
                            </div>
                            <div className='text-end'>
                                <Button variant=" " className="btn btn-outline-light mb-3" onClick={() => handleShow('Salaried')}> Get Start </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <h1 className='text-primary'>Non Salaried</h1>
                                <p className='text-muted fs-6 mt-3 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <h5>AT RS. 799/- ONLY</h5>
                                <p >(50 % DISCOUNT RS. 1600/-)</p>
                            </div>
                            <div className='text-end'>
                                <Button variant=" " className="btn btn-outline-primary mb-3" onClick={() => handleShow('Non Salaried')}> Get Start </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeroModal show={show} handleClose={handleClose} cardType={iscardType} />
        </>
    )
}

export default Cards
