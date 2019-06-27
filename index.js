"use strict";
exports.__esModule = true;
var convert_size_1 = require("convert-size");
function convertStatus(status) {
    var size = convert_size_1.convertSize(status.size);
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
        deviceIdentifier: deviceIdentifier,
        groupIdentifier: groupIdentifier,
        Inode: Inode,
        hardLinks: hardLinks,
        userIdentifier: userIdentifier,
        size: size,
        accessedAt: accessedAt,
        modifiedAt: modifiedAt,
        changedAt: changedAt,
        createdAt: createdAt,
        deviceID: deviceID,
        isOtherExecuteable: isOtherExecuteable,
        isOtherReadable: isOtherReadable,
        isOtherWriteable: isOtherWriteable,
        isGroupExecuteable: isGroupExecuteable,
        isGroupReadable: isGroupReadable,
        isGroupWriteable: isGroupWriteable,
        isOwnerReadable: isOwnerReadable,
        isOwnerWriteable: isOwnerWriteable,
        isOwnerExecuteable: isOwnerExecuteable,
        blockSize: blockSize,
        blocks: blocks,
        isBlockDevice: isBlockDevice,
        isFIFO: isFIFO,
        isDirectory: isDirectory,
        isFile: isFile,
        isCharacterDevice: isCharacterDevice,
        isSocket: isSocket,
        isSymbolicLink: isSymbolicLink
    };
}
exports.convertStatus = convertStatus;
