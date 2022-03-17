const ethereum = (window as any).ethereum;
export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ');
}
export function isMetamaskInstalled(): boolean {
  return Boolean(ethereum);
}
