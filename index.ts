import { convertSize } from "convert-size";
import * as fs from "fs";

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


export function convertStatus(status: fs.Stats): Status {
    var size = convertSize(status.size);
    var accessedAt = status.atime;
    var modifiedAt = status.mtime;
    var changedAt = status.ctime;
    var createdAt = status.birthtime;
    var deviceID = status.dev;
    var isOtherExecuteable = status.mode & 1 ? true : false;
    var isOtherWriteable = status.mode & 2 ? true : false;
    var isOtherReadable = status.mode & 4 ? true : false;
    var isGroupExecuteable = status.mode & 10 ? true : false;
    var isGroupWriteable = status.mode & 20 ? true : false;
    var isGroupReadable = status.mode & 40 ? true : false;
    var isOwnerExecuteable = status.mode & 100 ? true : false;
    var isOwnerWriteable = status.mode & 200 ? true : false;
    var isOwnerReadable = status.mode & 400 ? true : false;
    var blockSize = status.blksize;
    var blocks = status.blocks;
    var isSocket = status.isSocket();
    var isSymbolicLink = status.isSymbolicLink();
    var isFIFO = status.isFIFO();
    var isCharacterDevice = status.isCharacterDevice();
    var isBlockDevice = status.isBlockDevice();
    var isDirectory = status.isDirectory();
    var isFile = status.isFile();
    var userIdentifier = status.uid;
    var hardLinks = status.nlink;
    var Inode = status.ino;
    var groupIdentifier = status.gid;
    var deviceIdentifier = status.rdev;
    return {
        deviceIdentifier,
        groupIdentifier,
        Inode,
        hardLinks,
        userIdentifier,
        size,
        accessedAt,
        modifiedAt,
        changedAt,
        createdAt,
        deviceID,
        isOtherExecuteable,
        isOtherReadable,
        isOtherWriteable,
        isGroupExecuteable,
        isGroupReadable,
        isGroupWriteable,
        isOwnerReadable,
        isOwnerWriteable,
        isOwnerExecuteable,
        blockSize,
        blocks,
        isBlockDevice,
        isFIFO,
        isDirectory,
        isFile,
        isCharacterDevice,
        isSocket,
        isSymbolicLink
    }
}