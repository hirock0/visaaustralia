'use client'
import { FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function Loading() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center space-y-4">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <p className="text-lg font-medium">Loading, please wait...</p>
      </div>
    </motion.div>
  )
}
