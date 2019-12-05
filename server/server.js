import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import connectDB from './db'

import { errorHandler } from './middleware/error'
// Route files
import bootcamps from './routes/bootcamps'

connectDB()

const app = express();
app.use(helmet());
app.use(express.json())

if(process.env.REACT_APP_NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler)

const PORT = process.env.REACT_APP_PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.REACT_APP_NODE_ENV} mode on port ${PORT}`))

process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`)
  // Close server 
  server.close(() => process.exit(1))
})