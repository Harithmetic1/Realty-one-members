import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        bio: user.bio,
        phone: user.phone,
        linkedin: user.linkedin,
        twitter: user.twitter,
        instagram: user.instagram,
        facebook: user.facebook,
        profile_picture: user.profile_picture,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">


                <div>
                    <InputLabel htmlFor="profile_picture" value="Profile Picture" />
                    <img src={user.profile_picture} alt={user.name} className='w-20 h-20 object-cover rounded-full' />
                    <TextInput
                        id="profile_picture"
                        className="mt-1 block w-full"
                        type="file"
                        onChange={(e) => setData('profile_picture', e.target.value)}
                        autoComplete="image"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="bio" value="Bio" />

                    <textarea 
                    name="bio" 
                    id="bio" 
                    cols="30" 
                    rows="5" 
                    value={data.bio}
                    maxLength={500}
                    onChange={(e) => setData('bio', e.target.value)}
                    className="mt-1 block w-full">
                    </textarea>

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="phone"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>

                <div>
                    <InputLabel htmlFor="linkedin" value="Linkedin" />

                    <TextInput
                        id="linkedin"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.linkedin}
                        onChange={(e) => setData('linkedin', e.target.value)}
                        autoComplete="linkedin"
                    />

                    <InputError className="mt-2" message={errors.linkedin} />
                </div>

                <div>
                    <InputLabel htmlFor="instagram" value="Instagram" />

                    <TextInput
                        id="instagram"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.instagram}
                        onChange={(e) => setData('instagram', e.target.value)}
                        autoComplete="instagram"
                    />

                    <InputError className="mt-2" message={errors.instagram} />
                </div>

                <div>
                    <InputLabel htmlFor="twitter" value="Twitter" />

                    <TextInput
                        id="twitter"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.twitter}
                        onChange={(e) => setData('twitter', e.target.value)}
                        autoComplete="twitter"
                    />

                    <InputError className="mt-2" message={errors.twitter} />
                </div>

                <div>
                    <InputLabel htmlFor="facebook" value="Facebook" />

                    <TextInput
                        id="facebook"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.facebook}
                        onChange={(e) => setData('facebook', e.target.value)}
                        autoComplete="facebook"
                    />

                    <InputError className="mt-2" message={errors.facebook} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
