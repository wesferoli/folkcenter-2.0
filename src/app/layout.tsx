import { type ReactNode } from 'react';
import { Provider } from '../components/Provider';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Provider>
                <body>{children}</body>
            </Provider>
        </html>
    );
}
