

export const animationCard = {
       hidden: {
       opacity: 0,
       scale: 0
       },
       visible: {
           opacity: 1,
           scale: 1,
           transition: {
               duration: 0.6
           }
       },
       leave: {
           x: '100%',
           opacity: 0,
           transition: {
               ease: 'easeOut',
               duration: 0.63
           }
       }
   }

   export const animateList = {
       hidden: {
           opacity: 0,
           transition: {
               duration: 0.70
           }
       },
       visible: {
           opacity: 1,
           transition: {
               duration: 0.70
           }
       }
   }

   export const animModal = {
       hidden: {
           y: '100%',
           transition: {
               duration: 0.5,
               ease: 'easeIn'
           }
       },
       visible: {
           y: '0',
           transition: {
               duration: 0.65,
               ease: 'easeIn'
           }
       }
   }