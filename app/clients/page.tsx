import NewClient from "./NewClient";
import TabClients from "./TabClients";

export default function Clients() {
return(
    <>
    <h1 className="m-10">Clients</h1>
    <div className="mx-20">
    <TabClients />
    </div>
    <NewClient />
    </>
);
}