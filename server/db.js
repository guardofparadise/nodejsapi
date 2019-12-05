import mongoose from 'mongoose'

const connectDB = () => {
  mongoose.connect(process.env.REACT_APP_MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  })
  .catch(err => console.log(err))
}

export default connectDB 