import React from 'react'
import { faEnvelope,faPhone,faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ContactCard(props) {
 const {bgColor,mailOne,mailTwo,cardStyle,fontColor} = props;
 let cardIcon;

 if(cardStyle===1){
    cardIcon = faPhone
 }else if(cardStyle===2){
    cardIcon= faLocation
 }else{
    cardIcon = faEnvelope
 }

  return (
    <div className={` px-[40px] py-[40px] md:py-[80px] bg-${bgColor} flex flex-col justify-center text-center text-${fontColor} gap-[15px]` }>
       <FontAwesomeIcon icon={cardIcon} color='#23A6F0' size='3x'/>
       <p className='font-["Montserrat"] font-[700] text-[9px] md:text-[14px] text-center'>{mailOne}</p>
       <p className='font-["Montserrat"] font-[700] text-[9px] md:text-[14px] text-center'>{mailTwo}</p>

       <p className='font-["Montserrat"] font-[700] text-[16px]'>Get Support</p>
       <button className='rounded-full bg-transparent text-center text-light-blue border-1 border-light-blue py-[15px] md:py-[12px] px-[36px] md:px-[20px] font-["Montserrat"] text-[10px] md:text-[14px] font-[700]'>Submit Request</button>
       
    </div>
  )
}

export default ContactCard