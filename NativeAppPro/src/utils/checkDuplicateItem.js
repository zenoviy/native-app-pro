const itemDuplicateChecker = ( singleNews, allNews) => {
    let findDuplicat = false;

    for(let news of singleNews ){
        let searchNews = allNews.find(item => {
            if(item.id == news.id) return item
        });
        if(searchNews){
            findDuplicat = true;
            break
        } 
    }
    
    return findDuplicat? true : false;
}

export default itemDuplicateChecker