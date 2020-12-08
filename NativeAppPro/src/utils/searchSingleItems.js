const searchSingleItem = ( singleItem, allItem) => {
    let searchNews = allItem.find(item => {
        if(item.id === singleItem.id) return item
    });
    return searchNews
}

export default searchSingleItem