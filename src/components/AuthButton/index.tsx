'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export const AuthButton: React.FC = () => {
    const { data: session } = useSession();

    if (session === null) {
        return (
            <button type="button" onClick={async () => signIn('github')}>
                Conecte-se com Github
            </button>
        );
    }

    return (
        <button type="button" onClick={async () => signOut()}>
            Desconectar
        </button>
    );
};
