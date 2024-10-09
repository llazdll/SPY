"use client";
import { wordList } from '../data';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import PlayerCard from ".";
import { useState, useEffect } from "react";

// Define a type for the wordList objects  
type WordData = {
    id: number;
    word: string;
    hint: string;
};

function SeeYourRole() {
    const [data, setData] = useState<WordData | null>(null);
    const [spyIndices, setSpyIndices] = useState<number[]>([]); // Store indices of spies  
    const names = useSelector((state: RootState) => state.names.names);
    const SpyCount = useSelector((state: RootState) => state.form.spy);
    const max = names.length;

    useEffect(() => {
        // Generate two unique random numbers based on names length  
        const uniqueSpies = new Set<number>();
        while (uniqueSpies.size < SpyCount) {
            const randomNumber = Math.floor(Math.random() * max);
            uniqueSpies.add(randomNumber);
        }
        setSpyIndices(Array.from(uniqueSpies)); // Convert Set to Array  

    }, [max]);
    console.log(spyIndices);
    useEffect(() => {
        // Fetch random word data  
        const randomIndex = Math.floor(Math.random() * wordList.length);
        setData(wordList[randomIndex]);
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <p>to see your role Click on your name</p>
            <ul className='p-6'>
                {names.map((n, index) => {
                    // Determine the role based on the random numbers  
                    const role = spyIndices.includes(index) ? "spy" : "player";
                    return (
                        <li key={index} className="flex justify-between items-center w-full p-4">
                            <PlayerCard name={n} role={role} hint={role === "spy" ? data.hint : data.word} />
                        </li>
                    );
                })}
            </ul>
            <div className="flex justify-between mt-4">
                <Button variant="outline">
                    <Link href='/NamePlayer'>Back</Link>
                </Button>
                <Button variant="outline">
                    <Link href='/Timer'>Start</Link>
                </Button>
            </div>
        </>
    );
}

export default SeeYourRole;