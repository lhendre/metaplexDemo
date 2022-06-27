/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { Creator, creatorBeet } from '../types/Creator';

/**
 * Arguments used to create {@link PrimaryMetadataCreators}
 * @category Accounts
 * @category generated
 */
export type PrimaryMetadataCreatorsArgs = {
  creators: Creator[];
};

const primaryMetadataCreatorsDiscriminator = [66, 131, 48, 36, 100, 130, 177, 11];
/**
 * Holds the data for the {@link PrimaryMetadataCreators} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class PrimaryMetadataCreators implements PrimaryMetadataCreatorsArgs {
  private constructor(readonly creators: Creator[]) {}

  /**
   * Creates a {@link PrimaryMetadataCreators} instance from the provided args.
   */
  static fromArgs(args: PrimaryMetadataCreatorsArgs) {
    return new PrimaryMetadataCreators(args.creators);
  }

  /**
   * Deserializes the {@link PrimaryMetadataCreators} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [PrimaryMetadataCreators, number] {
    return PrimaryMetadataCreators.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link PrimaryMetadataCreators} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<PrimaryMetadataCreators> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find PrimaryMetadataCreators account at ${address}`);
    }
    return PrimaryMetadataCreators.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link PrimaryMetadataCreators} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [PrimaryMetadataCreators, number] {
    return primaryMetadataCreatorsBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link PrimaryMetadataCreators} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return primaryMetadataCreatorsBeet.serialize({
      accountDiscriminator: primaryMetadataCreatorsDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link PrimaryMetadataCreators} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: PrimaryMetadataCreatorsArgs) {
    const instance = PrimaryMetadataCreators.fromArgs(args);
    return primaryMetadataCreatorsBeet.toFixedFromValue({
      accountDiscriminator: primaryMetadataCreatorsDiscriminator,
      ...instance,
    }).byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link PrimaryMetadataCreators} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: PrimaryMetadataCreatorsArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      PrimaryMetadataCreators.byteSize(args),
      commitment,
    );
  }

  /**
   * Returns a readable version of {@link PrimaryMetadataCreators} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      creators: this.creators,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const primaryMetadataCreatorsBeet = new beet.FixableBeetStruct<
  PrimaryMetadataCreators,
  PrimaryMetadataCreatorsArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['creators', beet.array(creatorBeet)],
  ],
  PrimaryMetadataCreators.fromArgs,
  'PrimaryMetadataCreators',
);
