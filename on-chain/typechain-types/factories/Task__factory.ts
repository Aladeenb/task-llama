/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../common";
import type { Task, TaskInterface } from "../Task";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pricePerExecution",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_incentiveBlocksDuration",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "bestAgent",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bestAgentOwner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bestScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creationBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "agent",
        type: "address",
      },
    ],
    name: "evaluateAgent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incentive",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incentiveBlocksDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incentivesFullyPaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_input",
        type: "string",
      },
    ],
    name: "parseString",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerExecution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_criticLLMAddress",
        type: "address",
      },
    ],
    name: "setCriticAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "submissionBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agent",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "submitAgent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "testCases",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "additionalInstructions",
        type: "string",
      },
    ],
    name: "useAgent",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040516200203c3803806200203c833981810160405281019062000029919062000289565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600590816200007a919062000545565b5081600b81905550806008819055503460068190555043600c819055506000600960006101000a81548160ff0219169083151502179055505050506200062c565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200012482620000d9565b810181811067ffffffffffffffff82111715620001465762000145620000ea565b5b80604052505050565b60006200015b620000bb565b905062000169828262000119565b919050565b600067ffffffffffffffff8211156200018c576200018b620000ea565b5b6200019782620000d9565b9050602081019050919050565b60005b83811015620001c4578082015181840152602081019050620001a7565b60008484015250505050565b6000620001e7620001e1846200016e565b6200014f565b905082815260208101848484011115620002065762000205620000d4565b5b62000213848285620001a4565b509392505050565b600082601f830112620002335762000232620000cf565b5b815162000245848260208601620001d0565b91505092915050565b6000819050919050565b62000263816200024e565b81146200026f57600080fd5b50565b600081519050620002838162000258565b92915050565b600080600060608486031215620002a557620002a4620000c5565b5b600084015167ffffffffffffffff811115620002c657620002c5620000ca565b5b620002d4868287016200021b565b9350506020620002e78682870162000272565b9250506040620002fa8682870162000272565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035757607f821691505b6020821081036200036d576200036c6200030f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000398565b620003e3868362000398565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000426620004206200041a846200024e565b620003fb565b6200024e565b9050919050565b6000819050919050565b620004428362000405565b6200045a62000451826200042d565b848454620003a5565b825550505050565b600090565b6200047162000462565b6200047e81848462000437565b505050565b5b81811015620004a6576200049a60008262000467565b60018101905062000484565b5050565b601f821115620004f557620004bf8162000373565b620004ca8462000388565b81016020851015620004da578190505b620004f2620004e98562000388565b83018262000483565b50505b505050565b600082821c905092915050565b60006200051a60001984600802620004fa565b1980831691505092915050565b600062000535838362000507565b9150826002028217905092915050565b620005508262000304565b67ffffffffffffffff8111156200056c576200056b620000ea565b5b6200057882546200033e565b62000585828285620004aa565b600060209050601f831160018114620005bd5760008415620005a8578287015190505b620005b4858262000527565b86555062000624565b601f198416620005cd8662000373565b60005b82811015620005f757848901518255600182019150602085019450602081019050620005d0565b8683101562000617578489015162000613601f89168262000507565b8355505b6001600288020188555050505b505050505050565b611a00806200063c6000396000f3fe6080604052600436106101095760003560e01c8063609e67b011610095578063bc99cbd011610064578063bc99cbd01461035f578063c8dec8151461038a578063d90e5024146103a6578063ec1a9bd8146103d1578063ffe41b271461040157610109565b8063609e67b0146102a15780637284e416146102de5780637c1c3439146103095780638da5cb5b1461033457610109565b806317634514116100dc57806317634514146101cc5780631aee3531146101f75780631d4632ac146102205780633af874d71461024b578063413350bd1461027657610109565b806301bc246a1461010e57806303cd7834146101395780630af2f42414610164578063110754991461018f575b600080fd5b34801561011a57600080fd5b5061012361043e565b6040516101309190610d02565b60405180910390f35b34801561014557600080fd5b5061014e610444565b60405161015b9190610d02565b60405180910390f35b34801561017057600080fd5b5061017961044a565b6040516101869190610d02565b60405180910390f35b34801561019b57600080fd5b506101b660048036038101906101b19190610e77565b610450565b6040516101c39190610d02565b60405180910390f35b3480156101d857600080fd5b506101e1610504565b6040516101ee9190610d02565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190610f1e565b61050a565b005b34801561022c57600080fd5b506102356105de565b6040516102429190610d02565b60405180910390f35b34801561025757600080fd5b506102606105e4565b60405161026d9190610d02565b60405180910390f35b34801561028257600080fd5b5061028b6105ea565b6040516102989190610d02565b60405180910390f35b3480156102ad57600080fd5b506102c860048036038101906102c39190610f77565b6105f0565b6040516102d59190611023565b60405180910390f35b3480156102ea57600080fd5b506102f361069c565b6040516103009190611023565b60405180910390f35b34801561031557600080fd5b5061031e61072a565b60405161032b9190611066565b60405180910390f35b34801561034057600080fd5b50610349610750565b6040516103569190611090565b60405180910390f35b34801561036b57600080fd5b50610374610774565b60405161038191906110c6565b60405180910390f35b6103a4600480360381019061039f91906110e1565b610787565b005b3480156103b257600080fd5b506103bb6109c4565b6040516103c89190611090565b60405180910390f35b6103eb60048036038101906103e69190610e77565b6109ea565b6040516103f89190611023565b60405180910390f35b34801561040d57600080fd5b5061042860048036038101906104239190610f1e565b610afa565b6040516104359190610d02565b60405180910390f35b60085481565b600b5481565b60025481565b60008060009050600083905060005b81518110156104f95760008183516104779190611150565b9050600083838151811061048e5761048d611184565b5b602001015160f81c60f81b905060008160f81c9050600060308260ff166104b59190611150565b90506001846104c49190611150565b600a6104d091906112e6565b816104db9190611331565b876104e69190611373565b965050505050808060010191505061045f565b508192505050919050565b600c5481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059190611419565b60405180910390fd5b80600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60065481565b60075481565b60045481565b600a818154811061060057600080fd5b90600052602060002001600091509050805461061b90611468565b80601f016020809104026020016040519081016040528092919081815260200182805461064790611468565b80156106945780601f1061066957610100808354040283529160200191610694565b820191906000526020600020905b81548152906001019060200180831161067757829003601f168201915b505050505081565b600580546106a990611468565b80601f01602080910402602001604051908101604052809291908181526020018280546106d590611468565b80156107225780601f106106f757610100808354040283529160200191610722565b820191906000526020600020905b81548152906001019060200180831161070557829003601f168201915b505050505081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600960009054906101000a900460ff1681565b600061079283610afa565b9050600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361087f5782600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436004819055506109bf565b6002548111156109be57600960009054906101000a900460ff1661092d5760006108a7610c77565b905080600760008282546108bb9190611150565b92505081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561092a573d6000803e3d6000fd5b50505b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550436004819055505b5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600b543414610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a27906114e5565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663469c8110600584604051602001610a82929190611697565b6040516020818303038152906040526040518263ffffffff1660e01b8152600401610aad9190611023565b600060405180830381865afa158015610aca573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610af39190611745565b9050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663469c81106005604051602001610b2b91906117b4565b6040516020818303038152906040526040518263ffffffff1660e01b8152600401610b569190611023565b600060405180830381865afa158015610b73573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610b9c9190611745565b90506000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663469c8110600584604051602001610bf2929190611930565b6040516020818303038152906040526040518263ffffffff1660e01b8152600401610c1d9190611023565b600060405180830381865afa158015610c3a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610c639190611745565b9050610c6e81610450565b92505050919050565b6000600854600c5443610c8a9190611150565b1115610cb5576001600960006101000a81548160ff0219169083151502179055506007549050610ce6565b600060045443610cc59190611150565b905060085481610cd59190611999565b600654610ce29190611331565b9150505b90565b6000819050919050565b610cfc81610ce9565b82525050565b6000602082019050610d176000830184610cf3565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d8482610d3b565b810181811067ffffffffffffffff82111715610da357610da2610d4c565b5b80604052505050565b6000610db6610d1d565b9050610dc28282610d7b565b919050565b600067ffffffffffffffff821115610de257610de1610d4c565b5b610deb82610d3b565b9050602081019050919050565b82818337600083830152505050565b6000610e1a610e1584610dc7565b610dac565b905082815260208101848484011115610e3657610e35610d36565b5b610e41848285610df8565b509392505050565b600082601f830112610e5e57610e5d610d31565b5b8135610e6e848260208601610e07565b91505092915050565b600060208284031215610e8d57610e8c610d27565b5b600082013567ffffffffffffffff811115610eab57610eaa610d2c565b5b610eb784828501610e49565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610eeb82610ec0565b9050919050565b610efb81610ee0565b8114610f0657600080fd5b50565b600081359050610f1881610ef2565b92915050565b600060208284031215610f3457610f33610d27565b5b6000610f4284828501610f09565b91505092915050565b610f5481610ce9565b8114610f5f57600080fd5b50565b600081359050610f7181610f4b565b92915050565b600060208284031215610f8d57610f8c610d27565b5b6000610f9b84828501610f62565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610fde578082015181840152602081019050610fc3565b60008484015250505050565b6000610ff582610fa4565b610fff8185610faf565b935061100f818560208601610fc0565b61101881610d3b565b840191505092915050565b6000602082019050818103600083015261103d8184610fea565b905092915050565b600061105082610ec0565b9050919050565b61106081611045565b82525050565b600060208201905061107b6000830184611057565b92915050565b61108a81610ee0565b82525050565b60006020820190506110a56000830184611081565b92915050565b60008115159050919050565b6110c0816110ab565b82525050565b60006020820190506110db60008301846110b7565b92915050565b600080604083850312156110f8576110f7610d27565b5b600061110685828601610f09565b925050602061111785828601610f09565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061115b82610ce9565b915061116683610ce9565b925082820390508181111561117e5761117d611121565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561120a578086048111156111e6576111e5611121565b5b60018516156111f55780820291505b8081029050611203856111b3565b94506111ca565b94509492505050565b60008261122357600190506112df565b8161123157600090506112df565b8160018114611247576002811461125157611280565b60019150506112df565b60ff84111561126357611262611121565b5b8360020a91508482111561127a57611279611121565b5b506112df565b5060208310610133831016604e8410600b84101617156112b55782820a9050838111156112b0576112af611121565b5b6112df565b6112c284848460016111c0565b925090508184048111156112d9576112d8611121565b5b81810290505b9392505050565b60006112f182610ce9565b91506112fc83610ce9565b92506113297fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611213565b905092915050565b600061133c82610ce9565b915061134783610ce9565b925082820261135581610ce9565b9150828204841483151761136c5761136b611121565b5b5092915050565b600061137e82610ce9565b915061138983610ce9565b92508282019050808211156113a1576113a0611121565b5b92915050565b7f4f6e6c7920746865206f776e6572206f6620746865205461736b2063616e206360008201527f616c6c20746869732066756e6374696f6e000000000000000000000000000000602082015250565b6000611403603183610faf565b915061140e826113a7565b604082019050919050565b60006020820190508181036000830152611432816113f6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061148057607f821691505b60208210810361149357611492611439565b5b50919050565b7f496e636f7272656374207061796d656e7420616d6f756e742073656e74000000600082015250565b60006114cf601d83610faf565b91506114da82611499565b602082019050919050565b600060208201905081810360008301526114fe816114c2565b9050919050565b7f5468697320697320796f7572207461736b3a2000000000000000000000000000815250565b600081905092915050565b60008190508160005260206000209050919050565b6000815461155881611468565b611562818661152b565b9450600182166000811461157d5760018114611592576115c5565b60ff19831686528115158202860193506115c5565b61159b85611536565b60005b838110156115bd5781548189015260018201915060208101905061159e565b838801955050505b50505092915050565b7f0a546865736520617265206164646974696f6e616c20696e737472756374696f60008201527f6e7320616e6420636f6e73747261696e747320796f75206d757374206f62657960208201527f3a00000000000000000000000000000000000000000000000000000000000000604082015250565b600061165060418361152b565b915061165b826115ce565b604182019050919050565b600061167182610fa4565b61167b818561152b565b935061168b818560208601610fc0565b80840191505092915050565b60006116a282611505565b6013820191506116b2828561154b565b91506116bd82611643565b91506116c98284611666565b91508190509392505050565b60006116e86116e384610dc7565b610dac565b90508281526020810184848401111561170457611703610d36565b5b61170f848285610fc0565b509392505050565b600082601f83011261172c5761172b610d31565b5b815161173c8482602086016116d5565b91505092915050565b60006020828403121561175b5761175a610d27565b5b600082015167ffffffffffffffff81111561177957611778610d2c565b5b61178584828501611717565b91505092915050565b7f436f6d706c6574652074686520666f6c6c6f77696e67207461736b3a20000000815250565b60006117bf8261178e565b601d820191506117cf828461154b565b915081905092915050565b7f4576616c7561746520616e206167656e74277320736f6c7574696f6e20746f2060008201527f74686520666f6c6c6f77696e67207461736b3a20000000000000000000000000602082015250565b600061183660348361152b565b9150611841826117da565b603482019050919050565b7f0a52657475726e206f6e6c79206120677261646520696e2074686520666f726d60008201527f206f6620616e20696e7465676572206265747765656e203020616e642031303060208201527f207768657265203020726570726573656e74732061207465727269626c65206f60408201527f757470757420616e642031303020697320706572666563742e2054686973206960608201527f7320746865206167656e74207375626d697373696f6e3a000000000000000000608082015250565b600061191a60978361152b565b91506119258261184c565b609782019050919050565b600061193b82611829565b9150611947828561154b565b91506119528261190d565b915061195e8284611666565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006119a482610ce9565b91506119af83610ce9565b9250826119bf576119be61196a565b5b82820490509291505056fea2646970667358221220b03587e6344376e3d8a59d249ab7caa3f22d069c13e57ba06c91880fa034d6c664736f6c63430008180033";

type TaskConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TaskConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Task__factory extends ContractFactory {
  constructor(...args: TaskConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _description: string,
    _pricePerExecution: BigNumberish,
    _incentiveBlocksDuration: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _description,
      _pricePerExecution,
      _incentiveBlocksDuration,
      overrides || {}
    );
  }
  override deploy(
    _description: string,
    _pricePerExecution: BigNumberish,
    _incentiveBlocksDuration: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _description,
      _pricePerExecution,
      _incentiveBlocksDuration,
      overrides || {}
    ) as Promise<
      Task & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Task__factory {
    return super.connect(runner) as Task__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TaskInterface {
    return new Interface(_abi) as TaskInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Task {
    return new Contract(address, _abi, runner) as unknown as Task;
  }
}
