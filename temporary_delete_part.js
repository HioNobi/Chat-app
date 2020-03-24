let userNumberList = [
    {
        'name': "Tuan Anh",
        'number':0000
    },
    {
        'name': "Trung Hieu",
        'number':0000
    },
    {
        'name': "Hai Phong",
        'number':0000
    },
    {
        'name': "Quoc Loc",
        'number':0000
        },
    {
        'name': "Cao Minh",
        'number':0000
    },
];







const getMessageNumber = (user) =>{
    for(let i = 0; i < userNumberList.length; i++){
        if(userNumberList[i].name == user){
            userNumberList[i].number += 1;
            return userNumberList[i].number;
        }
    }
}







id: `${user}-message-${getMessageNumber(user)}`//,