import React from 'react';
import FirstFormValidator from '../hooks/FirstFormValidator';

function MyForm() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
    };

    const validationRules = {
        name: {
            required: {
                validate: (value) => value.trim() !== '',
                message: 'Name is required.',
            },
        },
        email: {
            required: {
                validate: (value) => value.trim() !== '',
                message: 'Email is required.',
            },
            emailFormat: {
                validate: (value) =>
                    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
                message: 'Invalid email format.',
            },
        },
        phone: {
            required: {
                validate: (value) => value.trim() !== '',
                message: 'Phone is required.',
            },
            phoneFormat: {
                validate: (value) =>
                    /^\d{10}$/g.test(value),
                message: 'Invalid phone number format. (10 digits)',
            },
        },
    };

    const { values, errors, handleChange, handleSubmit } = FirstFormValidator(
        initialState,
        validationRules
    );

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-[50.24vh] w-[100%] gap-2'>
                    <div className='w-[100%]'>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder='Indtast dit fulde navn'
                            className='w-[100%] p-2 border-[3px] border-[e9e9e9] outline-none'
                        />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
                    <div className='w-[100%]'>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder='Indtast gyldig E-Mail'
                            className='w-[100%] p-2 border-[3px] border-[e9e9e9] outline-none'
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className='w-[100%]'>
                        <input
                            type="text"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder='Indtast Telefonnummer'
                            className='w-[100%] p-2 border-[3px] border-[e9e9e9] outline-none'
                        />
                        {errors.phone && <span>{errors.phone}</span>}
                    </div>
                    <textarea name="message" id="message" rows="8" placeholder='Evt. Besked' className='w-[100%] p-2 border-[3px] border-[e9e9e9] outline-none resize-none'></textarea>
                    <div className='w-[100%] grid grid-cols-2 gap-1'>
                        <input type="reset"  className='bg-[#6699cc] p-1'/>
                        <input type="submit" value="Submit" className='bg-[#0066cc] p-1' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MyForm;
