[load-config-folder](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / IFileSystem

# Interface: IFileSystem

[index](../modules/index.md).IFileSystem

## Table of contents

### Methods

- [readFile](index.IFileSystem.md#readfile)
- [readFileAsync](index.IFileSystem.md#readfileasync)
- [readFileSync](index.IFileSystem.md#readfilesync)

## Methods

### readFile

▸ **readFile**(`path`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `BufferEncoding` \| `IReadFileOptions` |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:21

▸ **readFile**(`path`, `options`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `BufferEncoding` \| `IReadFileOptions` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:22

▸ **readFile**(`path`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:23

___

### readFileAsync

▸ **readFileAsync**(`path`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `BufferEncoding` \| `IReadFileOptions` |

#### Returns

`Promise`\<`string`\>

#### Defined in

node_modules/load-config-file/lib/index.d.ts:25

___

### readFileSync

▸ **readFileSync**(`path`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `BufferEncoding` \| `IReadFileOptions` |

#### Returns

`string`

#### Defined in

node_modules/load-config-file/lib/index.d.ts:24
