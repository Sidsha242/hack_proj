import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');   //for login
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    const [loginStatus, setLoginstatus] = useState(false);
    const [role, setRole] = useState("")

    const [loginMessage, setLoginmessage] = useState('');

    Axios.defaults.withCredentials = true

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,                              //sending to backend
            password: password,
        }).then((response) => {
            if (!response.data.auth) {
                setLoginstatus(false);
                setLoginmessage(response.data.message);
            }
            else {
                setUser(response.data);
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log(response.data);
                setLoginstatus(true);
                setLoginmessage(response.data.message);
                Axios.get("http://localhost:3001/isUserAuth", {

                    headers: {
                        "x-access-token": localStorage.getItem("token"),
                    },
                }).then((response) => {
                    console.log("Auth suc");
                    setTimeout(() => {
                        window.location.href = 'http://localhost:3000/dashboard';
                    }, 1000)
                });


            }
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();    //prevents refresh on submiting
    }

    return (
        <>
  <div class="flex flex-col bg-[#f2eedb] items-center justify-center px-6 py-20 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50" required="" onChange={(e)=>{
                        setUsername(e.target.value)
                      }}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{
                        setPassword(e.target.value)
                      }}/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onSubmit={(event) => {
                    event.preventDefault()
                  }}>Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="./register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
        </>
    )
}

export default Login