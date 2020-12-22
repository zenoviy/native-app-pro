export const completeTaskProcess = (action) => {
    const editableSettings = Object.assign([], action.payload.currentTask.checkList.requirement.editableSettings);

    switch(action.payload.type){
        case "photo":
            let photoSettings = editableSettings.find(item => item.type === "photo" );
            let index = editableSettings.indexOf(photoSettings);
            if(photoSettings.endValue <= action.payload.currentTask.attachedMedia.length){
                editableSettings[index].finish = true;
                return editableSettings
            }
           break
        case "time":
            let timeSettings = editableSettings.find(item => item.type === "time" );
            let indexTimer = editableSettings.indexOf(timeSettings);
            let startTime = new Date(editableSettings.startTime).getTime();
            
            let currentTime = new Date().getTime();
            let endTime = startTime + ((timeSettings.endValue* 1000) * 60 * 60) ;
            if(currentTime > endTime) {
                console.log("time end")
                editableSettings[indexTimer].finish = false;
            } else {
                console.log("time left")
                editableSettings[indexTimer].finish = true;
            }
            break
        default:
            break
    }

}
export const percentCount = (action) => {
    const editableSettings = Object.assign([], action.payload.currentTask.checkList.requirement.editableSettings);
    const requiredWithSettings = editableSettings.filter(item => item.required);

    let mediaLength = action.payload.currentTask.attachedMedia.length;
    let allPoints = 0;
    let completeTask = 0;
    for(let setting of requiredWithSettings){
        if(setting.type != "photo") {
            allPoints += 1;
            if(setting.finish) completeTask += 1;
        } else allPoints += parseInt(setting.endValue);
    }

    let pointPerItem = 100 / allPoints;
    completeTask += mediaLength;
    let finalPercentage = completeTask * pointPerItem;

    action.payload.currentTask.completePercent = finalPercentage > 100 ? 100 : parseInt(finalPercentage);
}



export const checkMedia = () => {
    console.log("Photo check")
}
export const checkTime = () => {

}

export const createNotificationPost = ({taskData, type}) => {
    // console.log(taskData, " << taskData")
     return {
         id: new Date().getTime(),
         postTime: new Date().getTime(),
         type: type,
         title: taskData.title,
         taskData: taskData,
         author: 'user',
         authorLink: '',
         likes: 0,
         likesInvolver: [],
         postBody: {
             excerpt: "",
             titleImage: taskData.icon,
             mainText: ""//taskData.checkList.requirement.
         },
     }
 }