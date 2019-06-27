# convertStatus
[![npm version](https://img.shields.io/static/v1.svg?label=npm%20version&message=1.0.0&color=green)](https://www.npmjs.com/package/convertStatus)
[![LICENSE](https://img.shields.io/static/v1.svg?label=LICENSE&message=MIT&color=green)](https://github.com/AliBasicCoder/convertStatus/blob/master/LICENSE)

convertStatus is just a simple package to convert 
fs.Stats objects to more understandable objects

## installation
```
npm i convertStatus
```

## Stats attrs

<!--

 -----------------------------------------------------------------------------------
| name                | type    | decription                                         |
| :-----:             | :----:  | :--------------------------------------:           |
| size                | string  | the size of the file                               |
| accessedAt          | Date    | the date when the file was last accessed           |
| modifiedAt          | Date    | the date when the file was last modiefied          | 
| changedAt           | Date    | the date when the file was last changed            |
| createdAt           | Date    | the date when the file was created                 | 
| deviceID            | number  | the device id                                      |
| isOtherExecuteable: | boolean | it's true when the file is others executeable      | 
| isOtherReadable     | boolean | it's true when the file is others readable         |
| isOtherWriteable    | boolean | it's true when the file is others writeable        | 
    isGroupExecuteable: boolean;
    isGroupReadable: boolean;
    isGroupWriteable: boolean;
    isOwnerReadable: boolean;
    isOwnerWriteable: boolean;
    isOwnerExecuteable: boolean;
    blockSize: number;
    blocks: number;
    isFile: boolean;
    isDirectory: boolean;
    isBlockDevice: boolean;
    isCharacterDevice: boolean;
    isSymbolicLink: boolean;
    isFIFO: boolean;
    isSocket: boolean;
    deviceIdentifier: number;
    groupIdentifier: number;
    Inode: number;
    hardLinks: number;
    userIdentifier: number; -->
``` js
interface Status {
    size: string;
    accessedAt: Date,
    modifiedAt: Date;
    changedAt: Date;
    createdAt: Date;
    deviceID: number;
    isOtherExecuteable: boolean;
    isOtherReadable: boolean;
    isOtherWriteable: boolean;
    isGroupExecuteable: boolean;
    isGroupReadable: boolean;
    isGroupWriteable: boolean;
    isOwnerReadable: boolean;
    isOwnerWriteable: boolean;
    isOwnerExecuteable: boolean;
    blockSize: number;
    blocks: number;
    isFile: boolean;
    isDirectory: boolean;
    isBlockDevice: boolean;
    isCharacterDevice: boolean;
    isSymbolicLink: boolean;
    isFIFO: boolean;
    isSocket: boolean;
    deviceIdentifier: number;
    groupIdentifier: number;
    Inode: number;
    hardLinks: number;
    userIdentifier: number;
}
```
## examples
``` js
const { convertStatus } from 'convert-status';
// or
import convertStatus from 'convert-status';

import * as fs from 'fs'

var oldStatus =  fs.statSync('path');
var newStatus = convertStatus(oldStatus);

console.log(newStatus);
```

## License
MIT License

Copyright (c) 2019 AliBasicCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
