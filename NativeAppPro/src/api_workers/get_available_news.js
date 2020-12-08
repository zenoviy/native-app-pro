

const getAvailebleNewsWorker = (hostData) => {
    return fetch(`${hostData.HOST}:${hostData.PORT}${hostData.ALL_NEWS}?max=${hostData.maxArticle}&min=${hostData.minArticle}`)
}


export default getAvailebleNewsWorker