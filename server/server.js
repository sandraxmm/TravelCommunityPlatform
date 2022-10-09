const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001; 
const app = express();
const { cloudinary } = require('./utils/cloudinary');
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' })); //enables larger image size upload

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
}



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html')); 
});

app.get('/api/images', async (req, res) => {
    const {resources} = await cloudinary.search.expression
    ('folder:travel_comm')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
    const publicIds = resources.map( file => file.
        public_id);
        res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr, {
            upload_preset: 'travel_comm'
        })
        console.log(uploadedResponse);
        res.json({msg: 'Imgae successfully uploaded!!'})
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something went wrong'})
    }
});

// New instance of an Apollo server with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app});

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Call async function to start the server
startApolloServer(typeDefs, resolvers);