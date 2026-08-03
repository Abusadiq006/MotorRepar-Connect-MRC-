import express from "express"
import cors from "cors"
import compression from "compression"
import helmet from "helmet"
import morgan from "morgan"

const app = express()

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Welcome to MotorRepair&Connect API"
  });
});

export default app