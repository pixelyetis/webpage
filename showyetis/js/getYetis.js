
async function init() {
	updateInfo()

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
	getMyYetis()

}
async function getMyYetis() {
	document.getElementById("allimages").innerHTML = ""
	console.log(await yeti.methods.balanceOf(senderAddress).call())
	const yetiAmount = Number(await yeti.methods.balanceOf(senderAddress).call())

	// Wallet owner has no Pixel Yetis guard clause
	if (yetiAmount === 0) {
		var newHeading = document.createElement("p")
		newHeading.appendChild(document.createTextNode('No Pixel Yetis found for this wallet!'))

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
		let index = await yeti.methods.tokenOfOwnerByIndex(senderAddress, i).call()

		var pText = document.createElement("h2")
		pText.appendChild(document.createTextNode('Pixel Yeti #' + index))

		var newImg = document.createElement("img")
		newImg.src = imgBase + index + '.png'

		var newSection = document.createElement("section")
		newSection.appendChild(pText)
		newSection.appendChild(newImg)
		newSection.classList.add('myYetis')
		document.getElementById("allimages").appendChild(newSection)
	}
	document.getElementById("buttons").innerHTML = ""

}