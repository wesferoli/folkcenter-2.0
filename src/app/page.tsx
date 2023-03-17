'use client';

import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import vynilPlayer from '../../public/vynilPlayer.json';

export default function App() {
    const router = useRouter();

    setTimeout(async () => {
        router.push('/signin');
    }, 2000);

    return (
        <div className="flex items-center justify-center h-screen">
            <Lottie className="w-1/2 h-1/2" animationData={vynilPlayer} loop />
        </div>
    );
}
