import { connect } from "mongoose";

export const connectDb = () => {
    return connect("mongodb://localhost:27017/kit-services", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("CONNECTED TO DB");
        })
        .catch(() => {
            console.log("ERROR CONNECTED TO DB");
        });
}