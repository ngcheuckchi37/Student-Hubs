import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';
import { hubs } from '../assets';
import React from 'react';






function PostPage() {
  //const [address] = useStateContext();
  //const { state } = useLocation();
  const [comment, setComment] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [feed, setFeed] = useState([]);
  const [address, setAddress] = useState(null);
  
  

  

  useEffect(() => {
    // Load the saved posts from local storage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setFeed(savedPosts);

    // Check if Metamask is installed
    if (typeof window.ethereum !== 'undefined') {
      // Retrieve the user's address from Metamask
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Save the posts to local storage whenever the feed state changes
    localStorage.setItem('posts', JSON.stringify(feed));
  }, [feed]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user is logged in with Metamask
    if (!address) {
      alert('Please Login Your Metamask account before POSTING!');
      return;
    }

    // Add the new post to the feed
    const newPost = {
      comment,
      selectedFile,
      address,
      timestamp: new Date(),
    };
    setFeed((prevFeed) => [...prevFeed, newPost]);

    // Reset the form
    setComment('');
    setSelectedFile(null);
  };






  return (
    <div className="max-w-lg mx-auto flex flex-col space-y-4">
      <form className="flex flex-col space-y-4 p-4 border-2 border-orange-500 rounded-lg bg-gray-200" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="comment" className="font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            className="block w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="file" className="font-medium">
            Select Image File (jpg , jpeg , png , gif)
          </label>
          <input
            type="file"
            id="file"
            accept=".jpg,.jpeg,.png,.gif"
            className="hidden"
            onChange={handleFileSelect}

          />
          <div className="flex items-center">
            <button
              type="button"
              className="px-4 py-2 mr-2 text-white bg-pink-400 rounded-md"
              onClick={() => {
                document.getElementById('file').click();
              }}>
              Select File
            </button>
            {selectedFile && (
              <span className="inline-block overflow-hidden text-sm text-gray-500 truncate">
                {selectedFile.name}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-pink-400 rounded-md hover:bg-blue-600">
            Post
          </button>
        </div>
      </form>
      <div className="flex flex-col space-y-4">
        {feed.map((post) => (

          <div
            key={post.timestamp}
            className="flex flex-col bg-white rounded-md border border-gray-200 p-4"> 
            <img src={hubs} alt="user" className="w-10 h-7 rounded-none"/>
            <p className="text-gray-500"><span className="text-[#b2b3bd]">{address}</span></p>
            <p className="text-lg font-medium">{post.comment}</p>
            {post.selectedFile && (
              <img
                src={URL.createObjectURL(post.selectedFile)}
                alt=""
                className="my-4 max-w-full"
              />
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
            }

export default PostPage;