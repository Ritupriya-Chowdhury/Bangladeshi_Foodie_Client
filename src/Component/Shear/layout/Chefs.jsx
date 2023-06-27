import React from 'react';
import Chef from '../home/Chef';

const Chefs = ({chefs}) => {
    console.log(chefs);
    return (
        <div>
            <p className='text-center text-orange-500 font-semibold text-3xl my-12 border'>Chefs of Bangladesh</p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
            {
                chefs.map(chef=><Chef key={chef.id} chef={chef} ></Chef>

                )
            }
            </div>
        </div>
    );
};

export default Chefs;