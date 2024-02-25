import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-950 mb-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    src="https://github.com/Enigma-IIITS/enigma-site/assets/116871732/c72bc255-b90b-45f6-b980-b7b451d6465c"
                    alt="logo"
                    width={70}
                    height={70}
                    className="mx-auto  w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Log in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" type="text" />
                        </div>
                    </div>


                    <div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </div>

                    <div>
                        <Button className="w-full">Create account</Button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-white">
                    Not a member?
                    <a href="/signup" className=" mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Join Now!</a>
                </p>
            </div>
        </div>
    );
};

export default Page;
