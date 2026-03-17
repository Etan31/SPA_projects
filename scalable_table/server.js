import express from "express";
import entityRoutes from "./routes/entities.js";
import attributeRoutes from "./routes/attributes.js";
import valueRoutes from "./routes/values.js";
import tableRoutes from "./routes/table.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api/entities", entityRoutes);
app.use("/api/attributes", attributeRoutes);
app.use("/api/values", valueRoutes);
app.use("/api/table", tableRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
