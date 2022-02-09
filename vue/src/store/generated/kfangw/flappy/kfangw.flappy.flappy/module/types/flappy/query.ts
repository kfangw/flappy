/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../flappy/params";
import { Score } from "../flappy/score";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "kfangw.flappy.flappy";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetScoreRequest {
  addr: string;
}

export interface QueryGetScoreResponse {
  score: Score | undefined;
}

export interface QueryAllScoreRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllScoreResponse {
  score: Score[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetScoreRequest: object = { addr: "" };

export const QueryGetScoreRequest = {
  encode(
    message: QueryGetScoreRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScoreRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetScoreRequest } as QueryGetScoreRequest;
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

  fromJSON(object: any): QueryGetScoreRequest {
    const message = { ...baseQueryGetScoreRequest } as QueryGetScoreRequest;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: QueryGetScoreRequest): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetScoreRequest>): QueryGetScoreRequest {
    const message = { ...baseQueryGetScoreRequest } as QueryGetScoreRequest;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseQueryGetScoreResponse: object = {};

export const QueryGetScoreResponse = {
  encode(
    message: QueryGetScoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.score !== undefined) {
      Score.encode(message.score, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetScoreResponse } as QueryGetScoreResponse;
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

  fromJSON(object: any): QueryGetScoreResponse {
    const message = { ...baseQueryGetScoreResponse } as QueryGetScoreResponse;
    if (object.score !== undefined && object.score !== null) {
      message.score = Score.fromJSON(object.score);
    } else {
      message.score = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetScoreResponse): unknown {
    const obj: any = {};
    message.score !== undefined &&
      (obj.score = message.score ? Score.toJSON(message.score) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetScoreResponse>
  ): QueryGetScoreResponse {
    const message = { ...baseQueryGetScoreResponse } as QueryGetScoreResponse;
    if (object.score !== undefined && object.score !== null) {
      message.score = Score.fromPartial(object.score);
    } else {
      message.score = undefined;
    }
    return message;
  },
};

const baseQueryAllScoreRequest: object = {};

export const QueryAllScoreRequest = {
  encode(
    message: QueryAllScoreRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScoreRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllScoreRequest } as QueryAllScoreRequest;
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

  fromJSON(object: any): QueryAllScoreRequest {
    const message = { ...baseQueryAllScoreRequest } as QueryAllScoreRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllScoreRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllScoreRequest>): QueryAllScoreRequest {
    const message = { ...baseQueryAllScoreRequest } as QueryAllScoreRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllScoreResponse: object = {};

export const QueryAllScoreResponse = {
  encode(
    message: QueryAllScoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.score) {
      Score.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllScoreResponse } as QueryAllScoreResponse;
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

  fromJSON(object: any): QueryAllScoreResponse {
    const message = { ...baseQueryAllScoreResponse } as QueryAllScoreResponse;
    message.score = [];
    if (object.score !== undefined && object.score !== null) {
      for (const e of object.score) {
        message.score.push(Score.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllScoreResponse): unknown {
    const obj: any = {};
    if (message.score) {
      obj.score = message.score.map((e) => (e ? Score.toJSON(e) : undefined));
    } else {
      obj.score = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllScoreResponse>
  ): QueryAllScoreResponse {
    const message = { ...baseQueryAllScoreResponse } as QueryAllScoreResponse;
    message.score = [];
    if (object.score !== undefined && object.score !== null) {
      for (const e of object.score) {
        message.score.push(Score.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Score by index. */
  Score(request: QueryGetScoreRequest): Promise<QueryGetScoreResponse>;
  /** Queries a list of Score items. */
  ScoreAll(request: QueryAllScoreRequest): Promise<QueryAllScoreResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kfangw.flappy.flappy.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Score(request: QueryGetScoreRequest): Promise<QueryGetScoreResponse> {
    const data = QueryGetScoreRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kfangw.flappy.flappy.Query",
      "Score",
      data
    );
    return promise.then((data) =>
      QueryGetScoreResponse.decode(new Reader(data))
    );
  }

  ScoreAll(request: QueryAllScoreRequest): Promise<QueryAllScoreResponse> {
    const data = QueryAllScoreRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kfangw.flappy.flappy.Query",
      "ScoreAll",
      data
    );
    return promise.then((data) =>
      QueryAllScoreResponse.decode(new Reader(data))
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
