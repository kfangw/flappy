import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kfangw.flappy.flappy";
export interface Score {
    addr: string;
    score: string;
    creator: string;
}
export declare const Score: {
    encode(message: Score, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Score;
    fromJSON(object: any): Score;
    toJSON(message: Score): unknown;
    fromPartial(object: DeepPartial<Score>): Score;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
