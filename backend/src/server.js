import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req,res)=>res.json({
  success:true,
  service:'EVENTORA API',
  status:'operational',
  timestamp:new Date().toISOString()
}));

app.get('/api/events', (_req,res)=>res.json({
  success:true,
  data:[
    {id:1,title:'Future of Digital Business Summit',category:'Business',city:'Mumbai',status:'published'},
    {id:2,title:'Design & Innovation Conference',category:'Technology',city:'Pune',status:'published'}
  ]
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`EVENTORA API running on http://localhost:${PORT}`));
