/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "kfangw.flappy.flappy";
const baseMsgCreateScore = { creator: "", addr: "", score: "" };
export const MsgCreateScore = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.addr !== "") {
            writer.uint32(18).string(message.addr);
        }
        if (message.score !== "") {
            writer.uint32(26).string(message.score);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateScore };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.addr = reader.string();
                    break;
                case 3:
                    message.score = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateScore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.addr !== undefined && (obj.addr = message.addr);
        message.score !== undefined && (obj.score = message.score);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateScore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgCreateScoreResponse = {};
export const MsgCreateScoreResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateScoreResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateScoreResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateScoreResponse };
        return message;
    },
};
const baseMsgUpdateScore = { creator: "", addr: "", score: "" };
export const MsgUpdateScore = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.addr !== "") {
            writer.uint32(18).string(message.addr);
        }
        if (message.score !== "") {
            writer.uint32(26).string(message.score);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateScore };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.addr = reader.string();
                    break;
                case 3:
                    message.score = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateScore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.addr !== undefined && (obj.addr = message.addr);
        message.score !== undefined && (obj.score = message.score);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateScore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
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
        return message;
    },
};
const baseMsgUpdateScoreResponse = {};
export const MsgUpdateScoreResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateScoreResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateScoreResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateScoreResponse };
        return message;
    },
};
const baseMsgDeleteScore = { creator: "", addr: "" };
export const MsgDeleteScore = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.addr !== "") {
            writer.uint32(18).string(message.addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteScore };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteScore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = String(object.addr);
        }
        else {
            message.addr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.addr !== undefined && (obj.addr = message.addr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteScore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = object.addr;
        }
        else {
            message.addr = "";
        }
        return message;
    },
};
const baseMsgDeleteScoreResponse = {};
export const MsgDeleteScoreResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteScoreResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteScoreResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteScoreResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateScore(request) {
        const data = MsgCreateScore.encode(request).finish();
        const promise = this.rpc.request("kfangw.flappy.flappy.Msg", "CreateScore", data);
        return promise.then((data) => MsgCreateScoreResponse.decode(new Reader(data)));
    }
    UpdateScore(request) {
        const data = MsgUpdateScore.encode(request).finish();
        const promise = this.rpc.request("kfangw.flappy.flappy.Msg", "UpdateScore", data);
        return promise.then((data) => MsgUpdateScoreResponse.decode(new Reader(data)));
    }
    DeleteScore(request) {
        const data = MsgDeleteScore.encode(request).finish();
        const promise = this.rpc.request("kfangw.flappy.flappy.Msg", "DeleteScore", data);
        return promise.then((data) => MsgDeleteScoreResponse.decode(new Reader(data)));
    }
}
