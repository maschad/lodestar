import {phase0, Root, Slot} from "@chainsafe/lodestar-types";
import {CachedBeaconState} from "@chainsafe/lodestar-beacon-state-transition";

/**
 * Regenerates states that have already been processed by the fork choice
 */
export interface IStateRegenerator {
  /**
   * Return a valid pre-state for a beacon block
   * This will always return a state in the latest viable epoch
   */
  getPreState: (block: phase0.BeaconBlock) => Promise<CachedBeaconState<phase0.BeaconState>>;

  /**
   * Return a valid checkpoint state
   * This will always return a state with `state.slot % SLOTS_PER_EPOCH === 0`
   */
  getCheckpointState: (cp: phase0.Checkpoint) => Promise<CachedBeaconState<phase0.BeaconState>>;

  /**
   * Return the state of `blockRoot` processed to slot `slot`
   */
  getBlockSlotState: (blockRoot: Root, slot: Slot) => Promise<CachedBeaconState<phase0.BeaconState>>;

  /**
   * Return the exact state with `stateRoot`
   */
  getState: (stateRoot: Root) => Promise<CachedBeaconState<phase0.BeaconState>>;
}
