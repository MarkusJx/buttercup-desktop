import { BiometricProvider } from "./BiometricProvider";
import { VaultSourceID } from "buttercup";
import { Layerr } from "layerr";

export default class DummyBiometricProvider implements BiometricProvider {
    public async disableSourceBiometricUnlock(sourceID: VaultSourceID): Promise<void> {
        throw new Layerr("Biometrics are not supported on your system");
    }

    public async getSourcePasswordViaBiometrics(sourceID: VaultSourceID): Promise<string> {
        throw new Layerr("Biometrics are not supported on your system");
    }

    public async sourceEnabledForBiometricUnlock(sourceID: VaultSourceID): Promise<boolean> {
        throw new Layerr("Biometrics are not supported on your system");
    }

    public async storePassword(sourceID: VaultSourceID, password: string): Promise<void> {
        throw new Layerr("Biometrics are not supported on your system");
    }

    public async supportsBiometricUnlock(): Promise<boolean> {
        return false;
    }
}
