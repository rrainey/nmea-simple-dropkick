/*
 * === TXT - MESSAGE sentence ===
 *
 * ------------------------------------------------------------------------------
 *         1  2  3  4
 *         |  |  |  |
 * $--TXT,xx,xx,xx,MESSAGE TEXT*hh<CR><LF>
 * ------------------------------------------------------------------------------
 *
 * Field Number:
 * 1. total number of message sentences in this group
 * 2. sequence number of this message in this group
 * 3. ID of this message
 * 4. MESSAGE TEXT
 * 5. Checksum
 */


import { parseIntSafe } from "../helpers";
import { initStubFields, PacketStub } from "./PacketStub";

export const sentenceId: "TXT" = "TXT";
export const sentenceName = "Message";

export interface TXTPacket extends PacketStub<typeof sentenceId> {
    totalNumber: number;
    thisNumber: number;
    id: number;
    message: string;
}

export function decodeSentence(stub: PacketStub, fields: string[]): TXTPacket {
    return {
        ...initStubFields(stub, sentenceId, sentenceName),
        totalNumber: parseIntSafe(fields[1]),
        thisNumber: parseIntSafe(fields[2]),
        id: parseIntSafe(fields[3]),
        message: fields[4]
    };
}
