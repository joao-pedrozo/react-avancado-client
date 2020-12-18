import { screen } from '@testing-library/react';

import Logo from '.';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Logo />', () => {
    it('should render a white label by default', () => {
        renderWithTheme(<Logo />);

        /* Estamos procurando por uma aria-label que tenha o texto de
         'WON GAMES usando a flag? parâmetro? I para definir que é case INSENSITIVE,
         e depois selecionando o seu pai com o parent element
         */
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: '#FAFAFA'
        });
    });

    it('should render a black label when receive black theme as paramter', () => {
        renderWithTheme(<Logo color="black" />);
        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: '#030517'
        });
    });
});
