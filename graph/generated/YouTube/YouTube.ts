// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class VideoUploaded extends ethereum.Event {
  get params(): VideoUploaded__Params {
    return new VideoUploaded__Params(this);
  }
}

export class VideoUploaded__Params {
  _event: VideoUploaded;

  constructor(event: VideoUploaded) {
    this._event = event;
  }

  get videoId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get videothumbhash(): string {
    return this._event.parameters[1].value.toString();
  }

  get videohash(): string {
    return this._event.parameters[2].value.toString();
  }

  get title(): string {
    return this._event.parameters[3].value.toString();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get category(): string {
    return this._event.parameters[5].value.toString();
  }

  get videotype(): string {
    return this._event.parameters[6].value.toString();
  }

  get date(): string {
    return this._event.parameters[7].value.toString();
  }

  get user(): Address {
    return this._event.parameters[8].value.toAddress();
  }
}

export class YouTube__getVideoResultValue0Struct extends ethereum.Tuple {
  get videoId(): BigInt {
    return this[0].toBigInt();
  }

  get videothumbhash(): string {
    return this[1].toString();
  }

  get videohash(): string {
    return this[2].toString();
  }

  get title(): string {
    return this[3].toString();
  }

  get description(): string {
    return this[4].toString();
  }

  get category(): string {
    return this[5].toString();
  }

  get videotype(): string {
    return this[6].toString();
  }

  get date(): string {
    return this[7].toString();
  }

  get user(): Address {
    return this[8].toAddress();
  }
}

export class YouTube extends ethereum.SmartContract {
  static bind(address: Address): YouTube {
    return new YouTube("YouTube", address);
  }

  getVideo(_videoId: BigInt): YouTube__getVideoResultValue0Struct {
    let result = super.call(
      "getVideo",
      "getVideo(uint256):((uint256,string,string,string,string,string,string,string,address))",
      [ethereum.Value.fromUnsignedBigInt(_videoId)]
    );

    return changetype<YouTube__getVideoResultValue0Struct>(result[0].toTuple());
  }

  try_getVideo(
    _videoId: BigInt
  ): ethereum.CallResult<YouTube__getVideoResultValue0Struct> {
    let result = super.tryCall(
      "getVideo",
      "getVideo(uint256):((uint256,string,string,string,string,string,string,string,address))",
      [ethereum.Value.fromUnsignedBigInt(_videoId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<YouTube__getVideoResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class VideoUploadCall extends ethereum.Call {
  get inputs(): VideoUploadCall__Inputs {
    return new VideoUploadCall__Inputs(this);
  }

  get outputs(): VideoUploadCall__Outputs {
    return new VideoUploadCall__Outputs(this);
  }
}

export class VideoUploadCall__Inputs {
  _call: VideoUploadCall;

  constructor(call: VideoUploadCall) {
    this._call = call;
  }

  get _videothumbhash(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _videohash(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _category(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _videotype(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _date(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class VideoUploadCall__Outputs {
  _call: VideoUploadCall;

  constructor(call: VideoUploadCall) {
    this._call = call;
  }
}
