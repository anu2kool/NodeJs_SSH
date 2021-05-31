express=require('express');
path=require('path');
const bodyparser = require('body-parser');
app=express();


const PORT=process.env.PORT||3000;
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/',(request,response)=>{
	var filepath=path.join(path.resolve(),'index.html');
	response.sendFile(filepath);
});
app.post('/',(request,response)=>{
	var latitude=request.body.latitude;
	var longitude=request.body.longitude;
	console.log(`Latitude: ${latitude}`);
	console.log(`Longitude: ${longitude}`);
	var filepath=path.join(path.resolve(),'index.html');
	response.sendFile(filepath);
});

app.listen(PORT,()=>{
	console.log(`Server starting at ${PORT}`);
});