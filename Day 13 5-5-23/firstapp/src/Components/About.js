import React, { Component } from 'react'

export default function About() {
  componentDidMount(){
    fetch("https://regres.in/api/users?page=2")
      .then((res)=>{
        
      })
  }
  return (
    <div>
       About
    </div>
  )
}