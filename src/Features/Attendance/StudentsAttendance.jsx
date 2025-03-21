import React from 'react'
import Header from './Header'
import StudentsAttendanceStats from './StudentsAttendanceStats'
import StudentsAttendanceHistory from './StudentsAttendanceHistory'

const StudentsAttendance = () => {
  return (
    <>
      <div className="bg-background p-[1rem] rounded-[10px]">
        <Header />
        <StudentsAttendanceStats />
      </div>
      <StudentsAttendanceHistory />
    </>
  )
}

export default StudentsAttendance