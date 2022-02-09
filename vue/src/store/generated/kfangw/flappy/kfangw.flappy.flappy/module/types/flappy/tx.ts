/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "kfangw.flappy.flappy";

export interface MsgCreateScore {
  creator: string;
  addr: string;
  score: string;
}

export interface MsgCreateScoreResponse {}

export interface MsgUpdateScore {
  creator: string;
  addr: string;
  score: string;
}

export interface MsgUpdateScoreResponse {}

export interface MsgDeleteScore {
  creator: string;
  addr: string;
}

export interface MsgDeleteScoreResponse {}

const baseMsgCreateScore: object = { creator: "", addr: "", score: "" };

export const MsgCreateScore = {
  encode(message: MsgCreateScore, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScore {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateScore } as MsgCreateScore;
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

  fromJSON(object: any): MsgCreateScore {
    const message = { ...baseMsgCreateScore } as MsgCreateScore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = String(object.score);
    } else {
      message.score = "";
    }
    return message;
  },

  toJSON(message: MsgCreateScore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateScore>): MsgCreateScore {
    const message = { ...baseMsgCreateScore } as MsgCreateScore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = "";
    }
    return message;
  },
};

const baseMsgCreateScoreResponse: object = {};

export const MsgCreateScoreResponse = {
  encode(_: MsgCreateScoreResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateScoreResponse } as MsgCreateScoreResponse;
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

  fromJSON(_: any): MsgCreateScoreResponse {
    const message = { ...baseMsgCreateScoreResponse } as MsgCreateScoreResponse;
    return message;
  },

  toJSON(_: MsgCreateScoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateScoreResponse>): MsgCreateScoreResponse {
    const message = { ...baseMsgCreateScoreResponse } as MsgCreateScoreResponse;
    return message;
  },
};

const baseMsgUpdateScore: object = { creator: "", addr: "", score: "" };

export const MsgUpdateScore = {
  encode(message: MsgUpdateScore, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScore {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateScore } as MsgUpdateScore;
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

  fromJSON(object: any): MsgUpdateScore {
    const message = { ...baseMsgUpdateScore } as MsgUpdateScore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = String(object.score);
    } else {
      message.score = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateScore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateScore>): MsgUpdateScore {
    const message = { ...baseMsgUpdateScore } as MsgUpdateScore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = "";
    }
    return message;
  },
};

const baseMsgUpdateScoreResponse: object = {};

export const MsgUpdateScoreResponse = {
  encode(_: MsgUpdateScoreResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateScoreResponse } as MsgUpdateScoreResponse;
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

  fromJSON(_: any): MsgUpdateScoreResponse {
    const message = { ...baseMsgUpdateScoreResponse } as MsgUpdateScoreResponse;
    return message;
  },

  toJSON(_: MsgUpdateScoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateScoreResponse>): MsgUpdateScoreResponse {
    const message = { ...baseMsgUpdateScoreResponse } as MsgUpdateScoreResponse;
    return message;
  },
};

const baseMsgDeleteScore: object = { creator: "", addr: "" };

export const MsgDeleteScore = {
  encode(message: MsgDeleteScore, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteScore {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteScore } as MsgDeleteScore;
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

  fromJSON(object: any): MsgDeleteScore {
    const message = { ...baseMsgDeleteScore } as MsgDeleteScore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteScore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteScore>): MsgDeleteScore {
    const message = { ...baseMsgDeleteScore } as MsgDeleteScore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseMsgDeleteScoreResponse: object = {};

export const MsgDeleteScoreResponse = {
  encode(_: MsgDeleteScoreResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteScoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteScoreResponse } as MsgDeleteScoreResponse;
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

  fromJSON(_: any): MsgDeleteScoreResponse {
    const message = { ...baseMsgDeleteScoreResponse } as MsgDeleteScoreResponse;
    return message;
  },

  toJSON(_: MsgDeleteScoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteScoreResponse>): MsgDeleteScoreResponse {
    const message = { ...baseMsgDeleteScoreResponse } as MsgDeleteScoreResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateScore(request: MsgCreateScore): Promise<MsgCreateScoreResponse>;
  UpdateScore(request: MsgUpdateScore): Promise<MsgUpdateScoreResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteScore(request: MsgDeleteScore): Promise<MsgDeleteScoreResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateScore(request: MsgCreateScore): Promise<MsgCreateScoreResponse> {
    const data = MsgCreateScore.encode(request).finish();
    const promise = this.rpc.request(
      "kfangw.flappy.flappy.Msg",
      "CreateScore",
      data
    );
    return promise.then((data) =>
      MsgCreateScoreResponse.decode(new Reader(data))
    );
  }

  UpdateScore(request: MsgUpdateScore): Promise<MsgUpdateScoreResponse> {
    const data = MsgUpdateScore.encode(request).finish();
    const promise = this.rpc.request(
      "kfangw.flappy.flappy.Msg",
      "UpdateScore",
      data
    );
    return promise.then((data) =>
      MsgUpdateScoreResponse.decode(new Reader(data))
    );
  }

  DeleteScore(request: MsgDeleteScore): Promise<MsgDeleteScoreResponse> {
    const data = MsgDeleteScore.encode(request).finish();
    const promise = this.rpc.request(
      "kfangw.flappy.flappy.Msg",
      "DeleteScore",
      data
    );
    return promise.then((data) =>
      MsgDeleteScoreResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
