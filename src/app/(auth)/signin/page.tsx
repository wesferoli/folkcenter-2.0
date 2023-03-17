import { AuthButton } from '../../../components/AuthButton';

export default async function SignIn() {
    // const user = await prisma.user.findUnique({ where: { id: 1 } });

    return (
        <div>
            <main>
                <h1>Folkcenter</h1>

                <AuthButton />
            </main>

            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
}
