[load-config-folder](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / FolderConfig

# Class: FolderConfig

[index](../modules/index.md).FolderConfig

## Hierarchy

- [`Config`](index.Config.md)

  ↳ **`FolderConfig`**

## Table of contents

### Constructors

- [constructor](index.FolderConfig.md#constructor)

### Properties

- [configurators](index.FolderConfig.md#configurators)
- [fs](index.FolderConfig.md#fs)
- [path](index.FolderConfig.md#path)
- [readFile](index.FolderConfig.md#readfile)

### Methods

- [addConfig](index.FolderConfig.md#addconfig)
- [load](index.FolderConfig.md#load)
- [loadSync](index.FolderConfig.md#loadsync)
- [addConfig](index.FolderConfig.md#addconfig-1)
- [load](index.FolderConfig.md#load-1)
- [loadSync](index.FolderConfig.md#loadsync-1)
- [register](index.FolderConfig.md#register)
- [setFileSystem](index.FolderConfig.md#setfilesystem)

## Constructors

### constructor

• **new FolderConfig**(`aOptions?`): [`FolderConfig`](index.FolderConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`FolderConfig`](index.FolderConfig.md)

#### Inherited from

[Config](index.Config.md).[constructor](index.Config.md#constructor)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:42

• **new FolderConfig**(`aPath`, `aOptions?`): [`FolderConfig`](index.FolderConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`FolderConfig`](index.FolderConfig.md)

#### Inherited from

[Config](index.Config.md).[constructor](index.Config.md#constructor)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:43

## Properties

### configurators

• **configurators**: [`IConfigurator`](../interfaces/index.IConfigurator.md)

#### Inherited from

[Config](index.Config.md).[configurators](index.Config.md#configurators)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:37

___

### fs

• **fs**: [`IFileSystem`](../interfaces/index.IFileSystem.md)

#### Inherited from

[Config](index.Config.md).[fs](index.Config.md#fs)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:38

___

### path

• **path**: `any`

#### Inherited from

[Config](index.Config.md).[path](index.Config.md#path)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:39

___

### readFile

• **readFile**: `any`

#### Inherited from

[Config](index.Config.md).[readFile](index.Config.md#readfile)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:40

## Methods

### addConfig

▸ **addConfig**(`aFile`, `aOptions?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFile` | `string` \| `string`[] |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`number`

#### Defined in

[src/index.d.ts:13](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.d.ts#L13)

___

### load

▸ **load**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:44

▸ **load**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load)

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

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load)

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

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:47

▸ **load**(`aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load)

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

#### Inherited from

[Config](index.Config.md).[loadSync](index.Config.md#loadsync)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:49

▸ **loadSync**(`aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Inherited from

[Config](index.Config.md).[loadSync](index.Config.md#loadsync)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:50

___

### addConfig

▸ **addConfig**(`aFile`, `aConfigFiles?`): `number`

add one or more config file basename

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aFile` | `string` \| `string`[] | the config file basename |
| `aConfigFiles?` | `string`[] | optional files configuration |

#### Returns

`number`

return added file count.

#### Defined in

[src/index.d.ts:11](https://github.com/snowyu/load-config-folder.js/blob/ca9da6daf662549b5b6aa0240c97e16bcf572e0a/src/index.d.ts#L11)

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

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load-1)

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

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load-1)

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

#### Inherited from

[Config](index.Config.md).[load](index.Config.md#load-1)

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

#### Inherited from

[Config](index.Config.md).[loadSync](index.Config.md#loadsync-1)

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

#### Inherited from

[Config](index.Config.md).[register](index.Config.md#register)

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

#### Inherited from

[Config](index.Config.md).[setFileSystem](index.Config.md#setfilesystem)

#### Defined in

node_modules/load-config-file/lib/index.d.ts:30
