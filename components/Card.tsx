"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementSpy,
  decrementSpy,
  incrementPlayer,
  decrementPlayer,
  incrementTime,
  decrementTime,
} from "@/app/Store/formSlice";
import { RootState } from '@/app/Store/store';
import type { StaticImageData } from 'next/image';

type CardProps = {
  image: StaticImageData;
  imageAlt: string;
  title: "Spy" | "Player" | "Time";
}

function Card({ image, imageAlt, title }: CardProps) {
  const dispatch = useDispatch();
  const spy = useSelector((state: RootState) => state.form.spy);
  const player = useSelector((state: RootState) => state.form.player);
  const time = useSelector((state: RootState) => state.form.time);

  let data = 0;
  let increment = () => { };
  let decrement = () => { };
  let isDisabled = true;

  // Set the appropriate values based on the title  
  if (title === "Spy") {
    data = spy;
    increment = () => dispatch(incrementSpy());
    decrement = () => dispatch(decrementSpy());
    isDisabled = spy <= 1; // Disable if spy is less than or equal to 1  
  } else if (title === "Player") {
    data = player;
    increment = () => dispatch(incrementPlayer());
    decrement = () => dispatch(decrementPlayer());
    isDisabled = player <= 3; // Disable if player is less than or equal to 3  
  } else if (title === "Time") {
    data = time;
    increment = () => dispatch(incrementTime());
    decrement = () => dispatch(decrementTime());
    isDisabled = time <= 1; // Disable if time is less than or equal to 1  
  }

  return (
    <div className="relative w-[100%] h-64 bg-cover bg-center rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 mx-auto">
      <div className="image">
        <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" className='blur-sm  opacity-40' />
      </div>
      <div className="absolute inset-0 bg-black opacity-5 dark:bg-white dark:opacity-5"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h2 className='text-left text-4xl font-bold'>{title}</h2>
        <div className="flex items-center gap-3 mt-5">
          <Button className='py-6 border-2 border-black dark:border-[#fafafa80]' variant="secondary" disabled={isDisabled} onClick={decrement}>
            <span className='text-4xl'>-</span>
          </Button>
          <span className='text-2xl font-bold'>{data}</span>
          <Button className='py-6 border-2 border-black dark:border-[#fafafa80]'  variant="secondary" onClick={increment}>
            <span className='text-4xl'>+</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;