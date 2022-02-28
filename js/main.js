let web3 = new Web3(ethereum);
let accounts = web3.eth.getAccounts();
let senderAddress = accounts[0]


// Address of contracts
let yetiAddr = '0xBd3da96B92b3ba2a732C79Fe7743Ac902A6E330b'
let tokenAddr = '0xFEDb2a3f89F269b4AbaCFbfF58eEEB5f5fcB91d1'

// Get ABIs for contracts
let yetiABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSuply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"mintYeti","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[],"name":"getMintingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMintingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getMintTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_newMintToken","type":"address"}],"name":"setMintTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBackground","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getEyes","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getFur","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getHorns","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getMouth","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getSkin","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true}];
let tokenABI = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"gimmieSome","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Create contract instances of contract and token
let yeti = new web3.eth.Contract(yetiABI, yetiAddr)
let token = new web3.eth.Contract(tokenABI, tokenAddr)


// const NETWORK_ID = 56;	// BSC Chain ID
// const NETWORK_ID = 5777;	// Truffle chain ID
// const NETWORK_ID = 4; 		// Rinkeby chain ID
const NETWORK_ID = 97; 		// BSC Testnet chain ID

var images = 'sample' 	// Name of images
const samples = 9		// How many samples are used
let currentImg = 1

function changeImage(){
	// Go back to first image when we increment from the last one
	if(currentImg > samples) currentImg = 1 

	document.getElementsByClassName("imgs")[0].src = 'images/' + images + currentImg + '.png'
	document.getElementsByClassName("imgs")[1].src = 'images/' + images + currentImg + '.png'

	currentImg++
}

setInterval(changeImage, 1000)

async function loginWithEth(){
	if(!window.ethereum){
		alert('No ETH browser extension detected.')
		return
	}

	
	web3 = new Web3(ethereum);
	// web3 = _web3

	try{
		// debugger
		await ethereum.enable();

		// Hide connect button when successfully connected
		document.getElementById("walletConnect").classList.add("hidden")

		// Update minting information on the webpage
		updateInfo()

	} catch(error){
		console.error(error);
	}


	// debugger
}

window.ethereum.on('accountsChanged', async function(accounts){
	updateInfo()
})


window.ethereum.on('networkChanged', async function(networkId){
	updateInfo()
})

async function approveSpending(){
	const approvalAmount = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

	try{
		let gasPrice = await web3.eth.getGasPrice() * 2
		let gasEstimate = await token.methods.approve(yetiAddr, approvalAmount).estimateGas({
			from: senderAddress
		})
		// console.log('Estimated maximum gas price is: ' + web3.utils.fromWei((gasEstimate*gasPrice).toString(), 'ether'));

		let receipt = await token.methods.approve(yetiAddr, approvalAmount).send({
			from: senderAddress,
			gas: gasEstimate,
			gasPrice: gasPrice
		})

		// console.log('Token allowance: ' + await token.methods.allowance(senderAddress, yetiAddr).call())
		// console.log('Approval successful!')

		updateInfo()

	}catch(err){
		console.log('Error approving')
	}
}

function decAmount(){
	var currentAmount = parseInt(document.getElementById("nftAmount").innerHTML)

	if(currentAmount <= 1) return
	
	currentAmount--
	document.getElementById("nftAmount").innerHTML = currentAmount
	
	updateInfo()
}

function addAmount(){
	var currentAmount = parseInt(document.getElementById("nftAmount").innerHTML)

	if(currentAmount >= 10) return
	
	currentAmount++
	document.getElementById("nftAmount").innerHTML = currentAmount

	updateInfo()
	
}

async function updateInfo(){

	// Guard clause for chain id.
	if(await web3.eth.net.getId() != NETWORK_ID) {

		document.getElementById("supplyStats").innerHTML = 'Wrong network!'

		document.getElementById("approveButton").style.display = "none"
		document.getElementById("mintButton").style.display = "none"
		
		alert('Wrong network!')
		return
	}
	

	accounts = await web3.eth.getAccounts();
	senderAddress = accounts[0]

	// Show wallet address
	const addressCompressed = senderAddress.substring(0,6) + '.....' + senderAddress.substring(senderAddress.length - 4,senderAddress.length)
	document.getElementById("connectedWalletAddress").innerHTML = addressCompressed
	

	// Update price for minting an NFT
	const currentAmount = parseInt(document.getElementById("nftAmount").innerHTML) // Amount of NFTs to purchase
	const nftPrice = web3.utils.fromWei(await yeti.methods.mintPrice().call(), 'ether') // Price per NFT
	const tokenSymb = await token.methods.symbol().call()
	document.getElementById("mintPrice").innerHTML = 'Price: ' + currentAmount*nftPrice + ' ' + tokenSymb

	// Update current and  Maximum supply
	const currentSupply = await yeti.methods.totalSupply().call() 	// NFTs minted so far
	const maxSupply = await yeti.methods.MAX_SUPPLY().call()		// NFT supply cap
	document.getElementById("supplyStats").innerHTML = currentSupply + '/' + maxSupply + ' minted'

	// Update wallet token balance
	const balance = web3.utils.fromWei(await token.methods.balanceOf(senderAddress.toString()).call(), 'ether')
	document.getElementById("walletBalance").innerHTML = 'Balance: ' + balance + ' ' + tokenSymb

	// Decide whether to show approve or mint based on whether the wallet can make the purchase or not.
	const approvalAmount = await token.methods.allowance(senderAddress, yetiAddr).call()
	// console.log(approvalAmount)
	// console.log(web3.utils.toWei(nftPrice)*currentAmount)
	// console.log(approvalAmount <= web3.utils.toWei(nftPrice)*currentAmount)
	if(approvalAmount >= web3.utils.toWei(nftPrice)*currentAmount){
		// Approval enough. Show mint button.
		document.getElementById("approveButton").style.display = "none"
		document.getElementById("mintButton").style.display = "block"
	}else{
		// Approval not enough. Show approval button.
		document.getElementById("approveButton").style.display = "block"
		document.getElementById("mintButton").style.display = "none"
	}
}

async function mintNFT(){
	try{
		const amount = parseInt(document.getElementById("nftAmount").innerHTML)
		const price = await yeti.methods.mintPrice().call()
		const total = web3.utils.toHex(amount*price)

		let gasPrice = await web3.eth.getGasPrice() * 2
		let gasEstimate = await yeti.methods.mintYeti(amount.toString()).estimateGas({from: senderAddress})
		
		let receipt = await yeti.methods.mintYeti(amount.toString()).send({
			from: senderAddress,
			gas: gasEstimate,
			gasPrice: gasPrice
		})

		console.log(receipt)
		updateInfo()

	}catch(err){
		console.log(err)
	}
}