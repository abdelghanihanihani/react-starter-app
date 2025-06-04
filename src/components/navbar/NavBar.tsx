import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {NAVBAR_CONSTANTS} from "../../assets/constants";

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState(i18n.language);
    useEffect(() => {
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);
    const changeLanguage = () => {
        if (lang === 'ar') {
            i18n.changeLanguage('en')
            setLang('en')
        }
        if (lang === 'en') {
            i18n.changeLanguage('ar');
            setLang('ar')

        }
    };
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    {/* Left side - App Logo */}
                    <div className="flex items-center">
                        <span className="ml-3 text-xl font-semibold text-gray-800">YourApp</span>
                    </div>

                    {/* Right side - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600 transition duration-300"
                            onClick={() => changeLanguage()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            {lang === 'ar' ? NAVBAR_CONSTANTS.EN : NAVBAR_CONSTANTS.AR}
                        </button>

                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
                            {t(NAVBAR_CONSTANTS.CONTACT)}
                        </button>
                    </div>

                    {/* Hamburger menu button (mobile) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu - This would typically be controlled by JS but included as static HTML as requested */}
                <div className="hidden md:hidden mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-col space-y-3">
                        <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            EN
                        </button>

                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                            {t(NAVBAR_CONSTANTS.CONTACT)}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;