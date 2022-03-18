import { fireEvent, render } from '@testing-library/react';
import WalletConnect from 'components/WalletConnect';
import Context, { AppContextType } from 'state/context';

const defaultProps: AppContextType = {
  walletConnected: false,
  walletAddress: '',
  isMetamaskInstalled: true,
  handleWalletConnect: jest.fn()
};

describe('Components/WalletConnect', () => {
  test('Show metamask wallet connect button', () => {
    const { queryByText } = render(
      <Context.Provider value={defaultProps}>
        <WalletConnect />
      </Context.Provider>
    );
    expect(queryByText(/connect metamask wallet/i)).toBeInTheDocument();
  });
  test('Display wallet address', () => {
    const mockWalletAddress = 'abc123x';
    const { queryByDisplayValue } = render(
      <Context.Provider
        value={{
          ...defaultProps,
          walletConnected: true,
          walletAddress: mockWalletAddress
        }}
      >
        <WalletConnect />
      </Context.Provider>
    );
    expect(queryByDisplayValue(mockWalletAddress)).toBeInTheDocument();
  });
  test('Copy wallet address', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => jest.fn()
      }
    });
    const mockWalletAddress = 'abc123x';
    const { getByRole, queryByText } = render(
      <Context.Provider
        value={{
          ...defaultProps,
          walletConnected: true,
          walletAddress: mockWalletAddress
        }}
      >
        <WalletConnect />
      </Context.Provider>
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(queryByText(/address copied!/i)).toBeInTheDocument();
  });
  test('Show error when metamask is not installed', () => {
    const { queryByText } = render(
      <Context.Provider
        value={{
          ...defaultProps,
          isMetamaskInstalled: false
        }}
      >
        <WalletConnect />
      </Context.Provider>
    );
    expect(
      queryByText(/No wallet found. Please install Metamask./i)
    ).toBeInTheDocument();
  });
});
