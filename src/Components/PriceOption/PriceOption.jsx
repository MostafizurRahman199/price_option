import React from 'react'
import SinglePriceOption from './SinglePriceOption';

export default function PriceOption() {

    const gymPriceOptions = [
        {
            id: 1,
            priceOption: "Basic Membership",
            price: "$25/month",
            features: [
                "Access to gym equipment",
                "Free fitness assessment",
                "Group classes",
                "24/7 access"
            ],
            img: "https://www.labelsandpackagingworld.com/wp-content/uploads/2021/11/bs.png"
        },
        {
            id: 2,
            priceOption: "Premium Membership",
            price: "$50/month",
            features: [
                "All Basic Membership features",
                "Personal training sessions",
                "Nutrition counseling",
                "Access to exclusive workshops"
            ],
            img: "https://media.istockphoto.com/id/530649463/photo/premium-membership-gold-badge.jpg?s=612x612&w=0&k=20&c=j21z0bEdFdSU_KkF60LNTe9mxuaUdIyxUmiir_yBswo="
        },
        {
            id: 3,
            priceOption: "Family Membership",
            price: "$80/month",
            features: [
                "All Premium Membership features",
                "Family discounts",
                "Kids' classes",
                "Free guest passes"
            ],
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eMwWrzrSjjvTb8KVU4QsokZj6_WHRrtNBw&s"
        },
        {
            id: 4,
            priceOption: "Student Membership",
            price: "$15/month",
            features: [
                "All Basic Membership features",
                "Discounted rates",
                "Flexible hours for students",
                "Access to exclusive student events"
            ],
            img: "https://www.publicationacademy.org/wp-content/uploads/pa-icon-only.png"
        }
    ];
    

  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-4  gap-4 justify-items-center w-10/12 mx-auto'>
        {
            gymPriceOptions.map((option) => <SinglePriceOption option={option} key={option.id}/> )
        }
    </div>
  )
}
