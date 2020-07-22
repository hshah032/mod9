import React, { Component } from "react";
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Translator, Translate} from 'react-auto-translate';

// function HeaderComponent()
// {
//     const {t, i18n} = useTranslation('common');
// //   <div class="container">
// //     <br />
// //      <h2> Community Guidelines</h2>
// //      <br />
// //      <p>
// // Please take care 
// // to be respectful of all members of our community and follow basic ettiquette when posting a comment. Any comment found to be in violation of these rules will be taken down. Thank you. </p>
// // </div> 
//     return <h1>{t('welcome.title')}</h1>
// }



class community extends Component {
    render() {
        return (
            <Translator
    //   cacheProvider={cacheProvider}
      from='en'
      to='es'
      googleApiKey='API_KEY'
    >
 <div class="container">
    <h2><Translate>
     Community Guidelines
      </Translate></h2>
   
    <br />
    <p>
    <Translate>
    To post a comment enter a <strong>valid email address, your name, and a comment about your thoughts. </strong>
    Please take care 
 to be respectful of all members of our community and follow basic ettiquette when posting a comment. Any comment found to be in violation of these rules will be taken down. Thank you. 
    </Translate>
 </p>
 </div>
  </Translator>
  


           
        
        );
    }
}

export default community;

{/* <div class="container">
//     <br />
//      <h2> Community Guidelines</h2>
//      <br />
//      <p>
// Please take care 
// to be respectful of all members of our community and follow basic ettiquette when posting a comment. Any comment found to be in violation of these rules will be taken down. Thank you. </p>
// </div>  */}