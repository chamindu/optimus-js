// Type definitions for optimus-js
// Project: https://github.com/chamindu/optimus-js
// Definitions by: poison <https://github.com/poison>

declare class Optimus {
  constructor(prime: number, inverse: number, random: number);

  encode(num: number): number;
  decode(num: number): number;

  static noConflict(): Optimus;
}

export default Optimus;
