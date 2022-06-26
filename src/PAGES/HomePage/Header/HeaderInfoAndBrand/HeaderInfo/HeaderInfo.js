import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaUser } from 'react-icons/fa';
import { RiArrowUpSFill, RiArrowDownSLine } from 'react-icons/ri';
import { MdLocationPin } from 'react-icons/md';
import './HeaderInfo.css';

const HeaderInfo = () => {
    return (
        <div className='border-b-[1px]'>
            <div className='container mx-auto flex justify-between py-3 mt-[-3px] text-[#555a5b] font-normal'>
                <div className='flex'>
                    <div className='flex text-red-500 text-sm mt-2'>
                        <span className='mr-5'><a rel="noreferrer" href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a></span>
                        <span className='mr-5'><a rel="noreferrer" href="https://www.twitter.com/" target="_blank"><FaTwitter /></a></span>
                        <span className='mr-5'><a rel="noreferrer" href="https://www.instagram.com/" target="_blank"><FaInstagram /></a></span>
                        <span className='mr-5'><a rel="noreferrer" href="https://www.youtube.com/" target="_blank"><FaYoutube /></a></span>
                    </div>
                    <p><small><span className='mr-5'>|</span>Welcome you to <strong>Sayaka</strong> store!</small></p>
                </div>
                <div className='flex text-[13px] mt-1'>
                    <a className='text-red-500' rel="noreferrer" href="https://www.youtube.com/" target="_blank"><span className='flex'><MdLocationPin className='mt-1 mr-1' />Store Location</span></a>
                    <span className='mx-5'>|</span>
                    <a className='hover:text-red-500' rel="noreferrer" href="https://www.youtube.com/" target="_blank"><span className='flex'><FaUser className='mt-1 mr-1' />My Account</span></a>
                    <span className='mx-5'>|</span>
                    <div className='hover:text-red-500'><span className='flex'>
                        {/* dropdown menu */}
                        <div class="dropdown relative inline-block">
                            <span className='flex'>USD <RiArrowDownSLine className='mt-1 ml-1' /> </span>
                            <div class="dropdown-content hidden absolute bg-white min-w-[140px] shadow-[0_8px_16px_0px_rgba(0,0,0,0.2)] px-[12px] py-[16px] cursor-pointer ml-[-48px]">
                                <div className='flex justify-center items-center border-t-4 border-t-red-500 w-[140px] ml-[-12px] mr-[-12px] mt-[-4px]'><RiArrowUpSFill className='text-2xl mt-[-17px]' /></div>
                                <p className='hover:text-red-400 py-1'>BD - taka</p>
                                <p className='hover:text-red-400 py-1'>USA - dollar</p>
                                <p className='hover:text-red-400 py-1'>EUR - euro</p>
                                <p className='hover:text-red-400 py-1'>IND - rupee</p>
                            </div>
                        </div>
                    </span></div>
                    <span className='mx-5'>|</span>
                    <div className='hover:text-red-500'><span className='flex'>
                        {/* dropdown menu */}
                        <div class="dropdown relative inline-block">
                            <span className='flex'>English <RiArrowDownSLine className='mt-1 ml-1' /> </span>
                            <div class="dropdown-content hidden absolute bg-white min-w-[140px] shadow-[0_8px_16px_0px_rgba(0,0,0,0.2)] px-[12px] py-[16px] cursor-pointer ml-[-48px]">
                                <div className='flex justify-center items-center border-t-4 border-t-red-500 w-[140px] ml-[-12px] mr-[-12px] mt-[-4px]'><RiArrowUpSFill className='text-2xl mt-[-17px]' /></div>
                                <p className='hover:text-red-400 py-1'>বাংলা - Bengali</p>
                                <p className='hover:text-red-400 py-1'>عربي - Arabic</p>
                                <p className='hover:text-red-400 py-1'>اردو - Urdu</p>
                                <p className='hover:text-red-400 py-1'>हिन्दी - Hindi</p>
                                <p className='hover:text-red-400 py-1'>Deutschland - Germany</p>
                                <p className='hover:text-red-400 py-1'>中国 - Chinese</p>
                            </div>
                        </div>
                    </span></div>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;