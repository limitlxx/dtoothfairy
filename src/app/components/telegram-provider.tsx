import { ArgentTMA, type SessionAccountInterface } from '@argent/tma-wallet';
import type { Call, Contract } from 'starknet'; 

export const initWallet = (contractAddress: string) =>
  ArgentTMA.init({
    environment: 'sepolia',
    appName: 'Argent TMA',
    appTelegramUrl: 'https://t.me/testy_afriquatz_bot/mytestargent',
    sessionParams: {
      allowedMethods: [
        { contract: contractAddress, selector: 'feed' },
        { contract: contractAddress, selector: 'play' },
        { contract: contractAddress, selector: 'rest' },
        { contract: contractAddress, selector: 'set_stats_to_half' },
      ],
      validityDays: 90,
    },
  });

export async function executeContractAction(
  contract: Contract,
  account: SessionAccountInterface,
  argentTMA: ArgentTMA,
  action: string,
//   successMessage: string,
//   errorMessage: string
) {
  const call: Call = {
    contractAddress: contract.address,
    entrypoint: action,
    calldata: [],
  };

  try {
    const fees = await account?.estimateInvokeFee([call]);
    const tx = await contract[action]({
      maxFee: fees?.suggestedMaxFee ? BigInt(1000000000000000000).toString() : undefined,
    });
    await argentTMA.provider.waitForTransaction(tx.transaction_hash);
    // toast.success(successMessage);
    return true;
  } catch (error) {
    console.error(`Error performing ${action}:`, error);
    // toast.error(errorMessage);
    return false;
  }
}