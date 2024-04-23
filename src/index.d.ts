import { Config, ConfigCallBackFn, IConfigOptions } from 'load-config-file';

export class FolderConfig extends Config {

  /**
   * add one or more config file basename
   * @param aFile the config file basename
   * @param aConfigFiles optional files configuration
   * @returns return added file count.
   */
  static addConfig(aFile: string|string[], aConfigFiles?: string[]): number

  addConfig(aFile: string|string[], aOptions?: IConfigOptions): number
}

declare function loadConfig(aPath: string, aOptions: IConfigOptions, done: ConfigCallBackFn):void
declare function loadConfig(aPath: string, done: ConfigCallBackFn):void
declare function loadConfig(aPath: string): any
declare function loadConfig(aPath: string, aOptions: IConfigOptions): any
declare function loadConfig(aPath: string, aOptions: IConfigOptions, isAsync: true):Promise<any>
declare function loadConfig(aPath: string, isAsync: true):Promise<any>

export default loadConfig
export * from 'load-config-file';
