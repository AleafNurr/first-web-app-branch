import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);
    const maskTransitions = useTransition(showMenu, {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                        })
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    let menu;
    let menuMask;
    // Conditional rendering
    // if(showMenu){
    //     menu = (
    //         <div
    //             className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    //         >
    //             The Menu
    //         </div>
    //     )
    //     menuMask = (
    //         <div
    //             className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
    //             onClick={() => setShowMenu(false)}
    //         >

    //         </div>
    //     )
    // }

    return(
        <nav>
            <span className='text-xl left-10'>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick = {() => setShowMenu(!showMenu) }
                />
            </span>

            {/* { menuMask }

            { menu } */}
            
            {
                maskTransitions(
                    (styles, item) => 
                        item && <animated.div 
                            style={styles}
                            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                            onClick={() => setShowMenu(false)}
                        >
                            ✌️ This is the menu ✌️
                        </animated.div>
                  )
            }
            {
                menuTransitions(
                    (styles, item) => 
                        item && <animated.div 
                            style={styles}
                            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                        >
                            <span className='font-bold'>✌️ This is the menu ✌️</span>
                            <ul>
                                <li> Home </li>
                                <li> About </li>
                            </ul>
                        </animated.div>
                  )
            }
        </nav>
    );
}

export default Navigation;