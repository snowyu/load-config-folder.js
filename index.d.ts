import Config, { IConfigOptions } from 'load-config-file';

export default class FolderConfig extends Config {

  /**
   * add one or more config file basename
   * @param aFile the config file basename
   * @param aConfigFiles optional files configuration
   * @returns return added file count.
   */
  static addConfig(aFile: string|string[], aConfigFiles?: string[]): number

  addConfig(aFile: string|string[], aOptions?: IConfigOptions): number
}

export * from 'load-config-file';
