import axios from "axios"
import "./reset.scss"
import "./index.scss"

const getFieldPlate = (field, value, index) => `
<div class="room_field">
    <div class="room_field-number room_field_cell">
        ${index}
    </div>
    <div class="room_field-name room_field_cell">
        ${field}
    </div>
    <div class="room_field-value room_field_cell">
        ${value}
    </div>
</div>`

const getRoomPlate = ({id, data}) => `<div class="room"><h1>ID: ${id}</h1>${Object.entries(data).map((field_data, index) => getFieldPlate(...field_data, index)).join('')}</div>`
const getRoomContainer = (room_list) => `<div id="room_container">${room_list.map(getRoomPlate).join('')}</div>`

let roomId_list = []
document.addEventListener("DOMContentLoaded", async function(){
    const idData = (id) => axios.get(`http://193.124.179.116:3332/id/${+id || 18120}`).then(({data}) => data.tasks)
    const button = document.getElementById("submittion")
    const text = document.getElementById("input")
    const roomContainer = document.getElementById("room_container")
    const updateRoomContainer = () => {
        console.log(roomId_list)
        roomContainer.innerHTML = getRoomContainer(roomId_list)
    }
    button.addEventListener("click", async (e) => {
        const data = await idData(text.value)
        roomId_list.push({id: +text.value || 18120, data})
        updateRoomContainer()
    })
})