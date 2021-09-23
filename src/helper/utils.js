
//platfrom images

import PSLOGO from '../assets/platform_images/PSLOGO.png'
import PCLOGO from '../assets/platform_images/PCLOGO.png'
import NINTENDOLOGO from '../assets/platform_images/NINLOGO.png'
import SEGALOGO from '../assets/platform_images/SEGALOGO.png'
import ATARILOGO from '../assets/platform_images/ATLOGO.png'
import XBOXLOGO from '../assets/platform_images/XBLOGO.png'
import IOSLOGO from '../assets/platform_images/IOSLOGO.png'
import ANDROIDLOGO from '../assets/platform_images/ANDROIDLOGO.png'
import JAGUARLOGO from '../assets/platform_images/JAGUARLOGO.png'
import MACINTOSHLOGO from '../assets/platform_images/MACINTOSHLOGO.png'
import NEOGEOLOGO from '../assets/platform_images/NEOGEO.png'
import NESLOGO from '../assets/platform_images/NESLOGO.png'
import SNESLOGO from '../assets/platform_images/SNESLOGO.png'
import WIILOGO from '../assets/platform_images/WIILOGO.png'
import THREEDOLOGO from '../assets/platform_images/3DOLOGO.png'
import APPLE2LOGO from '../assets/platform_images/APPLE2LOGO.png'
import COMAMIGALOGO from '../assets/platform_images/COMAMIGALOGO.png'
import DREAMCASTLOGO from '../assets/platform_images/DREAMCASTLOGO.png'
import GAMEBOYLOGO from '../assets/platform_images/GAMEBOYLOGO.png'
import GAMEGEAR from '../assets/platform_images/GAMEGEAR.png'
import GENESISLOGO from '../assets/platform_images/GENESISLOGO.png'
import GAMECUBE from '../assets/platform_images/GAMECUBELOGO.png'
import WEBLOGO from '../assets/platform_images/WEBLOGO.png'
import MACOSLOGO from '../assets/platform_images/MACOSLOGO.png'
import LINUXLOGO from '../assets/platform_images/LINUXLOGO.png'


// default image

import NOIMAGE from '../assets/platform_images/NOIMAGE.png'


// stores images
import APPSTORELOGO from '../assets/storefront_images/APPSTORELOGO.png'
import EPICGAMESLOGO from '../assets/storefront_images/EPICGAMESLOGO.png'
import GOGLOGO from '../assets/storefront_images/GOGLOGO.png'
import GOOGLEPLAY from '../assets/storefront_images/GOOGLEPLAY.png'
import ITCHLOGO from '../assets/storefront_images/ITCHLOGO.svg'
import STEAMLOGO from '../assets/storefront_images/STEAMLOGO.png'

// esrb_rating images
import MATURE from '../assets/rating_images/Mature.png'
import TEEN from '../assets/rating_images/Teen.png'
import EVERYONE from '../assets/rating_images/Everyone.png'

//star rating images
import FULLSTAR from '../assets/rating_images/full-star.svg'
import EMPTYSTAR from '../assets/rating_images/empty-star.svg'


// api url and key
export const base_url = `https://api.rawg.io/api/`
export const api_key = `${process.env.REACT_APP_DISCOVERY}`


// function for scrolling to top

export const scrollToTop = () => {
    return window.scrollTo({
        top: 100,
        behavior: 'smooth'
    })
}

export const scrollToContainer = (e) => {
   const getContainerOffset = document.querySelector(`.${e.target.value}`).offsetTop
   window.scrollTo({
     top: getContainerOffset - 100,
     behavior: 'smooth'
   })
 }


// function for displaying platform/store image

