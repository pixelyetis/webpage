let web3 = new Web3(ethereum);

var accounts
var senderAddress

// Address of contracts
let yetiAddr = '0xc4acb22b5959d74c65d431ad69df91d94e9c96f9'
let tokenAddr = '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E'
let gameAddr = '0x4fD95d70229bb9dC13d74cA872364C57F2fA8d1c'


// Get ABIs for contracts
let yetiABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "MAX_MINT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "MAX_SUPPLY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "mintPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAddr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_newSupply", "type": "uint256" }], "name": "setMaxSuply", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenAmount", "type": "uint256" }], "name": "mintYeti", "outputs": [], "stateMutability": "payable", "type": "function", "payable": true }, { "inputs": [], "name": "getMintingPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "setMintingPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getMintTokenAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "_newMintToken", "type": "address" }], "name": "setMintTokenAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getBackground", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getEyes", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getFur", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getHorns", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getMouth", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getSkin", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }];
let tokenABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAddr", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "gimmieSome", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let gameABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"baseShot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openSeason","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pYetisAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newBase","type":"uint256"}],"name":"setBaseShot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"setGenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_open","type":"bool"}],"name":"setOpenSeason","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"setShotAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSnipableYetis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"setYetiAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shotAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"snipableYetis","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_multiplier","type":"uint256"},{"internalType":"uint256","name":"_yetiTarget","type":"uint256"}],"name":"takeAShot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Create contract instances of contract and token
let yeti = new web3.eth.Contract(yetiABI, yetiAddr)
let token = new web3.eth.Contract(tokenABI, tokenAddr)
let game = new web3.eth.Contract(gameABI, gameAddr)

const NETWORK_ID = 56;	// BSC Chain ID
// const NETWORK_ID = 5777;	// Truffle chain ID
// const NETWORK_ID = 4; 		// Rinkeby chain ID
// const NETWORK_ID = 97; 		// BSC Testnet chain ID


window.ethereum.on('accountsChanged', async function (accounts) {
	updateInfo()
})

window.ethereum.on('networkChanged', async function (networkId) {
	updateInfo()
})

async function init() {
	updateInfo()
	setInterval(updateShotInfo, 1000)
}
async function loginWithEth() {
	if (!window.ethereum) {
		alert('No ETH browser extension detected.')
		return
	}

	web3 = new Web3(ethereum);

	try {
		await ethereum.enable();

		// Hide connect button when successfully connected        
		document.getElementById("walletConnect").style.display = "none"

	} catch (error) {
		console.error(error);
		document.getElementById("walletConnect").style.display = "block"
	}
}
async function updateInfo() {
	// Guard clause for chain id.
	if (await web3.eth.net.getId() != NETWORK_ID) {

		var newHeading = document.createElement("p")
		newHeading.appendChild(document.createTextNode('Wrong Network!'))

		var newSection = document.createElement("section")
		newSection.appendChild(newHeading)
		newSection.classList.add('myYetis')
		document.getElementById("allimages").appendChild(newSection)


		alert('Wrong network!')
		return
	}
	loginWithEth()
	accounts = await web3.eth.getAccounts();
	senderAddress = accounts[0]

	getYetis(await game.methods.owner().call())
	updateSeasonInfo()
}

async function updateSeasonInfo(){
	if(await game.methods.openSeason().call()) document.getElementById('seasonstatus').innerHTML = "It's open season on " + await game.methods.snipableYetis().call() + " Pixel Yetis!"
	if(!(await game.methods.openSeason().call())) document.getElementById('seasonstatus').innerHTML = 'No Pixel Yetis up for grabs, try again later'
}

async function getYetis(_address) {
	document.getElementById("allimages").innerHTML = ""
	console.log(await yeti.methods.balanceOf(_address).call())
	const yetiAmount = Number(await yeti.methods.balanceOf(_address).call())

	// Wallet owner has no Pixel Yetis guard clause
	if (yetiAmount === 0) {
		var newHeading = document.createElement("p")
		newHeading.appendChild(document.createTextNode('No Pixel Yetis found!'))

		var newSection = document.createElement("section")
		newSection.appendChild(newHeading)
		newSection.classList.add('myYetis')
		document.getElementById("allimages").appendChild(newSection)

		return
	}

	var newMessage = document.createElement("p")
	newMessage.appendChild(document.createTextNode('Fetching Pixel Yetis, please wait...'))
	newMessage.id = 'message'

	document.getElementById("buttons").appendChild(newMessage)


	let imgBase = 'https://pye.fra1.digitaloceanspaces.com/images/'

	for (let i = 0; i < yetiAmount; i++) {
		let index = await yeti.methods.tokenOfOwnerByIndex(_address, i).call()

		var heading = document.createElement("h2")
		heading.appendChild(document.createTextNode('Pixel Yeti #' + index))

		var newImg = document.createElement("img")
		newImg.src = imgBase + index + '.png'
		newImg.setAttribute('onclick', 'shoot(' + 100 + ',' + index + ')')

		var newSection = document.createElement("section")
		newSection.appendChild(heading)
		newSection.appendChild(newImg)
		newSection.classList.add('myYetis')
		document.getElementById("allimages").appendChild(newSection)
	}
	document.getElementById("buttons").innerHTML = ""

	document.getElementById("accuracy").addEventListener('change', updateShotInfo())
}

async function updateShotInfo(){
	let accuracy = Number(document.getElementById("accuracy").value)
	
	// Correct accuracy if it is too low or too high
	if(accuracy < 1) accuracy = 1
	if(accuracy > 100) accuracy = 100
	
	if(!Number.isFinite(accuracy)){
		alert('Accuracy must be a number!')
		document.getElementById("accuracy").value = 10
	}

	let cost = web3.utils.fromWei(await game.methods.baseShot().call(), 'ether') // Price per NFT
	let tokenName = await token.methods.symbol().call()

	document.getElementById("accuracy").value = accuracy
	document.getElementById("accuracyText").innerHTML = 'Shot Accuracy (' + accuracy + '%)'
	document.getElementById("cost").innerHTML = 'Shot cost: ' + cost*accuracy + ' ' + tokenName
}

async function shoot(_mul, _index) {
	
	let accuracy = Number(document.getElementById("accuracy").value)
	// Guard clause for ensuring accuracy is a number
	if(!Number.isFinite(accuracy)){
		alert('Accuracy must be a number!')
		document.getElementById("accuracy").value = 10
		return
	}
	

	updateShotInfo()
	
	// Check if game contract allowance is enough.
	if (Number(await token.methods.allowance(senderAddress, await game._address).call()) < Number(await game.methods.baseShot().call())){
		try {
			let receipt
			// This is necessary to allow contract to send funds for taking a shot.
			receipt = await token.methods.approve(await game._address, '0xffffffffffffffffffffff').send({
				from: senderAddress,
				gas: await token.methods.approve(await game._address, '0xffffffffffffffffffffff').estimateGas({ from: senderAddress }) * 2,
				gasPrice: await web3.eth.getGasPrice()
			})
		} catch (err) {
			console.log(err)
		}
	}
	
	try {
		let receipt = await game.methods.takeAShot(_mul, _index).send({
			from: senderAddress,
			gas: await game.methods.takeAShot(_mul, _index).estimateGas({ from: senderAddress }) * 2,
			gasPrice: await web3.eth.getGasPrice()
		})
		console.log(receipt)
		updateInfo()

	} catch (err) {
		console.log(err)
	}
}