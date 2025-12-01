import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        <div className="flex items-center space-x-4">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">John Doe</h1>
            <p className="text-sm text-gray-500">Frontend Developer</p>
            <div className="mt-2 flex space-x-2">
              <button className="text-sm text-indigo-600 hover:underline">Edit Profile</button>
              <button className="text-sm text-gray-600 hover:underline">Settings</button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-medium text-gray-900">42</p>
            <p className="text-xs text-gray-500">Projects</p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">1.2k</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">180</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-medium text-gray-900">About</h2>
          <p className="mt-2 text-sm text-gray-600">
            Short bio goes here. Passionate about building accessible web apps with React and Tailwind CSS.
          </p>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded">
            Message
          </button>
          <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default page