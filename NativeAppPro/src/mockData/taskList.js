export const taskList = [
    {
        id: 1,
        startTime: null,
        icon: 'https://www.vippng.com/png/detail/1-10453_strategy-clipart-icon-web-icons-png-icon-strategy.png',
        title: 'Coding code',
        description: `Write some code`,
        attachedMedia: [],
        message: [],
        completePercent: 0,
        likes: 0,
        checkList: {
            requirement: {
                rate: 3,
                costStar: 1,
                editableSettings: [
                    {
                        description: "time to end min 1",
                        descriptionInComplete: "",
                        descriptionInProgress: "Finish the task in time",
                        required: true,
                        type: "time",
                        name: "endValue",
                        endValue: 1,
                        min: 1,
                        units: 'hrs',
                        editable: true,
                        finish: false
                    },{
                        description: "Number of picture",
                        descriptionInComplete: "",
                        descriptionInProgress: "Creata a prove pictures",
                        required: true,
                        type: "photo",
                        name: "endValue",
                        endValue: 6,
                        min: 6,
                        editable: true,
                        finish: false
                    },{
                        description: "Create a description",
                        descriptionInComplete: "",
                        descriptionInProgress: "You must finish this task",
                        type: "text",
                        name: "endValue",
                        endValue: '',
                        editable: true,
                        finish: false
                    },
                ]
            },
        }
    }, {
        id: 2,
        startTime: null,
        icon: 'https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-broom-cleaning--logo-icon-design-template-vector-png-image_574257.jpg',
        title: 'Clean up',
        description: 'Clean up house',
        attachedMedia: [],
        message: [],
        completePercent: 0,
        likes: 0,
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
                        descriptionInComplete: "",
                        descriptionInProgress: "Finish the task in time",
                        required: true,
                        type: "time",
                        name: "endValue",
                        endValue: 1,
                        min: 1,
                        units: 'hrs',
                        editable: true,
                        finish: false
                    },{
                        description: "Number of picture",
                        descriptionInComplete: "",
                        descriptionInProgress: "Creata a prove pictures",
                        required: true,
                        type: "photo",
                        name: "endValue",
                        endValue: 6,
                        min: 6,
                        editable: true,
                        finish: false
                    },{
                        description: "Create a description",
                        descriptionInComplete: "",
                        descriptionInProgress: "You must finish this task",
                        type: "text",
                        name: "endValue",
                        endValue: '',
                        editable: true,
                        finish: false
                    },
                ]
            },
        }
    }
] 