
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

async function updateSeasonInfo() {
	if (await game.methods.openSeason().call()) document.getElementById('seasonstatus').innerHTML = "It's open season on " + await game.methods.snipableYetis().call() + " Pixel Yetis!"
	if (!(await game.methods.openSeason().call())) document.getElementById('seasonstatus').innerHTML = 'No Pixel Yetis up for grabs, try again later'
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


	let imgBase = 'https://pixelyetis.fra1.digitaloceanspaces.com/images/'

	for (let i = 0; i < yetiAmount; i++) {
		let index = await yeti.methods.tokenOfOwnerByIndex(_address, i).call()

		var heading = document.createElement("h2")
		heading.appendChild(document.createTextNode('Pixel Yeti #' + index))

		var newImg = document.createElement("img")
		newImg.src = imgBase + index + '.png'
		newImg.setAttribute('onclick', 'shoot(' + index + ')')

		var newSection = document.createElement("section")
		newSection.appendChild(heading)
		newSection.appendChild(newImg)
		newSection.classList.add('myYetis')
		document.getElementById("allimages").appendChild(newSection)
	}
	document.getElementById("buttons").innerHTML = ""

	document.getElementById("accuracy").addEventListener('change', updateShotInfo())
}

async function updateShotInfo() {
	let accuracy = Number(document.getElementById("accuracy").value)

	// Correct accuracy if it is too low or too high
	if (accuracy < 1) accuracy = 1
	if (accuracy > 100) accuracy = 100

	if (!Number.isFinite(accuracy)) {
		alert('Accuracy must be a number!')
		document.getElementById("accuracy").value = 10
	}

	let cost = web3.utils.fromWei(await game.methods.baseShot().call(), 'ether') // Price per NFT
	let tokenName = await token.methods.symbol().call()

	document.getElementById("accuracy").value = accuracy
	document.getElementById("accuracyText").innerHTML = 'Shot Accuracy (' + accuracy + '%)'
	document.getElementById("cost").innerHTML = 'Shot cost: ' + cost * accuracy + ' ' + tokenName
}

async function shoot(_index) {

	let accuracy = Number(document.getElementById("accuracy").value)
	// Guard clause for ensuring accuracy is a number
	if (!Number.isFinite(accuracy)) {
		alert('Accuracy must be a number!')
		document.getElementById("accuracy").value = 10
		return
	}


	updateShotInfo()
	// Check if game contract allowance is enough.
	if (Number(await token.methods.allowance(senderAddress, await game._address).call()) < Number(await game.methods.baseShot().call())) {
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
		let receipt = await game.methods.takeAShot(accuracy, _index).send({
			from: senderAddress,
			gas: await game.methods.takeAShot(accuracy, _index).estimateGas({ from: senderAddress }) * 2,
			gasPrice: await web3.eth.getGasPrice()
		})
		console.log(receipt)
		updateInfo()

	} catch (err) {
		console.log(err)
		err.message.includes("No Pixel Yetis found.") ? alert("No Pixel Yetis found in your wallet! Please mint a Pixel Yetis in order to take a shot at one here.") : null

		// let msg = err.message.split('\n')[3].split(':')[2].slice(0,-2)
		// err.message.includes("")? alert(""):null
	}
}