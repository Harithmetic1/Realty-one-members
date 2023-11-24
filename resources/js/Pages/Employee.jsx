import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Components/Navbar';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react'

const Employee = ({ user, auth }) => {
    useEffect(() => {
        console.log(user);
    }, [])
  return (
    <>
    <Head title={user.name} />

    <nav className="nav-bar px-8 p-4 mb-12 flex justify-between items-center">
        <Navbar auth={auth}/>
    </nav>
    <div className='flex flex-col md:flex-row justify-between gap-4 items-center pt-0 p-4'>
        <div className="lhs w-full md:w-[40vw] h-full">
            <div className="user-details flex flex-col gap-3">
                <div className="user-details-img w-full h-fit flex justify-center items-center">
                    <img src={user.profile_picture} alt={user.name} className='w-full object-contain h-[60vh]' />
                </div>
                <div className="user-details-content flex flex-col items-center justify-center">
                    <h2 className="user-details-content-name text-2xl font-bold">{user.name}</h2>
                    <p className="user-details-content-position text-sm">{user.Role}</p>
                </div>
                <div className="help-btns text-white">
                    <div className="message-btn flex flex-col gap-3">
                        <a href={"mailto:" + user.email} className='bg-[#0A1C3E] py-4 px-8 w-full flex gap-2 rounded-lg justify-center items-center'>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} />    
                            </span> Message
                        </a>
                        <a href={"tel:" + user.phone} className='bg-[#E91E62] py-4 px-8 w-full flex gap-2 rounded-lg justify-center items-center'>
                            <span>
                                <FontAwesomeIcon icon={faPhone} />    
                            </span> Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="rhs h-[80vh] flex flex-col justify-start items-start">
            <div className="rhs-container h-7/12 flex flex-col gap-4">
            <div className="header">
                <h1 className='font-bold text-2xl'>
                    About Me
                </h1>
            </div>
            <div className="content">
                <p>
                    {user.bio}
                </p>
            </div>
            <div className="social-links flex gap-2 justify-start ">
            {
                        user.phone && 
                        <div className="whatsapp flex justify-start border-[1px] border-gray-400 p-2 px-4 rounded-md" target='_blank'>
                            <a href={"tel:" + user.phone}>
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        </div>
                    }
                    {user.facebook &&
                        <div className="facebook flex justify-start border-[1px] border-gray-400 p-2 px-4 rounded-md" target='_blank'>
                            <a href={user.facebook}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    }
                    {user.instagram &&
                        <div className="instagram flex justify-start border-[1px] border-gray-400 p-2 px-4 rounded-md" target='_blank'>
                            <a href={user.instagram}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    }
                    {user.twitter &&
                        <div className="twitter flex justify-start border-[1px] border-gray-400 p-2 px-4 rounded-md" target='_blank'>
                            <a href={user.twitter}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    }
                    {user.linkedin &&
                        <div className="linkedin flex justify-start border-[1px] border-gray-400 p-2 px-4 rounded-md">
                            <a href={user.linkedin} target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    }
            </div>
        </div>
        <div className="email border-t-2 mt-16 w-full">
            <p className='flex justify-start pt-4 items-center gap-2 font-bold'>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                {
                    user.email
                }
            </p>
            <p className="division flex justify-start pt-4 items-center gap-2 font-bold">
                <span>
                    <FontAwesomeIcon icon={faBriefcase} />
                </span>
                {
                    user.Department
                }
            </p>
        </div>
        </div>
    </div>
    </>

  )
}

export default Employee;