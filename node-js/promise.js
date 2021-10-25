const axios = require('axios')

// const RESOURCE_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"

// axios.get(RESOURCE_URL)
//   .then(function (response) {
//     // handle success
//     console.log(response.data.bitcoin.usd);
//   })
  
const getBitcoinPrice = async () => {
    const response =  (await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"))
    return {
        id : "BTC",
        price : response.data.bitcoin.usd
    }
}

const getEthPrice = async () => {
    const response =  (await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"))
    return {
        id : "ETH",
        price : response.data.ethereum.usd
    }
}


(async () => {
    
    const bitcoinJson = await getBitcoinPrice()
    console.log("1. bitcoinJson --> ", bitcoinJson)
    
    const ethJson = await getEthPrice()
    console.log("2. ethJson --> ", ethJson)

    const promiseOutput = await Promise.all( [ (await getBitcoinPrice()),( await getEthPrice()) ] )
    
    console.log("3. Promise.all output --> ", promiseOutput)
    
})()
 


