const itemDuplicateChecker = ( singleNews, allNews) => {
    
    let searchNews = allNews.find(item => {
        if(item.id == singleNews.id) return item
    });
    return searchNews? true : false;
}

export default itemDuplicateChecker