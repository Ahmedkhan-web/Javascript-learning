let notifications = [
  "New message from Ali",
  "Your order has been shipped",
  "Password changed",
  "New comment on your post",
  "System update available"
];

let preview = notifications.slice(0, 3);

if (preview.length < 3) {
  preview.fill("No new notification", preview.length, 3);
}

let previewString = preview.toString();
let finalPreview = preview.valueOf();

console.log(previewString);
console.log(finalPreview);
