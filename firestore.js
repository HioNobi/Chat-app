//Firestore function
const setUpMessage = (state) => {
    if(state){
        canSendMessage = true;
        db.collection("chat-app").orderBy("extra_time").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                writeMessage(doc.data().message, doc.data().time, doc.data().sendUser, doc.data().message);
            });
        });
    } else{
        $("#text-list").empty();
        canSendMessage = false;
    }
}
db.collection('chat-app').orderBy("extra_time").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added' || change.type == 'modified'){
            writeMessage(change.doc.data().message, change.doc.data().time, change.doc.data().sendUser, change.doc.data().message);
        }
    })
})