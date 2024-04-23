[load-config-folder](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / Config

# Class: Config

[index](../modules/index.md).Config

## Hierarchy

- **`Config`**

  ↳ [`FolderConfig`](index.FolderConfig.md)

## Table of contents

### Constructors

- [constructor](index.Config.md#constructor)

### Properties

- [configurators](index.Config.md#configurators)
- [fs](index.Config.md#fs)
- [path](index.Config.md#path)
- [readFile](index.Config.md#readfile)

### Methods

- [load](index.Config.md#load)
- [loadSync](index.Config.md#loadsync)
- [load](index.Config.md#load-1)
- [loadSync](index.Config.md#loadsync-1)
- [register](index.Config.md#register)
- [setFileSystem](index.Config.md#setfilesystem)

## Constructors

### constructor

• **new Config**(`aOptions?`): [`Config`](index.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`Config`](index.Config.md)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:42

• **new Config**(`aPath`, `aOptions?`): [`Config`](index.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`Config`](index.Config.md)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:43

## Properties

### configurators

• **configurators**: [`IConfigurator`](../interfaces/index.IConfigurator.md)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:37

___

### fs

• **fs**: [`IFileSystem`](../interfaces/index.IFileSystem.md)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:38

___

### path

• **path**: `any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:39

___

### readFile

• **readFile**: `any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:40

## Methods

### load

▸ **load**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:44

▸ **load**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:45

▸ **load**(`aPath`, `aOptions`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:46

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:47

▸ **load**(`aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:48

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:49

▸ **loadSync**(`aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:50

___

### load

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:32

▸ **load**(`aPath`, `aOptions`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:33

▸ **load**(`aPath`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:34

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:35

___

### register

▸ **register**(`aExts`, `aProcess`, `aConfigurators?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aExts` | `string` \| `string`[] |
| `aProcess` | [`ConfigAsyncProcessFn`](../modules/index.md#configasyncprocessfn) |
| `aConfigurators?` | [`IConfigurator`](../interfaces/index.IConfigurator.md) |

#### Returns

`any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:29

___

### setFileSystem

▸ **setFileSystem**(`aFileSystem`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFileSystem` | [`IFileSystem`](../interfaces/index.IFileSystem.md) |

#### Returns

`any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:30
