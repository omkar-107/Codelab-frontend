import React from 'react';

import aryan from './images/aryan.jpg';
import saurabh from './images/saurabh.jpg';
import omkar from './images/omkar.jpg';
import ProfileModal from './ProfileModal';

function AboutUs() {
    return (
      <div className="bg-slate-100 p-16">
        <div className="text-center mb-8 flex flex-col items-center">
          <h1 className="font-bold text-5xl text-slate-700 underline">About Us</h1>
          <p className="text-lg mt-10">
            <span className='text-2xl font-bold italic mr-2'>CodeLab</span>
             is the common web-based platform to streamline the process of coding assignment submission and assessment. It provides roubust tools to the instructors so as to easily assess the coding assignments. In addition to that CodeLab provides <span className='font-bold italic'>Easy To Use</span> interface for writing, executing the codes written in multiple programming languages. This platform is for all the programming enthusiasts !!!
          </p>

          <div className='flex justify-evenly mt-10 items-center flex-col md:flex-col lg:flex-row gap-5'>
            <div className='lg:w-[35%] text-4xl font-bold text-slate-700'>
                <p>Say <span className='text-red-500 italic'>BYE</span> to code/output snapshots !</p>
            </div>
            <img src={require('./images/coding.jpg')} className=' rounded-xl lg:w-[35%]' alt="" />
          </div>

          <div>
            <div className='flex w-full justify-evenly mt-10'>
                <h2 className="text-6xl font-bold mt-4 text-slate-700">Who Are We</h2>
            </div>
            
            <div className="flex justify-evenly w-full mt-10 flex-col lg:flex-row md:flex-col md:items-center md:gap-5 gap-5">
                <div className=" lg:w-[30%] md:w-[70%] flex flex-col justify-center h-96 items-center rounded-lg shadow-2xl">
                    <img src={saurabh} className="rounded-full" width="50%" alt="Saurabh" />
                    <h3 className="text-xl font-bold mt-4">Saurabh Rajopadhe</h3>
                    <p className="text-base">BackEnd Developer</p>
                    <ProfileModal name="Saurabh Rajopadhye" email="saurabh.rajopadhye@walchandsangli.ac.in" linkedin="#"/>
                </div>
        
                <div className=" lg:w-[30%] md:w-[70%] flex flex-col justify-center h-96 items-center rounded-lg shadow-2xl">
                    <img src={omkar} className="rounded-full" width="50%" alt="Saurabh" />
                    <h3 className="text-xl font-bold mt-4">Omkar Salunkhe</h3>
                    <p className="text-base">BackEnd Developer</p>
                    <ProfileModal name="Omkar Salunkhe" email="omkar.salunkhe@walchandsangli.ac.in" linkedin="#"/>

                </div>
        
                <div className=" lg:w-[30%] md:w-[70%] flex flex-col justify-center h-96 items-center rounded-lg shadow-2xl">
                    <img src={aryan} className="rounded-full" width="50%" alt="Saurabh" />
                    <h3 className="text-xl font-bold mt-4">Aryan Magdum</h3>
                    <p className="text-base">FrontEnd Developer</p>
                    <ProfileModal name="Aryan Magdum" email="aryan.magdum@walchandsangli.ac.in" linkedin="#"/>

                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  