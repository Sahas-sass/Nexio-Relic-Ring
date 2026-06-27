import configData from '../../data/universe-config.json';
import { UniverseConfig } from './types';

export const getConfig = (): UniverseConfig => {
  return configData as UniverseConfig;
};