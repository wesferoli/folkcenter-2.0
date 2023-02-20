import { type GetStaticProps } from 'next';
import { type User } from '@prisma/client';
import prisma from '../../prisma/prisma';
import { AppHead } from '../components/AppHead';

interface IProps {
    user: User;
}

export const getStaticProps: GetStaticProps = async () => {
    const user = await prisma.user.findUnique({ where: { id: 1 } });

    return {
        props: { user },
        revalidate: 10,
    };
};

const Home: React.FC<IProps> = ({ user }) => (
    <div>
        <AppHead />

        <main>
            <h1>Folkcenter</h1>
            <h3>Nome: {user?.name}</h3>
            <p>Email: {user?.email}</p>
        </main>

        <footer>
            <p>Footer</p>
        </footer>
    </div>
);

export default Home;
