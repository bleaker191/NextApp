'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tooltip } from 'react-tooltip';
import { IconButton } from '@material-tailwind/react';
import { ThemeContext } from '../../theme-context';

const MainNav = () => {

    const router = useRouter();
    const { color, setColor, mode, setMode } = useContext(ThemeContext);
    const [showMenu, setShowMenu] = useState(false);
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);

        if (isDark) {
            setColor("light");
        }
        else {
            setColor("dark")
        }
    }

    return (
        <div className='flex h-50 shrink-0 items-end bg-bgPrimary p-4'>
            <Link
                className='flex items-end justify-start items-center p-4'
                href='/home' key="homeLink">
                <Image
                    src='/globe.svg'
                    width={28}
                    height={28}
                    className='fill-black stroke-black'
                    alt='Home Logo'
                />
            </Link>
            <div className='flex grow items-center justify-start space-x-1 md:flex-row md:space-x-0 md:space-y-1'>
                <div className='hidden h-auto w-40 grow md:inline'></div>
                <div className='flex flex-row md:space-x-4 md:flex-none md:justify-start md:p-2 md:px-3'>
                    <Tooltip id='theme-tooltip' />
                    <button onClick={toggleTheme} className='flex h-[28px] items-center justify-center rounded-full bg-bgPrimary hover:border-bgHover hover:border-2 border-secondary md:flex-none md:justify-start'>
                        {isDark ?
                            <a
                                data-tooltip-id='theme-tooltip'
                                data-tooltip-content="Click for light mode"
                                data-tooltip-place='top'
                            >
                                <Image
                                    src='/SunIcon.svg'
                                    width={24}
                                    height={24}
                                    alt='Sun'
                                />
                            </a>
                            :
                            <a
                                data-tooltip-id='theme-tooltip'
                                data-tooltip-content="Click for dark mode"
                                data-tooltip-place='top'
                            >
                                <Image
                                    src='/MoonIcon.svg'
                                    width={24}
                                    height={24}
                                    alt='Moon'
                                />
                            </a>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainNav;
