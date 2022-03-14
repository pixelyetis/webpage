var images = 'sample' 	// Name of images
const samples = 9		// How many samples are used
let currentImg = 1
var stopUpdate = false

function changeImage(){
	if(stopUpdate) return
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

	try{
		await ethereum.enable();

		// Hide connect button when successfully connected
		document.getElementById("walletConnect").classList.add("hidden")

	} catch(error){
		console.error(error);
	}
}


async function approveSpending(){
	const approvalAmount = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

	try{
		let gasPrice = await web3.eth.getGasPrice()
		let gasEstimate = await token.methods.approve(yetiAddr, approvalAmount).estimateGas({
			from: senderAddress
		})
		gasEstimate *= 2
		// console.log('Estimated maximum gas price is: ' + web3.utils.fromWei((gasEstimate*gasPrice).toString(), 'ether'));

		let receipt = await token.methods.approve(yetiAddr, approvalAmount).send({
			from: senderAddress,
			gas: gasEstimate,
			gasPrice: gasPrice
		})

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

	loginWithEth()

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
	
	// Update price for minting an NFT
	const currentAmount = parseInt(document.getElementById("nftAmount").innerHTML) // Amount of NFTs to purchase
	const nftPrice = web3.utils.fromWei(await yeti.methods.mintPrice().call(), 'ether') // Price per NFT
	const tokenSymb = await token.methods.symbol().call()
	document.getElementById("mintPrice").innerHTML = 'Price: ' + currentAmount*nftPrice + ' ' + tokenSymb

	// Update current and  Maximum supply
	const currentSupply = await yeti.methods.totalSupply().call() 	// NFTs minted so far
	const maxSupply = await yeti.methods.MAX_SUPPLY().call()		// NFT supply cap
	document.getElementById("supplyStats").innerHTML = currentSupply + '/' + maxSupply + ' minted'

	if(senderAddress != null){
		// Show wallet address
		const addressCompressed = senderAddress.substring(0,6) + '.....' + senderAddress.substring(senderAddress.length - 4,senderAddress.length)
		document.getElementById("connectedWalletAddress").innerHTML = addressCompressed
		
		// Update wallet token balance
		const balance = web3.utils.fromWei(await token.methods.balanceOf(senderAddress.toString()).call(), 'ether')
		document.getElementById("walletBalance").innerHTML = 'Balance: ' + parseInt(balance) + ' ' + tokenSymb
		
		// Decide whether to show approve or mint based on whether the wallet can make the purchase or not.
		const approvalAmount = await token.methods.allowance(senderAddress, yetiAddr).call()
		
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

}

async function mintNFT(){
	try{
		const amount = parseInt(document.getElementById("nftAmount").innerHTML)
		const price = await yeti.methods.mintPrice().call()
		const total = web3.utils.toHex(amount*price)

		let gasPrice = await web3.eth.getGasPrice()
		let gasEstimate = await yeti.methods.mintYeti(amount.toString()).estimateGas({from: senderAddress}) * 2
		
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
