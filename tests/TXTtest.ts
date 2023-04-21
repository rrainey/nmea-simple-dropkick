import "should";

import { assertPacketIs, parseNmeaSentence } from "../index";


describe("TXT", (): void => {

  it("parser", (): void => {
    const packet = parseNmeaSentence("$GNTXT,01,01,00,txbuf alloc*61");

    packet.should.have.property("sentenceId", "TXT");
    packet.should.have.property("sentenceName", "Message");
    packet.should.have.property("talkerId", "GN");
    packet.should.have.property("message", "txbuf alloc");
    packet.should.have.property("totalNumber", 1);
    packet.should.have.property("thisNumber", 1);
    packet.should.have.property("id", 1);
  });

});
