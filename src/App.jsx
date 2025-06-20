import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'


const phrases = [
  "I like your smile 😉",
  "You have a nice butt hehe",
  "Ugh, what's that on your face? 🧐",
  "wanna go on a date sometime? 👉🏼👈🏼",
  "Loser❗❗❗❗❗"
]

// const shakeVariant = {
//   shake: {
//     x: [0, -8, 8, -8, 8, 0],
//     y: [0, -4, 4, -4, 4, 0],
//     transition: { duration: 0.4 }
//   }
// }

function App() {

  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    alert('texts were stolen, random or generated... the whole idea was stolen ngl');
  }, []);
  // const [shakeKey, setShakeKey] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShakeKey(prev => prev + 1); // this will retrigger the animation
  //   }, 2500);
  //   return () => clearInterval(interval);
  // }, []);




  return (
    <div className='w-screen h-screen bg-pink-100 flex flex-col items-center justify-center'>
      <div className='relative rounded-lg' onClick={() => setIsOpen(!isOpen)}>
        {/* <div className='w-64 h-40 bg-pink-300 overflow-hidden relative rounded-lg'>
          '<div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-xl'>💖</span>
          </div>
        </div> */}

        <div className="relative rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            className='w-64 h-40 bg-pink-300 overflow-hidden relative rounded-lg cursor-pointer'
            animate={
              !isOpen ? {
                rotate: [0, -1, 1, -1, 1, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }
              } : {}
            }
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-xl'>💖</span>
            </div>
          </motion.div>
          {/* Bouncy indicator just below */}
          {
            !isOpen && (
              <motion.div
            className="absolute left-1/2 top-full mt-4 -translate-x-1/2 flex flex-col items-center z-10"
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          >
             <svg width="24" height="16" className="mt-1 rotate-[180deg]" fill="none" stroke="pink" strokeWidth="3">
              <path d="M12 2 L12 14 M12 14 L6 8 M12 14 L18 8" />
            </svg>
            <span className="text-pink-500 font-bold text-xs bg-white px-4 py-1 rounded-full border border-pink-200 shadow">
              Click Me
            </span>
          </motion.div>
            )
          }
        </div>

        <AnimatePresence>
          {
            isOpen && (
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                  y: 0,
                  zIndex: -100
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -100, -100, 5],
                  zIndex: 100
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-54 h-32 bg-white shadow-lg rounded-lg z-50 flex items-center justify-center font-semibold'>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className='text-pink-600 text-lg text-center'>{
                    phrases[Math.floor(Math.random() * phrases.length)]
                  }</motion.p>
              </motion.div>
            )
          }
        </AnimatePresence>


      </div>



    </div>
  )
}

export default App
