/* eslint-disable */
import { Params } from "../flappy/params";
import { Score } from "../flappy/score";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "kfangw.flappy.flappy";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.scoreList) {
            Score.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.scoreList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.scoreList.push(Score.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.scoreList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.scoreList !== undefined && object.scoreList !== null) {
            for (const e of object.scoreList) {
                message.scoreList.push(Score.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.scoreList) {
            obj.scoreList = message.scoreList.map((e) => e ? Score.toJSON(e) : undefined);
        }
        else {
            obj.scoreList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.scoreList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.scoreList !== undefined && object.scoreList !== null) {
            for (const e of object.scoreList) {
                message.scoreList.push(Score.fromPartial(e));
            }
        }
        return message;
    },
};
