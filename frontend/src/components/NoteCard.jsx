import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formateDate } from '../lib/Utils'
import toast from 'react-hot-toast'
import api from '../lib/axios'

const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();
        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
            toast.success("Note deleted Successfully")
        }
        catch (error) {
            console.log("error in handleDlete", error);
            toast.error("failed to  delete");
        }
    }



    return (
        <Link to={`note/${note._id}`} className="card bg-base-100  hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D] px-3">
                <div className="card-body">
                    <h3 className="card-title text-base-content">{note.title}</h3>
                    <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                    <div className='flex card-actions justify-between items-center mt-4'>
                        <span className="text-sm text-base-content/60">
                            {formateDate(new Date(note.createdAt))}</span>
                        <div className="flex items-center gap-1">
                            <PenSquareIcon className="size-4" />
                            <button onClick={(e) => handleDelete(e, note._id)} className=" btn btn-gost btn-xs text-error"><Trash2Icon className='size-4' /></button>
                        </div>
                    </div>
                </div>
           
        </Link>
    )
}

export default NoteCard