import "./App.css";

import { Container } from "./modules/Container";

function App() {
    const weddingDate = new Date("2023-12-14T13:00:00");
    return <Container targetDate={weddingDate} />;
}

export default App;
