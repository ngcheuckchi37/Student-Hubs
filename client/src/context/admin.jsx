import Thirdweb from 'thirdweb';

const contractAddress = "0x123...";
const contractAbi = [ /* Smart contract ABI */ ];

const thirdweb = new Thirdweb();
const contract = thirdweb.getContract(contractAddress, contractAbi);

async function login() {
  const accounts = await thirdweb.enable();
  const address = accounts[0];

  const isAdmin = await contract.isAdmin(address).call();
  if (isAdmin) {
    // Grant admin privileges
  } else {
    // Log in as regular user
  }
}
