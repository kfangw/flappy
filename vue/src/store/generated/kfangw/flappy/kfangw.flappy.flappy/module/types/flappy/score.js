/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "kfangw.flappy.flappy";
const baseScore = { addr: "", score: "", creator: "" };
export const Score = {
    encode(message, writer = Writer.create()) {
        if (message.addr !== "") {
            writer.uint32(10).string(message.addr);
        }
        if (message.score !== "") {
            writer.uint32(18).string(message.score);
        }
        if (message.creator !== "") {
            writer.uint32(26).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScore };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addr = reader.string();
                    break;
                case 2:
                    message.score = reader.string();
                    break;
                case 3:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScore };
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = String(object.addr);
        }
        else {
            message.addr = "";
        }
        if (object.score !== undefined && object.score !== null) {
            message.score = String(object.score);
        }
        else {
            message.score = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addr !== undefined && (obj.addr = message.addr);
        message.score !== undefined && (obj.score = message.score);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScore };
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = object.addr;
        }
        else {
            message.addr = "";
        }
        if (object.score !== undefined && object.score !== null) {
            message.score = object.score;
        }
        else {
            message.score = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
