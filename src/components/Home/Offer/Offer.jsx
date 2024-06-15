

import React from 'react';

const Offer = () => {
    return (
        <div className=' mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 '  >
            <div className="card bg-orange-200 ">
                <div className="card-body">
                    <h2 className="card-title">30% OFF!</h2>
                    <p>on your next purchase use by june 2024</p>
                    <div className="card-actions justify-end">
                       <h3>NEW30  <br />
                       Coupon Code </h3>


                    </div>
                </div>
            </div>
            <div className="card bg-red-300 text-white-content">
                <div className="card-body">
                    <h2 className="card-title">50% OFF!</h2>
                    <p>on your next purchase use by june 2024</p>
                    <div className="card-actions justify-end">
                       <h3>Couple 50  <br />
                       Coupon Code </h3>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Offer;