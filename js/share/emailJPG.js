var img = new Image();
img.crossOrigin = 'Anonymous';

window.share.emailJPG = {
  name: 'email',
  run: function () {

  var canvas = document.createElement("canvas")

  ctx = canvas.getContext('2d')

  canvas.height = img.naturalHeight
  canvas.width = img.naturalWidth
  ctx.drawImage(img, 0, 0)

  var dataURL = canvas.toDataURL("image/png")
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "")

  var email = prompt("your recipient's email")
  var subject = "my drawing on net-artware "
  var body = "Hello there%0D%0DI made this drawing and thought you'd like it  :)"
  var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body + dataURL
  window = window.open(mailto_link, 'emailWindow')
}
}