export const platformImage = (name) => {
     if (name.startsWith('PlayStation') || name.startsWith('PS Vita') || name.startsWith('PSP')) {
         return PSLOGO
     } else if (name.startsWith('PC')) {
         return PCLOGO
     } else if (name.startsWith('Xbox')) {
         return XBOXLOGO
     } else if (name.startsWith('Nintendo')) {
         return NINTENDOLOGO
     } else if (name.startsWith('iOS')) {
         return IOSLOGO
     } else if (name.startsWith('Android')) {
         return ANDROIDLOGO
     } else if (name.startsWith('SEGA')) {
         return SEGALOGO
     } else if (name.startsWith('Atari')) {
         return ATARILOGO
     } else if (name.startsWith('Genesis')) {
         return GENESISLOGO
     } else if (name.startsWith('Dreamcast')) {
         return DREAMCASTLOGO 
     } else if (name.startsWith('3DO')) {
         return THREEDOLOGO
     } else if (name.startsWith('Jaguar')) {
         return JAGUARLOGO
     } else if (name.startsWith('Game Gear')) {
         return GAMEGEAR
     } else if (name.startsWith('Commodore / Amiga')) {
         return COMAMIGALOGO
     } else if (name.startsWith('Apple II')) {
         return APPLE2LOGO
     } else if (name.startsWith('Classic Macintosh')) {
         return MACINTOSHLOGO
     } else if (name.startsWith('Neo Geo')) {
         return NEOGEOLOGO
     } else if (name.startsWith('NES')) {
         return NESLOGO
     } else if (name.startsWith('SNES')) {
         return SNESLOGO
     } else if (name.startsWith('Game Boy')) {
         return GAMEBOYLOGO
     } else if (name.startsWith('GameCube')) {
         return GAMECUBE
     } else if (name.startsWith('Wii')) {
         return WIILOGO
     } else if (name.startsWith('Web')) {
         return WEBLOGO
     } else if (name.startsWith('macOS')) {
         return MACOSLOGO
     } else if (name.startsWith('Linux')) {
         return LINUXLOGO
     } else if (name.startsWith('itch')) {
         return ITCHLOGO
     } else if (name.startsWith('Steam')) {
         return STEAMLOGO
     } else if (name.startsWith('Google Play')) {
         return GOOGLEPLAY
     } else if (name.startsWith('Epic Games')) {
         return EPICGAMESLOGO
     } else if (name.startsWith('App Store')) {
         return APPSTORELOGO
     } else if (name.startsWith('GOG')) {
         return GOGLOGO
     }
     else {
       return NOIMAGE
     }
   }


    // function for displaying esrb_rating image
   export const EsrbRating = (name) => {
       if (name === 'Rating Pending') return
       switch(name) {
           case 'Adults Only':
               return MATURE
               case 'Mature':
                   return MATURE
               case 'Everyone':
                   return EVERYONE
                   case 'Everyone 10+':
                       return EVERYONE
                   case 'Teen':
                       return TEEN
       }
   }

   // function for resizing image

   export const resizeImage = (image) => {
    //    if (btnName === 'creators' || btnName === 'platforms' || btnName === 'stores') return
       if (!image) return 
       return image.replace('media.rawg.io/media', 'media.rawg.io/media/crop/600/400')
   }



   // function for displaying stars based on game/creator rating

   export const starRating = (rating) => {
       const roundedRating = parseInt(Math.floor(rating))
       if (roundedRating === 1) {
           return (
           <>
           <img src={FULLSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           </>
           )
       } else if (roundedRating === 2) {
           return (
           <>
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           </>
           )
       } else if (roundedRating === 3) {
           return (
           <>
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           </>
           )
       } else if (roundedRating === 4) {
           return (
           <>
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={EMPTYSTAR} alt='star' />
           </>
           )
       }
       else {
           return (
           <>
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           <img src={FULLSTAR} alt='star' />
           </>
           )
       }
   }



   
   export const removePtag = (text) => {
       let formatedText = text
     formatedText = formatedText.replace('<p>', "")
     formatedText = formatedText.replace('</p>', "")
     return formatedText
   }



   export const exitModal = (e, push, id) => {
      if (e.target.classList.contains('dark-bg')) {
            push.push(`${id}`)
            document.body.style.overflow = 'auto'
      }
   }


   export const checkMetacritic = (gameObj) => {
        const {metacritic} = gameObj
        if (metacritic < 72) {
            return 'var(--metacritic-outline-orange)'
        } else if (metacritic < 50) {
            return 'var(--metacritic-outline-red)'
        }
        else {
            return 'var(--metacritic-outline-green)'
        }
    }

    export const showClickEvent = (e) => {
        if (e.target.classList.contains('dark-bg')) {
            e.target.style.cursor = 'pointer'
        }
        else {
            e.target.style.cursor = 'auto'
        }
    }



