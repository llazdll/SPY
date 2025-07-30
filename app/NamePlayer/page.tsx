"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDispatch, useSelector } from 'react-redux';
import { addName, deleteName } from "../Store/namesSlice";
import { RootState } from '../Store/store';
import Link from 'next/link';
function NamePlayer() {
  const [name, setName] = useState('');
  const dispatch = useDispatch()
  const names = useSelector((state: RootState) => state.names.names);
  const player = useSelector((state: RootState) => state.form.player);
  const NameLength = names.length;
  const NamesInputCount=useSelector((state: RootState) => state.form.player);
  
  const handleAddName = () => {
    if (name.trim()) {
      dispatch(addName(name.trim()));
      setName('');
    }
  };

  const handleDeleteName = (nameToDelete: string) => {
    dispatch(deleteName(nameToDelete));
  };
  return (
    <>
      <div className="flex gap-5 md:flex-row w-full flex-col items-center space-x-2 border-2 p-4 border-x-white/50 rounded-md">
        <Input type="text"
          value={name}
          className='w-full focus:ring-offset-2 border-2  focus:border-green-500'
          onChange={(e) => setName(e.target.value)}
          placeholder="“E.g:MMD”" />
        <Button type="submit" variant="link" disabled={names.length == player} onClick={handleAddName} className='border-2 border-dashed border-green-500 hover:bg-green-500 w-full md:w-auto'>Add +</Button>
      </div>

        <p className='opacity-50 ml-5'>add {NamesInputCount-NameLength} more player</p>

      <div className="flex w-full items-center space-x-2 justify-center">
        <ul className="w-full max-w-sm space-y-6 py-10 ">
          {names.map((n, index) => (
            <li key={index} className="p-3 flex justify-between items-center w-full border-2 rounded-lg">
              <span>{n}</span>
              <Button variant="link"  className='border-dashed border-red-400 border-2 hover:border-0 transition-all ease-out hover:bg-red-500' onClick={() => handleDeleteName(n)}>Delete</Button>
            </li>
          ))}
        </ul>
      </div >
      <div className="flex justify-between mt-10">
        <Button variant="outline" size={'lg'}>
          <Link href='/'>Back</Link>
        </Button>
        <Button variant="outline" disabled={NamesInputCount-NameLength>0} size={'lg'}>
          <Link href='/SeeYourRole'>Next</Link>
        </Button>
      </div>
    </>
  )
}
export default NamePlayer