

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
           opacity: 0,
           scale: 0,
           transition: {
               duration: 0.6
           }
       }
   }

   export const animateList = {
       hidden: {
           opacity: 0,
       },
       visible: {
           opacity: 1,
           transition: {
               duration: 0.70
           }
       }
   }