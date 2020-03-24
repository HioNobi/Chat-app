//Firestore function
db.collection('chat-app').orderBy("time").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added' || change.type == 'modified'){
            writeMessage(change.doc.data().message, change.doc.data().time, change.doc.data().sendUser);
        }
    })
})