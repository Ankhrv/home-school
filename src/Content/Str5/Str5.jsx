import React, { useState } from "react"
import a from './Str5.module.css';
import { Helmet } from 'react-helmet';
import { SimpleModal6 } from "../../SimpleModal6/SimpleModal6";
import Nachat from '../../Components/Nachat/nachat';
import b from '../../Components/Menu/Menu.module.css';




const Str5 = () => {

    const [modalInfoIsOpen6, setModalInfoOpen6] = useState(false);

    return (
<div className={a.A1}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>
<div className={a.A}>
        <div className={a.a}>
       <div className={a.fon}>
           
            <div className={a.div1}>

            <div className={a.divleft}>
            <div className={a.divleft1}>
                <a className={a.divleft11}>Удобная платформа</a>
                <a>для видео-уроков</a> 
                </div>
                <div className={a.divleft111}>

                <div className={a.divleft112}>Для обучения не нужны сторонние приложения: мы собрали все чаты, записи уроков, домашние задания и учебные достижения в одном месте. Платформа со встроенным видеочатом и онлайн-доской для вашего комфорта.</div>
                </div>
            <div className={a.divleft6} onClick={() => setModalInfoOpen6(true)}>Записаться бесплатно</div>
            </div>
            <div className={a.divleft0}>
            <div className={a.Textt}> 


<div className={a.Text}>
<a className={a.Text1}>Удобная платформа</a>
<a className={a.Text2}>для видео-уроков </a>
</div>
</div>
          
                <div className={a.divleft111}>

<div className={a.divleft112}>Для обучения не нужны сторонние приложения: мы собрали все чаты, записи уроков, домашние задания и учебные достижения в одном месте. Платформа со встроенным видеочатом и онлайн-доской для вашего комфорта.</div>
</div>
            <div className={a.divleft6} onClick={() => setModalInfoOpen6(true)}>Записаться бесплатно</div>
            </div>

            <div className={a.divrighttt}>
            <div className={a.divright}></div>

            </div></div>
           
            <div className={b.smenu}>
        <SimpleModal6
          isOpen={modalInfoIsOpen6}
          onClose={() => setModalInfoOpen6(false)}>
          <Nachat/>
        </SimpleModal6> 
        </div>
        
        </div></div>
        </div></div>
        

        );
}

export default Str5;