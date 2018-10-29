import { createSelector } from "reselect"
import _ from "lodash"

const chatType = {
    contact: "chat",
    group: "groupchat",
    chatroom: "chatroom",
    stranger: "stranger"
}

const location = function (state){
    state.location
};


const getLoction = createSelector(
    [ location ],
    (TabMessageArray) => {
        
    }
)

export default getLoction