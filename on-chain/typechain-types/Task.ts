/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface TaskInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bestAgent"
      | "bestAgentOwner"
      | "bestScore"
      | "creationBlock"
      | "description"
      | "evaluateAgent"
      | "incentive"
      | "incentiveBlocksDuration"
      | "incentivesFullyPaid"
      | "owner"
      | "parseString"
      | "pricePerExecution"
      | "remainingIncentive"
      | "setCriticAddress"
      | "submissionBlock"
      | "submitAgent"
      | "testCases"
      | "useAgent"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bestAgent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bestAgentOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bestScore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "creationBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "evaluateAgent",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "incentive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incentiveBlocksDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "incentivesFullyPaid",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "parseString", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pricePerExecution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "remainingIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCriticAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submissionBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitAgent",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testCases",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "useAgent", values: [string]): string;

  decodeFunctionResult(functionFragment: "bestAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bestAgentOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bestScore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creationBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "evaluateAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "incentive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incentiveBlocksDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incentivesFullyPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parseString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePerExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remainingIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCriticAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submissionBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testCases", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "useAgent", data: BytesLike): Result;
}

export interface Task extends BaseContract {
  connect(runner?: ContractRunner | null): Task;
  waitForDeployment(): Promise<this>;

  interface: TaskInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bestAgent: TypedContractMethod<[], [string], "view">;

  bestAgentOwner: TypedContractMethod<[], [string], "view">;

  bestScore: TypedContractMethod<[], [bigint], "view">;

  creationBlock: TypedContractMethod<[], [bigint], "view">;

  description: TypedContractMethod<[], [string], "view">;

  evaluateAgent: TypedContractMethod<[agent: AddressLike], [bigint], "view">;

  incentive: TypedContractMethod<[], [bigint], "view">;

  incentiveBlocksDuration: TypedContractMethod<[], [bigint], "view">;

  incentivesFullyPaid: TypedContractMethod<[], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  parseString: TypedContractMethod<[_input: string], [bigint], "view">;

  pricePerExecution: TypedContractMethod<[], [bigint], "view">;

  remainingIncentive: TypedContractMethod<[], [bigint], "view">;

  setCriticAddress: TypedContractMethod<
    [_criticLLMAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  submissionBlock: TypedContractMethod<[], [bigint], "view">;

  submitAgent: TypedContractMethod<
    [_agent: AddressLike, _owner: AddressLike],
    [void],
    "payable"
  >;

  testCases: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  useAgent: TypedContractMethod<
    [additionalInstructions: string],
    [string],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bestAgent"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bestAgentOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bestScore"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "creationBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "evaluateAgent"
  ): TypedContractMethod<[agent: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "incentive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "incentiveBlocksDuration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "incentivesFullyPaid"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "parseString"
  ): TypedContractMethod<[_input: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "pricePerExecution"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "remainingIncentive"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setCriticAddress"
  ): TypedContractMethod<
    [_criticLLMAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "submissionBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "submitAgent"
  ): TypedContractMethod<
    [_agent: AddressLike, _owner: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "testCases"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "useAgent"
  ): TypedContractMethod<[additionalInstructions: string], [string], "payable">;

  filters: {};
}
