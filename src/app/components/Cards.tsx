import React from 'react';

interface CardProps {
  image: string;
  name: string;
}

const Cards: React.FC<CardProps> = (props) => {
  return (
    <div className="md:w-[230px] w-[120px] rounded-xl bg-gray-100 items-center justify-center flex py-4 transition-all hover:shadow-xl hover:bg-white">
      <img
        src={props.image}
        alt={props.name}
        className="md:h-[40px] md:w-[50px] h-[20px] w-[30px] pr-3"
      />
      <h1 className="font-semibold md:text-xl text-sm">{props.name}</h1>
    </div>
  );
};

export default Cards;