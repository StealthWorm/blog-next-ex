import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Esta é a página sobre do blog. Aqui você pode adicionar informações sobre o projeto.',
};
export default function About() {
  return (
    <>
      <h1>Sobre Nós</h1>
      <p>Esta é a página sobre do blog. Aqui você pode adicionar informações sobre o projeto.</p>
    </>
  );
}

