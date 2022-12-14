import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Página About funciona corretamente', () => {
  it('Página contém informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const pokedexInfos = screen.getByText(/digital encyclopedia containing all Pokémons/);
    expect(pokedexInfos).toBeInTheDocument();
  });

  it('Página contém um heading h2 com o texto `About Pokédex`', () => {
    renderWithRouter(<About />);

    const aboutText = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });

    expect(aboutText).toBeInTheDocument();
  });

  it('Página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const aboutFirstParagraph = screen.getByText(/encyclopedia containing all Pokémons/);
    const aboutSecondParagraph = screen.getByText(/can filter pokémons by type/i);

    expect(aboutFirstParagraph).toBeInTheDocument();
    expect(aboutSecondParagraph).toBeInTheDocument();
  });

  it('Página contém imagem específica de uma Pokédex', () => {
    renderWithRouter(<About />);

    const pokedexImage = screen.getByRole('img', { name: 'Pokédex' });

    expect(pokedexImage).toBeInTheDocument();
    expect(pokedexImage.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
