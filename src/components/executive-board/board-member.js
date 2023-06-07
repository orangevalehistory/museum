import React from 'react';

export const BoardMember = ({ children, name, role, residence, professional, volunteer, otherLabel, otherText }) => {
    return (
        <article className=''>
            <p className='text-lg font-bold'>{name}</p>
            <p className=''><span className='font-bold'>Role: </span>{role}</p>
            <p className=''><span className='font-bold'>Residence: </span>{residence}</p>
            <p className='py-2'><span className='font-bold'>Professional profile: </span>{professional}</p>
            <p className='py-2'><span className='font-bold'>Volunteer profile: </span>{volunteer}</p>
            <span className='font-bold'>{otherLabel}</span> {otherText}
            {children}
        </article>
    );
};
