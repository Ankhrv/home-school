import o from './Kabped.module.css';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import React, { useState } from "react";
// import a from './Footer.module.css';
// import Signin from '../signin/signin';
// import Register from '../signin/registr';
import emailjs from '@emailjs/browser';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../Components/BesplZan/BezplZan.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import 'react-phone-number-input/style.css';
import s from '../../../Components/BesplZan/M.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import PDF1 from "../../../PDF/Privacy.pdf";
import PDF2 from "../../../PDF/PolzSogl.pdf";
import PDF3 from "../../../PDF/Privacydata.pdf";

const Kabped = () => {
  const navigate = useNavigate()

 const [value, setValue] = useState()

 const form = useRef();

 const [buttonText, setButtonText] = useState("Отправить сообщение");

 const sendEmail  = (e)  => {

   e.preventDefault();
   // setButtonText("загрузка...");
   setButtonText("Отправка");
   emailjs.sendForm('service_hmoh4pe','template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
   .then((result) => {
     setButtonText("Отправлено");
     console.log(result.text);
     e.target.reset();
     // navigate('/');
 }, (error) => {
     console.log(error.text);
     setButtonText("Ошибка отправки");
 });}

   return (

<div className={o.A14}>
<Helmet>
       <title>Кабинет педагога</title>
       <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
     </Helmet>

       <div className={o.A4}>
    
       <div className={o.navi}>
         <span className={o.navi2}>Главная</span><span className={o.navi3}>&gt;</span><span className={o.navi4}>Кабинет педагога</span></div> 

       <div className={o.a4}>


       <div className={s.GL}>
       
<div className='zagO2'>Вы можете задать мне вопрос</div>
<div className={s.ui}>Я отвечу Вам в ближайшее время</div>
      <form ref={form} onSubmit= {sendEmail} >

      <div className={s.obsh}>

    <input placeholder="Введите ваше имя"className='inpOO2'type="text" title="Разрешено использовать только пробелы и русские буквы"
    pattern="^[А-Яа-яЁё\s]+$" maxLength={10} name="us_name" required 
    />

<div className={s.i}>

   <input  placeholder="Введите вашу почту"className='inpOO'pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" type="email" name="email" maxLength={25} required 
  />

<textarea className='inpOO3' maxLength={500} placeholder="Ваш вопрос или сообщение" name="message"></textarea>




     <div className={s.Tt}>
     <p className={s.R}>Заполняя эту форму, вы подтверждаете, что ознакомились с <a href={PDF1} target="_blank" rel="noreferrer" className={s.spanN}>политикой конфиденциальности</a> и <a href={PDF2} target="_blank" rel="noreferrer" className={s.spanN}>пользовательским соглашением </a>, а также даёте согласие на <a href={PDF3} target="_blank" rel="noreferrer" className={s.spanN}>обработку своих персональных данных</a></p></div>

     <button  className={s.knop} type="submit" value="Перезвоните мне">{buttonText}</button></div>
    </div>
    <div className={s.capcha}>
     <ReCAPTCHA  sitekey={process.env.REACT_APP_SITE_KEY} />
     </div>

   </form>
   
   </div>
       </div>
       </div>
       </div>


       );
}

export default Kabped;