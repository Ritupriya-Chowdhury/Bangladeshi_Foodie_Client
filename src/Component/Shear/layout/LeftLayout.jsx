// This is the news section of Home page
import React from 'react';
import seraRadhuni from '../../Image/ds-23--11-07-2021.jpg'
import sornoChef from '../../Image/shorno-chef.avif';
const LeftLayout = () => {
    return (
        <div className='md:w-1/5 ml-2 my-8 md:my-4'>
            <p className='text-center text-xl font-bold text-orange-500 '>
                Cooking Competition News
            </p>
            <div className='border border-black my-2'>

                <img src={seraRadhuni} alt="" className='pt-4 px-2' />
                <p className='text-lg ml-6 text-orange-400 mb-2 mt-2 font-semibold'>Shera Radhuni 1427 </p>
                <p className='p-2 text-'>Sera Radhuni 1427 Winner: Sadia Taher  from Chattogram.</p>
                <p className='p-2'>First Runner up: Nadia Natasa of Khulna from Dhaka.</p>
                <p className='p-2'>Second Runner up: Mariam Hossain Nupur from Dhaka.</p>
            </div>
            <div className='border border-black my-2'>
               <img src={sornoChef} alt="" className='pt-4 px-2' />
               <p className='text-lg ml-6 text-orange-400 mb-2 mt-2 font-semibold'>Sorno Chef 2022</p>
               <p className='p-2'>The Shorno Chef programme features adolescent chefs aged between 12 and 17 who compete in a different cooking challenge each week. At the end of each episode, their dishes are assessed for both nutritional value and taste by a panel of judges, which includes a professional chef and a nutritionist.</p>
               <p className='p-2'>The programme also encourages healthier cooking fuels such as electricity or cooking gas instead of firewood. In Bangladesh, exposure to cooking smoke at home is a health concern, particularly for children and adolescents.</p>
            </div>
        </div>
    );
};

export default LeftLayout;