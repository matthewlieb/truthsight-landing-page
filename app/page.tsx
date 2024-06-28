"use client";

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (response.ok) {
        setMessage('Subscription successful');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white text-black">
      <header className="text-black body-font bg-white py-6">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <img src="/truthsight-logo.png" alt="TruthSight Logo" width={40} height={40} />
            <span className="ml-3 text-3xl">TruthSight.ai</span>
          </a>
          <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#signup" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5">
              Chrome Extension Coming Soon!
            </a>
            <a href="#signup" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign Up
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Welcome to TruthSight.ai</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
              A Chrome extension to detect deepfakes.
            </p>
            <img src="/truthsight-logo.png" alt="TruthSight Logo" width={100} height={100} className="mx-auto" />
          </div>
          <div id="signup" className="bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 max-w-md">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit} name="subscribe" method="POST" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="subscribe" />
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Sign Up
              </button>
            </form>
            {message && <p className="mt-4 text-center text-sm">{message}</p>}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4">Features</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Discover the features of our deepfake detection extension.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">FADA</h2>
                <ul className="list-disc list-inside">
                  <li>Detection model for thispersondoesnotexist.com</li>
                  <li>Compare existing photos using vector embedding comparison</li>
                  <li>Detect deepfakes from one of the most popular sources</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">Ensemble Model</h2>
                <ul className="list-disc list-inside">
                  <li>Deepfake detection of photos</li>
                  <li>Combines multiple models for higher accuracy</li>
                  <li>Continuous improvement with more data</li>
                </ul>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-black text-lg title-font font-medium mb-3">Future Features</h2>
                <ul className="list-disc list-inside">
                  <li>Deepfake video detection</li>
                  <li>Audio deepfake detection</li>
                  <li>Real-time detection capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/truthsight-logo.png" alt="TruthSight Logo" width={40} height={40} />
            <span className="ml-3 text-xl">TruthSight.ai</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 TruthSight.ai —
            <a href="https://twitter.com/TruthsightAI" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@TruthsightAI</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
