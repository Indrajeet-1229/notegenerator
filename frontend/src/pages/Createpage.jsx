import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const Createpage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }
    setIsLoading(true);

    try {
      await api.post("/notes", { title, content })
      toast.success("Note created successfully");
      navigate('/');
      setIsLoading(false);
    }
    catch (error) {
      toast.error("Failed to Create Note. Plase try again Later")
      setIsLoading(false);
    }

  }
  return (
    <div className='min-h-screen  bg-base-2000'>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon classsName="size-4" />Back To Notes</Link>


          <div className="card bg-base-100">
            <div className="card-body">
              <h1 className="card-title text-2xl mb-4">Create New Notes</h1>
              <form onSubmit={handleSubmit} >
                <div className="form-control mb-4">
                  <label className='label'>
                    <span className="label-text">
                      Title
                    </span>
                  </label>
                  <input type="text" placeholder='Note Title' className='input input-bordered' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control mb-4">
                  <label className='label'>
                    <span className="label-text">
                      Title
                    </span>
                  </label>
                  <textarea type="text" placeholder='Write Your Note Here' className='textarea textarea-bordered' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className="card-actions justify-end">
                  <button type='submit' className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createpage