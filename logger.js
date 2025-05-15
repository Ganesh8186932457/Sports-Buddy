function logAction(message) {
  console.log(message);
  db.collection("logs").add({
    action: message,
    timestamp: new Date()
  });
}
