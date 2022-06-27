/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
export type ConfigLine = {
  name: string;
  uri: string;
};

/**
 * @category userTypes
 * @category generated
 */
export const configLineBeet = new beet.FixableBeetArgsStruct<ConfigLine>(
  [
    ['name', beet.utf8String],
    ['uri', beet.utf8String],
  ],
  'ConfigLine',
);
