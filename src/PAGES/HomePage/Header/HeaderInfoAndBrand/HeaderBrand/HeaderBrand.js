import React from 'react';
import LOGO from '../../../../../assets/logo/sAyaKA.png';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { FaOpencart, FaRegHeart } from 'react-icons/fa';
import { CgSearch } from 'react-icons/cg';

const HeaderBrand = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-6'>
            <div>
                <img className='w-52 ' src={LOGO} alt="SAYAKA" />
            </div>
            <div className='flex'>
                <input className='border-2 border-r-0 w-[500px] h-[45px] rounded-l-lg focus:outline-none text-base px-5 font-light' placeholder='Search Here...' type="search" name="search" id="search" />
                <button className='bg-red-500 w-[60px] h-[45px] flex justify-center items-center rounded-r-lg text-2xl text-white' type="submit"><CgSearch /></button>
            </div>
            <div className='flex justify-end gap-5 text-2xl'>
                <MdOutlineCompareArrows title='Compare' className='hover:text-red-500 cursor-pointer' />
                <FaRegHeart title='Wishlist' className='hover:text-red-500 cursor-pointer' />
                <div className='relative'>
                    <FaOpencart title='Your Cart' className='hover:text-red-500 cursor-pointer' />
                    <div className="w-5 h-5 bg-red-500 text-white flex justify-center items-center text-base rounded-full absolute top-2 left-4">0</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBrand;