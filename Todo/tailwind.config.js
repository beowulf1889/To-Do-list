/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{htm1,js}",
  "./index.html"
],
safelist: [
  ' button h-10 w-10  text-center bg-yellow-500 rounded-full',
  'bg-slate-700 text-xl rounded-md justify-center text-center mb-4 w-full',
  'delete-button bg-red-500 focus:outline-none block w-1/4 text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md',
  'make-task bg-amber-400 focus:outline-none block w-full text-center hover:-translate-y-1 mb-2 p-2 hover:scale-105 duration-300 rounded-md',
   'Tasks-container',
   'w-full flex',
   'delete-green-tasks ml-auto bg-blue-500 justify-end focus:outline-none block w-1/4 text-center mb-2 p-2 hover:-translate-y-1 duration-300 rounded-md',
   "text-white flex  items-center", "Tasks-container  w-full ", "bg-neutral-800",
   "w-1/4 To-Do bg-slate-700 text-white rounded-md m-5 p-4",
   "flex items-center justify-center bg-black h-min",
   "flex bg-slate-700   text-xl justify-center text-center mb-4 w-full",
   


   

],  
  theme: {
    extend: {},
  },
  plugins: [],
}

