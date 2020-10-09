import consumer from "./consumer"

document.addEventListener('turbolinks: load', () => {
  const room_element = document.getElementById('room-id');
  const room_id = Number(room_element.getAttribute('data-room-id'));

  consumer.log(consumer.subscriptions)

  consumer.subscriptions.subscriptions.forEach((subscription) => {
    consumer.subscriptions.remove(subscription)
  })

  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id }, {
    connected() {
      console.log("connected to " + room_id)
    },

    disconnected() {

    },

    received(data) {
      const user_element = document.getElementById('user-id');
      const user_id = Number(user_element.getAttribute('data-user-id'));

      let html;

      if (user_id === data.message.user_id ) {
        html = data.mine
      } else {
        html = data.theirs
      }

      const messageContainer = document.getElementById('messages')
      messageContainer.innerHTML = messageContainer.innerHTML + html
      }
  });
})
