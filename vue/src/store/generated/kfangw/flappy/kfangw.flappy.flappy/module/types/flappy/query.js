/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../flappy/params";
import { Score } from "../flappy/score";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "kfangw.flappy.flappy";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetScoreRequest = { addr: "" };
export const QueryGetScoreRequest = {
    encode(message, writer = Writer.create()) {
        if (message.addr !== "") {
            writer.uint32(10).string(message.addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetScoreRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseQueryGetScoreRequest };
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
        message.addr !== undefined && (obj.addr = message.addr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetScoreRequest };
        if (object.addr !== undefined && object.addr !== null) {
            message.addr = object.addr;
        }
        else {
            message.addr = "";
        }
        return message;
    },
};
const baseQueryGetScoreResponse = {};
export const QueryGetScoreResponse = {
    encode(message, writer = Writer.create()) {
        if (message.score !== undefined) {
            Score.encode(message.score, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetScoreResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.score = Score.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetScoreResponse };
        if (object.score !== undefined && object.score !== null) {
            message.score = Score.fromJSON(object.score);
        }
        else {
            message.score = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.score !== undefined &&
            (obj.score = message.score ? Score.toJSON(message.score) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetScoreResponse };
        if (object.score !== undefined && object.score !== null) {
            message.score = Score.fromPartial(object.score);
        }
        else {
            message.score = undefined;
        }
        return message;
    },
};
const baseQueryAllScoreRequest = {};
export const QueryAllScoreRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllScoreRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllScoreRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllScoreRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllScoreResponse = {};
export const QueryAllScoreResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.score) {
            Score.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllScoreResponse };
        message.score = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.score.push(Score.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllScoreResponse };
        message.score = [];
        if (object.score !== undefined && object.score !== null) {
            for (const e of object.score) {
                message.score.push(Score.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.score) {
            obj.score = message.score.map((e) => (e ? Score.toJSON(e) : undefined));
        }
        else {
            obj.score = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllScoreResponse };
        message.score = [];
        if (object.score !== undefined && object.score !== null) {
            for (const e of object.score) {
                message.score.push(Score.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kfangw.flappy.flappy.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    Score(request) {
        const data = QueryGetScoreRequest.encode(request).finish();
        const promise = this.rpc.request("kfangw.flappy.flappy.Query", "Score", data);
        return promise.then((data) => QueryGetScoreResponse.decode(new Reader(data)));
    }
    ScoreAll(request) {
        const data = QueryAllScoreRequest.encode(request).finish();
        const promise = this.rpc.request("kfangw.flappy.flappy.Query", "ScoreAll", data);
        return promise.then((data) => QueryAllScoreResponse.decode(new Reader(data)));
    }
}
