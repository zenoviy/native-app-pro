export const taskList = [
    {
        id: 1,
        startTime: null,
        icon: 'https://www.vippng.com/png/detail/1-10453_strategy-clipart-icon-web-icons-png-icon-strategy.png',
        title: 'Coding code',
        description: `Write some code`,
        attachedMedia: [],
        checkList: {
            requirement: {
                rate: 3,
                costStar: 1,
                editableSettings: [
                    {
                        description: "time to end min 1",
                        type: "time",
                        name: "endValue",
                        endValue: 1,
                        min: 1,
                        units: 'hrs',
                    },{
                        description: "Number of pivcture",
                        type: "photo",
                        name: "endValue",
                        endValue: 6,
                        min: 6
                    },{
                        description: "Create a description",
                        type: "text",
                        name: "endValue",
                        endValue: ''
                    },
                ]
            },
            toDo: {
                inTime: false,
                attachFiles: false,
                rate: false,
                proves: false,
                completePercent: 0,
                likes: 0,
                timeEnd: null,
            }
        }
    }, {
        id: 2,
        startTime: null,
        icon: 'https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-broom-cleaning--logo-icon-design-template-vector-png-image_574257.jpg',
        title: 'Clean up',
        description: 'Clean up house',
        attachedMedia: [],
        checkList: {
            requirement: {
                timeUnits: 'hrs',
                minDurations: 1,
                minNumberOfPicture: 6,
                rate: 3,
                costStar: 1,
                editableSettings: [
                    {
                        description: "time to end min 1",
                        type: "time",
                        name: "endValue",
                        endValue: 1,
                        min: 1,
                        units: 'hrs',
                    },{
                        description: "Number of picture",
                        type: "photo",
                        name: "endValue",
                        endValue: 6,
                        min: 6
                    },{
                        description: "Create a description",
                        type: "text",
                        name: "endValue",
                        endValue: ''
                    },
                ]
            },
            toDo: {
                inTime: false,
                attachFiles: false,
                rate: false,
                proves: false,
                completePercent: 0,
                likes: 0,
                timeEnd: null,
            }
        }
    }
] 