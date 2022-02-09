import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kfangw.flappy.flappy";
export interface MsgCreateScore {
    creator: string;
    addr: string;
    score: string;
}
export interface MsgCreateScoreResponse {
}
export interface MsgUpdateScore {
    creator: string;
    addr: string;
    score: string;
}
export interface MsgUpdateScoreResponse {
}
export interface MsgDeleteScore {
    creator: string;
    addr: string;
}
export interface MsgDeleteScoreResponse {
}
export declare const MsgCreateScore: {
    encode(message: MsgCreateScore, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateScore;
    fromJSON(object: any): MsgCreateScore;
    toJSON(message: MsgCreateScore): unknown;
    fromPartial(object: DeepPartial<MsgCreateScore>): MsgCreateScore;
};
export declare const MsgCreateScoreResponse: {
    encode(_: MsgCreateScoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateScoreResponse;
    fromJSON(_: any): MsgCreateScoreResponse;
    toJSON(_: MsgCreateScoreResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateScoreResponse>): MsgCreateScoreResponse;
};
export declare const MsgUpdateScore: {
    encode(message: MsgUpdateScore, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateScore;
    fromJSON(object: any): MsgUpdateScore;
    toJSON(message: MsgUpdateScore): unknown;
    fromPartial(object: DeepPartial<MsgUpdateScore>): MsgUpdateScore;
};
export declare const MsgUpdateScoreResponse: {
    encode(_: MsgUpdateScoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateScoreResponse;
    fromJSON(_: any): MsgUpdateScoreResponse;
    toJSON(_: MsgUpdateScoreResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateScoreResponse>): MsgUpdateScoreResponse;
};
export declare const MsgDeleteScore: {
    encode(message: MsgDeleteScore, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteScore;
    fromJSON(object: any): MsgDeleteScore;
    toJSON(message: MsgDeleteScore): unknown;
    fromPartial(object: DeepPartial<MsgDeleteScore>): MsgDeleteScore;
};
export declare const MsgDeleteScoreResponse: {
    encode(_: MsgDeleteScoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteScoreResponse;
    fromJSON(_: any): MsgDeleteScoreResponse;
    toJSON(_: MsgDeleteScoreResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteScoreResponse>): MsgDeleteScoreResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateScore(request: MsgCreateScore): Promise<MsgCreateScoreResponse>;
    UpdateScore(request: MsgUpdateScore): Promise<MsgUpdateScoreResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteScore(request: MsgDeleteScore): Promise<MsgDeleteScoreResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateScore(request: MsgCreateScore): Promise<MsgCreateScoreResponse>;
    UpdateScore(request: MsgUpdateScore): Promise<MsgUpdateScoreResponse>;
    DeleteScore(request: MsgDeleteScore): Promise<MsgDeleteScoreResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
