import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        bio: '',
        profile_picture: '',
        Department: '',
        Role: '',
    });

    const [form, setForm] = useState(0);
    const [checkPassword, setCheckPassword] = useState('');
    const [checkPasswordError, setCheckPasswordError] = useState(false);

    useEffect(() => {
        
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        if (form === 0) {
            setForm(1);
            return;
        } else if (form === 1) {
         post(route('register'));
        }
    };

    const handleCheckPassword = () => {

        if (checkPassword === data.password) {
            setData('password_confirmation', checkPassword);
            setCheckPasswordError(false);
        } else {
            setCheckPasswordError(true);
            console.log('error password mismatch');
        }
    }

    useEffect(() => {
        handleCheckPassword();
    }, [checkPassword]);

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                {   form == 1 &&
                    <div className="back-btn">
                        <button onClick={() => setForm(0)}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    </div>
                }
                {form == 0 && <div className="form-first">

                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={checkPassword}
                            className={`mt-1 block w-full ${checkPasswordError ? 'border-red-500' : ''}`}
                            autoComplete="new-password"
                            onChange={(e) => setCheckPassword(e.target.value)}
                            required
                        />

                        <InputError message={checkPasswordError ? "Password Mismatch!" : null} className="mt-2" />
                    </div>
                </div>}


                {form == 1 &&  <div className="form-second">
                    <div className="mt-4">
                        <InputLabel htmlFor="phone" value="Phone" />

                        <TextInput
                            id="phone"
                            type="number"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="bio" value="Bio" />

                        <textarea 
                        name="bio" 
                        id="bio" 
                        cols="30" 
                        rows="5" 
                        value={data.bio} 
                        className='mt-1 block w-full' 
                        onChange={(e) => setData('bio', e.target.value)}
                        ></textarea>

                        <InputError message={errors.bio} className="mt-2" />

                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="profile_picture" value="Profile Picture" />

                        <TextInput
                            id="profile_picture"
                            type="file"
                            name="profile_picture"
                            value={data.profile_picture}
                            className="mt-1 block w-full"
                            autoComplete="profile_picture"
                            onChange={(e) => setData('profile_picture', e.target.value)}
                        />

                        <InputError message={errors.profile_picture} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="Department" value="Department" />

                        <TextInput
                            id="Department"
                            type="text"
                            name="Department"
                            value={data.Department}
                            className="mt-1 block w-full"
                            autoComplete="Department"
                            onChange={(e) => setData('Department', e.target.value)}
                            required
                        />

                        <InputError message={errors.Department} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="Role" value="Role" />
                        
                        <TextInput
                            id="Role"
                            type="text"
                            name="Role"
                            value={data.Role}
                            className="mt-1 block w-full"
                            autoComplete="Role"
                            onChange={(e) => setData('Role', e.target.value)}
                            required
                            />

                        <InputError message={errors.Role} className="mt-2" />
                    </div>
                </div>}


                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing || checkPasswordError}>
                        { 
                            form == 0 ? 'Next' : 'Register'
                        }
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
