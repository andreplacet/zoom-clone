class Bussines {
    constructor({room, media, view}){
        this.room = room
        this.media = media
        this.view = view
        this.socketBuilder = socketBuilder
            .setOnUserConnected()
            .build()
        this.socketBuilder.emit('join-room', this.room, 'teste01')
        this.currentStream = {}
    }

     static initialize(deps) {
        const instance = new Bussines(deps)
        return instance._init()
    }

    async _init() {
        this.currentStream = this.media.getCamera()
        this.addVideoStream('teste01')
    }

    addVideoStream(userId, stream = this.currentStream) {
        const isCurrentId = false
        this.view.rendeVideo({
            userId,
            stream,
            isCurrentId
        })
    }

    setOnUserConnected = function() {
        return userId => {
            console.log('user connected', userId)
        }
    }
}