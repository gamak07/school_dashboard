import React from 'react'
import Header from './Header'
import StaffsAttendanceStats from './StaffsAttendanceStats'
import StaffsAttendanceHistory from './StaffsAttendanceHistory'

const StaffsAttendance = () => {
  return (
    <>
      <div className="bg-background p-[1rem] rounded-[10px]">
        <Header />
        <StaffsAttendanceStats />
      </div>
      <StaffsAttendanceHistory />
    </>
  )
}

export default StaffsAttendance