[load-config-folder](../README.md) / [Exports](../modules.md) / [index](../modules/index-1.md) / FolderConfig

# Class: FolderConfig

[index](../modules/index-1.md).FolderConfig

## Table of contents

### Constructors

- [constructor](index-1.FolderConfig.md#constructor)

### Properties

- [configurators](index-1.FolderConfig.md#configurators)
- [files](index-1.FolderConfig.md#files)
- [fs](index-1.FolderConfig.md#fs)
- [options](index-1.FolderConfig.md#options)
- [path](index-1.FolderConfig.md#path)
- [readFile](index-1.FolderConfig.md#readfile)

### Methods

- [addConfig](index-1.FolderConfig.md#addconfig)
- [load](index-1.FolderConfig.md#load)
- [loadSync](index-1.FolderConfig.md#loadsync)
- [addConfig](index-1.FolderConfig.md#addconfig-1)
- [load](index-1.FolderConfig.md#load-1)
- [loadSync](index-1.FolderConfig.md#loadsync-1)
- [register](index-1.FolderConfig.md#register)
- [setFileSystem](index-1.FolderConfig.md#setfilesystem)

## Constructors

### constructor

• **new FolderConfig**(`aPath`, `aOptions`, `done`): [`FolderConfig`](index-1.FolderConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |
| `done` | `any` |

#### Returns

[`FolderConfig`](index-1.FolderConfig.md)

#### Defined in

[src/index.js:17](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L17)

## Properties

### configurators

• **configurators**: `Object`

#### Defined in

[src/index.js:9](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L9)

___

### files

• **files**: `any`[]

#### Defined in

[src/index.js:10](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L10)

___

### fs

• **fs**: `any`

#### Defined in

[src/index.js:12](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L12)

___

### options

• **options**: `any`

#### Defined in

[src/index.js:37](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L37)

___

### path

• **path**: `any`

#### Defined in

[src/index.js:35](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L35)

[src/index.js:13](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L13)

___

### readFile

• **readFile**: `any`

#### Defined in

[src/index.js:15](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L15)

## Methods

### addConfig

▸ **addConfig**(`aFile`, `aOptions`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFile` | `any` |
| `aOptions` | `any` |

#### Returns

`number`

#### Defined in

[src/index.js:77](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L77)

___

### load

▸ **load**(`aPath`, `aOptions`, `done`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |
| `done` | `any` |

#### Returns

`any`

#### Defined in

[src/index.js:41](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L41)

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |

#### Returns

`any`

#### Defined in

[src/index.js:63](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L63)

___

### addConfig

▸ **addConfig**(`aFile`, `aConfigFiles`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFile` | `any` |
| `aConfigFiles` | `any` |

#### Returns

`number`

#### Defined in

[src/index.js:85](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L85)

___

### load

▸ **load**(`aPath`, `aOptions`, `done`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |
| `done` | `any` |

#### Returns

`any`

#### Defined in

[src/index.js:105](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L105)

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |

#### Returns

`any`

#### Defined in

[src/index.js:143](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L143)

___

### register

▸ **register**(`aExts`, `aProcess`, `aConfigurators`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aExts` | `any` |
| `aProcess` | `any` |
| `aConfigurators` | `any` |

#### Returns

`any`

#### Defined in

[src/index.js:184](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L184)

___

### setFileSystem

▸ **setFileSystem**(`aFileSystem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFileSystem` | `any` |

#### Returns

`boolean`

#### Defined in

[src/index.js:191](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.js#L191)
