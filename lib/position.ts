import { get } from "./data";
import { IPositionDataReceived } from "./type";

/**
 * Fetches all position data associated with a given wallet.
 * 
 * @param wallet - Wallet address (SuperOwner)
 * @returns Position data or null if not found
 */
export const fetchPositions = async (
    wallet: string,
    x_api_key: string
): Promise<IPositionDataReceived | null> => {
    const response = await get(`positions/v2?owner=${wallet}&ownershipType=SuperOwner`, x_api_key);

    if (response.status === 200) {
        const data: IPositionDataReceived = await response.json();
        return data;
    }

    return null;
};