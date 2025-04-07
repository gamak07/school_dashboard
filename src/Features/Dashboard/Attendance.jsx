import React from 'react'
import Button from '../../Components/Button'
import AttendanceLineChart from './AttendanceLineChart'

const Attendance = () => {
  return (
    <div className='bg-white rounded-[10px] p-[1rem] w-1/3'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px] font-bold text-black'>Weekly Attendance</h1>
            <Button className='text-indigo hover:bg-indigolight'>
                View All
            </Button>
        </div>
        
        <div className='mt-[1rem]'>
            <AttendanceLineChart />
        </div>
    </div>
  )
}

export default Attendance