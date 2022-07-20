export const ZERO_HASH = Buffer.alloc(32, 0);
export const EMPTY_SIGNATURE = Buffer.alloc(96, 0);
export const SECONDS_PER_DAY = 86400;
export const BASE_REWARDS_PER_EPOCH = 4;
export const G2_POINT_AT_INFINITY = Buffer.from(
  "c000000000000000000000000000000000000000000000000000000000000000" +
    "0000000000000000000000000000000000000000000000000000000000000000" +
    "0000000000000000000000000000000000000000000000000000000000000000",
  "hex"
);