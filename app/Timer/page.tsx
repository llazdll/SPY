"use client"
import React, { useEffect, useState } from 'react';
import { RootState } from '../Store/store';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import image3 from '@/image/Designer.png'
import Image from 'next/image';

function Timer() {
    const spyCount = useSelector((state: RootState) => state.form.spy);
    const [isRunning, setIsRunning] = useState(true);
    const time = useSelector((state: RootState) => state.form.time);
    const seconds = time * 60
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null;

        if (isRunning && timeLeft > 0) {
            timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        // Clear the interval on cleanup  
        return () => {
            if (timerId) clearInterval(timerId);
        };
    }, [isRunning, timeLeft]);

    const toggleCountdown = () => {
        setIsRunning((prevState) => !prevState);
    };

    function winsHandler() {
        let point
        const SolidPoint = Math.floor((timeLeft / seconds) * 100)
        if (spyCount > 1) {
            point = Math.floor(SolidPoint * 1.2)
        }
        else { point = SolidPoint }
        console.log(point);

        if (point > 100) {
            window.alert(`wowwww   ||||    points:${point}. they make u cry`)
        }
        window.alert(`Time Left: ${timeLeft}s    ||||    points:${point}`)
        setIsRunning(false)
    }
    return (
        <div >
            <h1 className='text-2xl font-bold'>Timer :</h1>
            <div className={`py-10 text-6xl text-center font-bold ${timeLeft > 0 ? '' : 'text-red-500'}`}>
                <Image src={image3} alt='timer' style={{ zIndex: -1000 }} layout='fill' objectFit="cover" className='blur-sm dark:opacity-10 opacity-35 select-none dark:bg-black bg-white' />
                {timeLeft > 0 ? timeLeft : 'Time is up!'}
            </div>
            <div className='flex justify-evenly py-40'>
                <Button onClick={winsHandler}>
                    <Link href="/">
                        City Wins
                    </Link>
                </Button>
                <Button onClick={winsHandler}>
                    <Link href="/">
                        spy Wins
                    </Link>
                </Button>
            </div>
            <div className="mt-20 flex justify-center">
                <Button onClick={toggleCountdown}>
                    {isRunning ? 'Pause' : 'Resume'}
                </Button>
            </div>
        </div>
    );

}

export default Timer