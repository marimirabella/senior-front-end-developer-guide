import { DeviceBreakpoint } from '../theme';

export enum GuideRoute {
  Home = '/',
  ProgrammingParadigms = '/programming-paradigms',
}

export const mobileContentAlignment: Record<DeviceBreakpoint.Xs, string> = {
  [DeviceBreakpoint.Xs]: '5vw',
};

export const desktopAlignment: Record<
  DeviceBreakpoint.Lg | DeviceBreakpoint.Xl,
  string
> = {
  [DeviceBreakpoint.Lg]: '7vw',
  [DeviceBreakpoint.Xl]: '10vw',
};

export const contentAlignment: Record<
  DeviceBreakpoint.Xs | DeviceBreakpoint.Lg | DeviceBreakpoint.Xl,
  string
> = {
  ...mobileContentAlignment,
  ...desktopAlignment,
};
