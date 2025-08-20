import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const NavBar = () => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className='mx-auto mx-w-6xl p-4'>
                <div className="flex justify-around items-center">
                    <h1 className="text-3xl font-bold text-primary  font-mono tracking-tighter">NotesGenerator</h1>
                    <div className="flex items-center gap-4">
                        <Link to="/create" className='btn btn-primary cursor-pointer'> <PlusIcon className='size-5' /> <span>New Note</span></Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar