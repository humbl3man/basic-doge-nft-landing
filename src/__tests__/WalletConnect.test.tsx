import { fireEvent, render } from '@testing-library/react';
import WalletConnect from 'components/WalletConnect';
import Context from 'state/context';

describe('Components/WalletConnect', () => {
  test('Show metamask wallet connect button', () => {
    const { queryByText } = render(
      <Context.Provider
        value={{
          walletConnected: false,
          walletAddress: '',
          isMetamaskInstalled: true,
          handleWalletConnect: jest.fn()
        }}
      >
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
          walletConnected: true,
          walletAddress: mockWalletAddress,
          isMetamaskInstalled: true,
          handleWalletConnect: jest.fn()
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
          walletConnected: true,
          walletAddress: mockWalletAddress,
          isMetamaskInstalled: true,
          handleWalletConnect: jest.fn()
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
          walletConnected: false,
          walletAddress: '',
          isMetamaskInstalled: false,
          handleWalletConnect: jest.fn()
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
