import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../flappy/params";
import { Score } from "../flappy/score";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "kfangw.flappy.flappy";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetScoreRequest: {
    encode(message: QueryGetScoreRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScoreRequest;
    fromJSON(object: any): QueryGetScoreRequest;
    toJSON(message: QueryGetScoreRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetScoreRequest>): QueryGetScoreRequest;
};
export declare const QueryGetScoreResponse: {
    encode(message: QueryGetScoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScoreResponse;
    fromJSON(object: any): QueryGetScoreResponse;
    toJSON(message: QueryGetScoreResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetScoreResponse>): QueryGetScoreResponse;
};
export declare const QueryAllScoreRequest: {
    encode(message: QueryAllScoreRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScoreRequest;
    fromJSON(object: any): QueryAllScoreRequest;
    toJSON(message: QueryAllScoreRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllScoreRequest>): QueryAllScoreRequest;
};
export declare const QueryAllScoreResponse: {
    encode(message: QueryAllScoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScoreResponse;
    fromJSON(object: any): QueryAllScoreResponse;
    toJSON(message: QueryAllScoreResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllScoreResponse>): QueryAllScoreResponse;
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Score(request: QueryGetScoreRequest): Promise<QueryGetScoreResponse>;
    ScoreAll(request: QueryAllScoreRequest): Promise<QueryAllScoreResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
