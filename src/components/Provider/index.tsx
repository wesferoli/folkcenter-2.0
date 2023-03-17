'use client';

import { SessionProvider } from 'next-auth/react';
import { type ReactNode } from 'react';

interface IProviderProps {
    children: ReactNode;
}

export const Provider: React.FC<IProviderProps> = ({ children }) => (
    <SessionProvider>{children}</SessionProvider>
);
