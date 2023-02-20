import Head from 'next/head';

interface IHeadProps {
    title?: string;
    description?: string;
}

const defaultValues = {
    title: 'Folkcenter - Seu agregador de conteúdo folk',
    description:
        'Junte todos os vídeos de seus artistas favoritos em um só lugar. Agrupe o conteúdo por categorias e nunca mais perca aquele show tão especial!',
};

export const AppHead: React.FC<IHeadProps> = ({
    title = defaultValues.title,
    description = defaultValues.description,
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
);
