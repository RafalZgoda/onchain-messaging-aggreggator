import { type WalletClient, getWalletClient } from "@wagmi/core";
import { providers } from "ethers";

export function walletClientToSigner(
  walletClient: WalletClient
): providers.JsonRpcSigner {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  // @ts-ignore
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner({
  chainId,
}: { chainId?: number } = {}): Promise<providers.JsonRpcSigner | undefined> {
  const walletClient = await getWalletClient({ chainId });
  if (!walletClient) return undefined;
  return walletClientToSigner(walletClient);
}
