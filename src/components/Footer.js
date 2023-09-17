import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    function openIGProfile() {
      const instagramURL = 'https://instagram.com/tinap_hairs?igshid=YTQwZjQ0NmI0OA==';
  
      window.open(instagramURL, '_blank');
    }

  return (
    <div className='text-[#111827] flex flex-col gap-10 items-center px-5'>
        <div className='flex gap-[48px] text-2xl flex-wrap justify-center'>
            <FaFacebookSquare />
            <BsInstagram onClick={openIGProfile} className='cursor-pointer' />
            <BsTwitter  className='cursor-pointer' />
            <BsYoutube />
        </div>

        <ul className='text-[18px] font-[700] flex gap-[48px] flex-wrap justify-center'>
            <li>Conditions of Use</li>
            <li>Privacy & Policy</li>
            <li>Press Room</li>
        </ul>

        <p className='text-[#6B7280] text-center text-[18px] font-[700]'>&copy; {currentYear} MovieBox by <a href='https://instagram.com/tinap_hairs?igshid=YTQwZjQ0NmI0OA==' target='_blank' className='text-gray-900'>Nathan</a> Yinka</p>
    </div>
  )
}

export default Footer