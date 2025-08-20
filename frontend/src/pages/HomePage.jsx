import React from 'react'
import toast from 'react-hot-toast'
import NavBar from "../components/NavBar"
import { useState, useEffect } from 'react'
import api from '../lib/axios';
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound';


const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await api.get("/notes")
                setNotes(response.data);
            }
            catch (error) {
                console.log(error);
                toast.error("faied  to load Notes")
            }
            finally {
                setIsLoading(false)
            }

        }
        fetchData()
    }, [])
    return (
        <div className="min-h-screen ">
            <NavBar />
            <div className="max-w-7xl mx-auto p-4 mt-6">
                {
                    isLoading && <div className='text-center text-primary py-10'>Loading notes...</div>
                }
                {
                    notes.length > 0 ?(
                        <div className="grid grid-cols-1 md:grid-cols-2 ;g:grid-cols-3 lg:grid-cols-3 gap-5 ">
                            {
                                notes.map((note)=>{
                                    return <NoteCard key={note._id} note={note} setNotes={setNotes}/> })
                            }
                        </div>
                    ):<NotesNotFound/>
                }
            </div>
        </div>
    )
}

export default HomePage