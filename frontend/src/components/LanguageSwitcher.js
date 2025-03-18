import React, { useEffect } from 'react'

const LanguageSwitcher = () => {
  useEffect(() => {
    // Check if Google Translate is already initialized
    if (window.google && window.google.translate) {
      console.log('Google Translate already loaded.')
      // Automatically set the language based on the user's browser language
      const browserLanguage = navigator.language || navigator.userLanguage
      const pageLanguage = browserLanguage.split('-')[0] // Get 'en' or 'fr'
      window.googleTranslateElementInit(pageLanguage)
    } else {
      // Define googleTranslateElementInit if it's not already defined
      window.googleTranslateElementInit = (language) => {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: language,
              includedLanguages: 'en,fr', // Add more languages if needed
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false, // Don't display the UI by default
            },
            'google_translate_element'
          )
        } catch (error) {
          console.error('Error initializing Google Translate:', error)
        }
      }

      // Dynamically load the Google Translate script
      const script = document.createElement('script')
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.onload = () => {
        console.log('Google Translate script loaded successfully.')
        try {
          const browserLanguage = navigator.language || navigator.userLanguage
          const pageLanguage = browserLanguage.split('-')[0]
          window.googleTranslateElementInit(pageLanguage) // Call after script is loaded
        } catch (error) {
          console.error('Error calling googleTranslateElementInit:', error)
        }
      }
      script.onerror = (error) => {
        console.error('Error loading the Google Translate script:', error)
      }
      document.body.appendChild(script)
    }
  }, []) // Empty dependency array so this only runs once when the component mounts

  return null // Do not render anything in the UI
}

export default LanguageSwitcher
