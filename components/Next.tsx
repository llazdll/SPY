"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link';

function Next() {
    return (
        <div className="flex  justify-center my-10">
            <Button variant="secondary" size={'lg'} className='py-6'>
                <Link href='/NamePlayer'><span className="text-2xl hover:text-green-500 font-semibold hover:underline">Next</span></Link>
            </Button>
        </div>

    )
}

export default Next