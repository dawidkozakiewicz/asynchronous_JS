// const getDataPromise = (num) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
//     }, 2000)
// })


const getDataPromise = async (num) => {
    await setTimeout(() => {
        typeof num === 'number' ? num * 2 : 'Number must be provided'
    }, 2000)
}



const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
    
}

// processData().then((data) => {
//     console.log('Data', data)
// }).catch((error) => {
//     console.log('Error', error)
// })

         const logger = async () => {
                let data = await processData()
                    console.log(data)
            }

            logger()