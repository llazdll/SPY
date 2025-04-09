"use client";
import { wordList } from '../data';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import PlayerCard from ".";
import { useState, useEffect } from "react";

type WordData = {
    id: number;
    word: string;
    hint: string;
};

function SeeYourRole() {
    const [data, setData] = useState<WordData | null>(null);
    const [spyIndices, setSpyIndices] = useState<number[]>([]);
    const [counts, setCounts] = useState<number[]>([]); // Track counts per player
    const names = useSelector((state: RootState) => state.names.names);
    const spyCount = useSelector((state: RootState) => state.form.spy);
    const max = names.length;

    useEffect(() => {
        // Initialize counts array with zeros
        setCounts(Array(names.length).fill(0));
        
        // Generate unique spy indices
        const uniqueSpies = new Set<number>();
        while (uniqueSpies.size < spyCount && max > 0) {
            const randomNumber = Math.floor(Math.random() * max);
            uniqueSpies.add(randomNumber);
        }
        setSpyIndices(Array.from(uniqueSpies));
    }, [max, spyCount, names.length]);

    useEffect(() => {
        // Fetch random word data
        if (wordList.length > 0) {
            const randomIndex = Math.floor(Math.random() * wordList.length);
            setData(wordList[randomIndex]);
        }
    }, []);

    const handleClick = (index: number) => {
        setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-xl font-bold mb-4">Click on your name to see your role</h1>
            <ul className='border-2 gap-4 flex flex-col p-4 rounded-lg'>
        {names.map((name, index) => {
          const role = spyIndices.includes(index) ? "spy" : "player";
          return (
            <div key={index} className='flex justify-between items-center p-2 rounded-md border-2 border-slate-300 hover:bg-gray-500'>
              <li className="p-3 border border-black rounded-md flex-grow">
                <PlayerCard 
                  name={name} 
                  role={role} 
                  hint={role === "spy" ? data.hint : data.word}
                  onClick={() => handleClick(index)}  // Pass click handler
                />
              </li>
              <Button variant="link" className="ml-2">
                {counts[index] || 0}
              </Button>
            </div>
          );
        })}
      </ul>
            <div className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                    <Link href='/NamePlayer'>Back</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href='/Timer'>Start</Link>
                </Button>
            </div>
        </div>
    );
}

export default SeeYourRole;