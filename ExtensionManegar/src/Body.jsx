import { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";


function Body() {

    const [filter, setFilter] = useState("All");
    const [items, setItems] = useState([{ id: 1, Img: "logo-devlens", Name: "Dev Lens", Desc: "Quickly inspect page layouts and visualize element boundaries", isOn: true },
    { id: 2, Img: "logo-console-plus", Name: "Console Plus", Desc: "Enhanced developer console with advanced filtering and logging.", isOn: true },
    { id: 3, Img: "logo-dom-snapshot", Name: "Dom Snapshot", Desc: "Capture and export DOM structures quickly", isOn: true },
    { id: 4, Img: "logo-grid-guides", Name: "Grid Guides", Desc: "Overlay customizable grids and alignment guides on any webpage", isOn: true },
    { id: 5, Img: "logo-json-wizard", Name: "Json Wizard", Desc: "Formats, validates, and prettifies JSON responses in-browser", isOn: true },
    { id: 6, Img: "logo-link-checker", Name: "Link Checker", Desc: "Scans and highlights broken links on any page", isOn: true },
    { id: 7, Img: "logo-markup-notes", Name: "Markup Notes", Desc: "Enables annotation and notes directly onto webpages for collaborative debugging", isOn: true },
    { id: 8, Img: "logo-palette-picker", Name: "Palette Picker", Desc: "Instantly extracts color palettes from any webpage", isOn: true },
    { id: 9, Img: "logo-speed-boost", Name: "Speed Boost", Desc: "Optimizes browser resource usage to accelerate page loading", isOn: true },
    { id: 10, Img: "logo-style-spy", Name: "Style Spy", Desc: "Instantly analyze and copy CSS from any webpage element", isOn: true },
    { id: 11, Img: "logo-tab-master-pro", Name: "Tab Master Pro", Desc: "Organizes browser tabs into groups and sessions", isOn: true },
    { id: 12, Img: "logo-viewport-buddy", Name: "Viewport Buddy", Desc: "Simulates various screen resolutions directly within the browser", isOn: true },]);

    function deleteHandle(id) {
        let itemsCopy = items.filter(i => id !== i.id);
        setItems(itemsCopy);
    }

    function toggleHandle(id) {
        let itemsCopy = items.map((i) => {
            if (id == i.id) { return { id: i.id, Img: i.Img, Name: i.Name, Desc: i.Desc, isOn: !(i.isOn) } }
            else return i
        })
        setItems(itemsCopy);
    }

    let list = items.filter((i) => {
        if (filter === "All") return true;
        if (filter === "Active") return i.isOn === true;
        if (filter === "NonActive") return i.isOn !== true;
    });

    return (

        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>


            <div className="header1">

                <h1 style={{ display: 'inline' }}>Extensions</h1>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", width: "fit-content" }}>
                    <Filter text="All" filter={filter} setFilter={setFilter} />
                    <Filter text="Active" filter={filter} setFilter={setFilter} />
                    <Filter text="NonActive" filter={filter} setFilter={setFilter} />
                </div>
            </div>


            <div className="body">
                {
                    list.length > 0 ? <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", gap: "10px", justifyItems: "center" }}>
                        {
                            list.map(item => <Item key={item.id} Img={item.Img} Name={item.Name} Desc={item.Desc} id={item.id} deleteHandle={deleteHandle} isOn={item.isOn} toggleHandle={toggleHandle} />)
                        }
                    </div> : <h1>There is no elements</h1>
                }


            </div>

        </div>
    );




}


export default Body;