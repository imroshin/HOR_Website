async function login()  {
  // window.ethereum.request
  if (!window.ethereum || !window.ethereum.isMetaMask) {
    console.log("No metamask");
    alert.error("Please use a browser with Metamask");
    return;
  }
  //check chain id
  const chainId = await ethereum.request({ method: "eth_chainId" });
  // console.log(typeof chainId);
  // if (chainId !== "0x1") {
  //   console.log("Wrogn Chain");
  //   alert.error("Please use Etherium Mainnet ");
  //   return;
  // }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  console.log(provider);
  const signer = provider.getSigner();
  // console.log(
  //   "Account:",
  //   await signer.getAddress(),
  //   await (
  //     await signer.getAddress()
  //   ).length
  // );
  // setaddress(await signer.getAddress());

  deactivateControls();
};


function deactivateControls(){
  document.getElementById("vip-header").style.display ="block";
  document.getElementById("login").style.display = "none";
  document.getElementById("mint").style.display = "flex";
}

document.getElementById("login-btn").onclick = login;
