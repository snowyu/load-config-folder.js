[load-config-folder](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [Config](../classes/index.Config.md)
- [FolderConfig](../classes/index.FolderConfig.md)

### Interfaces

- [IConfigOptions](../interfaces/index.IConfigOptions.md)
- [IConfigurator](../interfaces/index.IConfigurator.md)
- [IFileSystem](../interfaces/index.IFileSystem.md)

### Type Aliases

- [ConfigAsyncProcessFn](index.md#configasyncprocessfn)
- [ConfigCallBackFn](index.md#configcallbackfn)
- [ConfigProcessFn](index.md#configprocessfn)

### Functions

- [default](index.md#default)

## Type Aliases

### ConfigAsyncProcessFn

Ƭ **ConfigAsyncProcessFn**: (`content`: `string`, `aOptions`: [`IConfigOptions`](../interfaces/index.IConfigOptions.md), `aCfgPath`: `string`) => `any` \| `Promise`\<`any`\>

#### Type declaration

▸ (`content`, `aOptions`, `aCfgPath`): `any` \| `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `aCfgPath` | `string` |

##### Returns

`any` \| `Promise`\<`any`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:5

___

### ConfigCallBackFn

Ƭ **ConfigCallBackFn**: (`error`: `Error`, `content`: `any`) => `void`

#### Type declaration

▸ (`error`, `content`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `content` | `any` |

##### Returns

`void`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:3

___

### ConfigProcessFn

Ƭ **ConfigProcessFn**: (`content`: `string`, `aOptions`: [`IConfigOptions`](../interfaces/index.IConfigOptions.md), `aCfgPath`: `string`) => `any`

#### Type declaration

▸ (`content`, `aOptions`, `aCfgPath`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `aCfgPath` | `string` |

##### Returns

`any`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:4

## Functions

### default

▸ **default**(`aPath`, `aOptions`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | [`ConfigCallBackFn`](index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[src/index.d.ts:16](https://github.com/snowyu/load-config-folder.js/blob/9c89b9138b058380408a821215c57069704534f7/src/index.d.ts#L16)

▸ **default**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[src/index.d.ts:17](https://github.com/snowyu/load-config-folder.js/blob/9c89b9138b058380408a821215c57069704534f7/src/index.d.ts#L17)

▸ **default**(`aPath`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |

#### Returns

`any`

#### Defined in

[src/index.d.ts:18](https://github.com/snowyu/load-config-folder.js/blob/9c89b9138b058380408a821215c57069704534f7/src/index.d.ts#L18)

▸ **default**(`aPath`, `aOptions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[src/index.d.ts:19](https://github.com/snowyu/load-config-folder.js/blob/9c89b9138b058380408a821215c57069704534f7/src/index.d.ts#L19)

▸ **default**(`aPath`, `aOptions`, `isAsync`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `isAsync` | ``true`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/index.d.ts:20](https://github.com/snowyu/load-config-folder.js/blob/9c89b9138b058380408a821215c57069704534f7/src/index.d.ts#L20)

▸ **default**(`aPath`, `isAsync`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `isAsync` | ``true`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/index.d.ts:21](https://github.com/snowyu/load-config-folder.js/blob/9c89b9138b058380408a821215c57069704534f7/src/index.d.ts#L21)
