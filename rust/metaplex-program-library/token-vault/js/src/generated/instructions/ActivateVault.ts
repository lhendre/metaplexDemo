/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { NumberOfShareArgs, numberOfShareArgsBeet } from '../types/NumberOfShareArgs';

/**
 * @category Instructions
 * @category ActivateVault
 * @category generated
 */
export type ActivateVaultInstructionArgs = {
  numberOfShareArgs: NumberOfShareArgs;
};
/**
 * @category Instructions
 * @category ActivateVault
 * @category generated
 */
const ActivateVaultStruct = new beet.BeetArgsStruct<
  ActivateVaultInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['numberOfShareArgs', numberOfShareArgsBeet],
  ],
  'ActivateVaultInstructionArgs',
);
/**
 * Accounts required by the _ActivateVault_ instruction
 *
 * @property [_writable_] vault Initialized inactivated fractionalized token vault
 * @property [_writable_] fractionMint Fraction mint
 * @property [_writable_] fractionTreasury Fraction treasury
 * @property [] fractionMintAuthority Fraction mint authority for the program - seed of [PREFIX, program_id]
 * @property [**signer**] vaultAuthority Authority on the vault
 * @category Instructions
 * @category ActivateVault
 * @category generated
 */
export type ActivateVaultInstructionAccounts = {
  vault: web3.PublicKey;
  fractionMint: web3.PublicKey;
  fractionTreasury: web3.PublicKey;
  fractionMintAuthority: web3.PublicKey;
  vaultAuthority: web3.PublicKey;
};

const activateVaultInstructionDiscriminator = 2;

/**
 * Creates a _ActivateVault_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ActivateVault
 * @category generated
 */
export function createActivateVaultInstruction(
  accounts: ActivateVaultInstructionAccounts,
  args: ActivateVaultInstructionArgs,
) {
  const { vault, fractionMint, fractionTreasury, fractionMintAuthority, vaultAuthority } = accounts;

  const [data] = ActivateVaultStruct.serialize({
    instructionDiscriminator: activateVaultInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: fractionMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: fractionTreasury,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: fractionMintAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: vaultAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn'),
    keys,
    data,
  });
  return ix;
}
