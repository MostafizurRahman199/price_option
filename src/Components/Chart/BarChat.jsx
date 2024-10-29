import React from 'react'

import { BarChart as BChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChat() {

    const gymMembershipData = [
        {
            membershipType: "Basic Membership",
            price: 300,         // Price in dollars per month
            memberCount: 150,   // Number of members with this plan
            duration: 1         // Duration in months
        },
        {
            membershipType: "Standard Membership",
            price: 120,
            memberCount: 200,
            duration: 1
        },
        {
            membershipType: "Premium Membership",
            price: 77,
            memberCount: 100,
            duration: 1
        },
        {
            membershipType: "Student Membership",
            price: 80,
            memberCount: 120,
            duration: 1
        },
        {
            membershipType: "Family Membership",
            price: 75,
            memberCount: 50,
            duration: 1
        },
        {
            membershipType: "Annual Membership",
            price: 500,        // Flat price for one year
            memberCount: 200,
            duration: 12
        },
        {
            membershipType: "Corporate Membership",
            price: 200,         // Discounted rate per person per month
            memberCount: 80,
            duration: 1
        }
    ];


  return (
    <div className='flex flex-col my-8' >
        <h1 className='text-2xl text-center my-4'> Gym membership data in BarChat</h1>
        <ResponsiveContainer width="100%" height={400}>
    <BChart
      width={500}
      height={300}
      data={gymMembershipData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="membershipType" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="white" stroke="" />} />
      <Bar dataKey="memberCount" fill="#82ca9d" activeBar={<Rectangle fill="orange" stroke="" />} />
    </BChart>
  </ResponsiveContainer>
    </div>
  )
}
