import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyright from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
//importar la funcion para
import { changeLanguage } from './components/englishPage.js';


changeLanguage(); 

parallax();

activeMenu();

resetToHome();

updateCopyright();

sendEmail();
