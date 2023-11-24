import React from 'react'
import { faWhatsapp, faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const EmployeeCard = ({ name, linkedin, instagram, twitter, phone, facebook, profile_picture, Role, id }) => {
    const handleClickUser = async (e) => {
        route(`/user/${id}`)
    }
  return (
    <div className="employee-card cursor-pointer">
        <div className="employee-card-img relative flex justify-center items-baseline">
            <Link href={route('getUser', {id: id})}>
                    <img src={profile_picture} alt={name} className='object-contain' />
            </Link>
            <div className="employee-card-overlay absolute mt-auto bottom-0 py-8 px-4 h-4 bg-black bg-opacity-50 flex rounded-t-lg flex-col justify-center items-center">
            <div className="icon flex justify-center items-center text-white text-center">
                    {
                        phone && 
                        <div className="whatsapp" target="_blank">
                            <a href={"tel:"+phone} >
                                <FontAwesomeIcon width={50} icon={faPhone} />
                            </a>
                        </div>
                    }
                    {facebook &&
                        <div className="facebook" target="_blank">
                            <a href={facebook}>
                                <FontAwesomeIcon width={50} icon={faFacebook} />
                            </a>
                        </div>
                    }
                    {instagram &&
                        <div className="instagram" target="_blank">
                            <a href={instagram}>
                                <FontAwesomeIcon width={50} icon={faInstagram} />
                            </a>
                        </div>
                    }
                    {twitter &&
                        <div className="twitter" target="_blank">
                            <a href={twitter}>
                                <FontAwesomeIcon width={50} icon={faTwitter} />
                            </a>
                        </div>
                    }
                    {linkedin &&
                        <div className="linkedin">
                            <a href={linkedin} target="_blank">
                                <FontAwesomeIcon width={50} icon={faLinkedin} />
                            </a>
                        </div>
                    }
            </div>
                
            </div>
            
        </div>
        <div className="employee-card-overlay-content text-black text-center">
                    <h3 className="employee-card-overlay-content-name text-2xl font-bold">{name}</h3>
                    <p className="employee-card-overlay-content-position text-sm">{Role}</p>
                </div>
    </div>
  )
}

export default EmployeeCard;