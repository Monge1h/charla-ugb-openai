const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3030

app.use(bodyParser.json())
app.use(cors())
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "YOUR ORGANIZATION", // you can get it from here -> https://platform.openai.com/account/org-settings
    apiKey: 'YOUR API KEY', // watch this -> https://platform.openai.com/account/api-keys
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res)=>{
	const { name, bio, colors, photo, rol} = req.body

	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `minimalistic short and professional landing page of a ${rol}
		use this bio: ${bio}
		use this name: ${name}
		use these colors: [${colors}]
		use this photo: ${photo}
		Use css, use all reccomended portfolio best practices.
		the website should have a navbar
		`,
		temperature: 0.3,
		max_tokens: 3000
	  });


	res.json({ message : completion.data.choices[0].text})
})

app.listen(PORT, ()=>{
	console.log(`listing in http://localhost:${PORT}`)
})








